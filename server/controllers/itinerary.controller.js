import Itinerary from "../models/itinerary.model.js";

import uploadToCloudinary from "../utils/uploadToCloudinary.js";

import extractTextFromPdf from "../utils/extractTextFromPdf.js";

import { extractTextFromImage } from "../services/vision.service.js";

import { generateAIItinerary } from "../services/ai.service.js";

export const createItinerary = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // upload to cloudinary
    const uploadedFile = await uploadToCloudinary(
      file.buffer,
      "travel-documents",
    );

    // extract pdf text
    let extractedText = "";

    if (file.mimetype === "application/pdf") {
      extractedText = await extractTextFromPdf(file.buffer);
    } else {
      extractedText = await extractTextFromImage(file.buffer, file.mimetype);
    }

    // image handling later
    if (!extractedText.trim()) {
      return res.status(400).json({
        success: false,
        message: "Unable to extract text from PDF",
      });
    }

    // AI itinerary
    const generatedItinerary = await generateAIItinerary(extractedText);

    // save mongodb
    const itinerary = await Itinerary.create({
      user: req.user.id,
      uploadedDocument: uploadedFile.secure_url,
      extractedText,
      generatedItinerary,
    });

    res.status(201).json({
      success: true,
      message: "Itinerary created successfully",
      itinerary,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getAllItineraries = async (req, res) => {
  try {
    const itineraries = await Itinerary.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      itineraries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getSingleItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id);

    if (!itinerary) {
      return res.status(404).json({
        success: false,
        message: "Itinerary not found",
      });
    }

    res.status(200).json({
      success: true,
      itinerary,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateItinerary = async (req, res) => {
  try {
    const updated = await Itinerary.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      success: true,
      updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteItinerary = async (req, res) => {
  try {
    await Itinerary.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Itinerary deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

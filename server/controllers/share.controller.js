import { v4 as uuidv4 } from "uuid";
import Itinerary from "../models/itinerary.model.js";

export const createShareLink = async (req, res) => {
  try {
    const { id } = req.params;

    const itinerary = await Itinerary.findById(id);

    if (!itinerary) {
      return res.status(404).json({
        message: "Itinerary not found",
      });
    }

    // If already shared
    if (itinerary.shareId) {
      return res.status(200).json({
        shareUrl: `${process.env.FRONTEND_URL}/share/${itinerary.shareId}`,
      });
    }

    const shareId = uuidv4();

    itinerary.isPublic = true;
    itinerary.shareId = shareId;

    await itinerary.save();

    return res.status(200).json({
      shareUrl: `${process.env.FRONTEND_URL}/share/${shareId}`,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to create share link",
    });
  }
};

export const getSharedItinerary = async (req, res) => {
  try {
    const { shareId } = req.params;

    const itinerary = await Itinerary.findOne({
      shareId,
      isPublic: true,
    });

    if (!itinerary) {
      return res.status(404).json({
        message: "Shared itinerary not found",
      });
    }

    res.status(200).json({
      itinerary,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch shared itinerary",
    });
  }
};

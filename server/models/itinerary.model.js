import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    destination: {
      type: String,
      // required: true,
    },

    startDate: {
      type: Date,
      // required: true,
    },

    endDate: {
      type: Date,
      // required: true,
    },

    budget: {
      type: Number,
      // required: true,
    },

    travelers: {
      type: Number,
    },

    notes: {
      type: String,
    },

    uploadedDocument: {
      type: String,
    },

    extractedText: {
      type: String,
    },

    generatedItinerary: {
      type: String,
    },
    isPublic: {
      type: Boolean,
      default: false,
    },

    shareId: {
      type: String,
      default: null,
    },
  },
  { timestamps: true },
);

const Itinerary = mongoose.model("Itinerary", itinerarySchema);

export default Itinerary;

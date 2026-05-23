import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";
import { generateItinerary } from "../services/itineraryService";

function UploadBox({ setItinerary }) {
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [dragActive, setDragActive] = useState(false);

  // NEW FORM STATE
  const [formDataState, setFormDataState] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travelers: 1,
    budget: "",
    transportType: "",
    notes: "",
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormDataState({
      ...formDataState,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenerate = async () => {
    // Allow either file OR manual details
    const hasManualData = Object.values(formDataState).some(
      (value) => value !== "" && value !== 1,
    );

    if (!file && !hasManualData) {
      return toast.error("Please upload a file or enter travel details");
    }

    try {
      setLoading(true);

      const formData = new FormData();

      // OPTIONAL FILE
      if (file) {
        formData.append("document", file);
      }

      // MANUAL FORM DATA
      Object.keys(formDataState).forEach((key) => {
        formData.append(key, formDataState[key]);
      });

      const data = await generateItinerary(formData);

      setItinerary(data.itinerary);

      toast.success("Itinerary generated");
    } catch (error) {
      console.log(error);

      toast.error(error?.response?.data?.message || "Generation failed");
    } finally {
      setLoading(false);
    }
  };

  // FILE SELECT

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  // DRAG EVENTS

  const handleDragOver = (e) => {
    e.preventDefault();

    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    setDragActive(false);

    const droppedFile = e.dataTransfer.files[0];

    if (droppedFile) {
      setFile(droppedFile);

      toast.success("File added");
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Upload Documents
      </h2>

      <p className="text-gray-500 mb-6">
        Upload flight tickets, hotel bookings, or travel documents.
      </p>

      {/* Upload Box */}

      <label
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer transition-all duration-200
          
          ${
            dragActive
              ? "border-indigo-600 bg-indigo-100 scale-[1.02]"
              : "border-indigo-300 bg-indigo-50 hover:border-indigo-500"
          }
        `}
      >
        <div className="text-5xl mb-4">{dragActive ? "📥" : "📄"}</div>

        <p className="text-lg font-medium text-gray-700">
          Drag & Drop file here
        </p>

        <p className="text-sm text-gray-500 mt-2">or click to browse</p>

        <p className="text-xs text-gray-400 mt-3">PDF, JPG, PNG supported</p>

        <input
          type="file"
          accept=".pdf,image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {/* File Preview */}

      {file && (
        <div className="mt-6 bg-gray-100 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="font-semibold text-gray-800">Uploaded File</p>

            <p className="text-gray-600 mt-1 text-sm">{file.name}</p>
          </div>

          <CheckCircle2 size={32} className="text-green-500" />
        </div>
      )}

      {/* MANUAL FORM */}

      <div className="mt-6 space-y-4">
        <h3 className="text-lg font-semibold">
          Enter Details Manually (Optional)
        </h3>

        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={formDataState.destination}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            type="date"
            name="startDate"
            value={formDataState.startDate}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="date"
            name="endDate"
            value={formDataState.endDate}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            name="travelers"
            placeholder="Travelers"
            value={formDataState.travelers}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            name="budget"
            placeholder="Budget"
            value={formDataState.budget}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
        </div>

        <input
          type="text"
          name="transportType"
          placeholder="Transport Type (Flight, Train...)"
          value={formDataState.transportType}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="notes"
          placeholder="Additional Notes"
          value={formDataState.notes}
          onChange={handleChange}
          rows={4}
          className="w-full border p-3 rounded-lg"
        />
      </div>

      {/* Button */}

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed transition text-white py-4 rounded-xl font-semibold text-lg"
      >
        {loading ? "Generating Itinerary..." : "Generate Itinerary"}
      </button>
    </div>
  );
}

export default UploadBox;

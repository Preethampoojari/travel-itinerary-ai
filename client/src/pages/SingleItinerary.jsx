import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { generateShareLink } from "../services/shareService";
import { getSingleItinerary } from "../services/itineraryService";
import { downloadAsPDF, downloadAsTXT } from "../utils/downloadItinerary";

function SingleItinerary() {
  const { id } = useParams();

  const [trip, setTrip] = useState(null);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleShare = async () => {
    try {
      const data = await generateShareLink(id);

      await navigator.clipboard.writeText(data.shareUrl);

      toast.success("Share link copied!");
    } catch (error) {
      console.log(error);

      toast.error("Failed to generate share link");
    }
  };

  const fetchTrip = async () => {
    try {
      const data = await getSingleItinerary(id);

      setTrip(data.itinerary);
    } catch (error) {
      console.log(error);

      toast.error("Failed to fetch itinerary");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrip();
  }, []);

  if (loading) {
    return (
      <h1 className="text-center mt-20 text-2xl font-semibold">Loading...</h1>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition"
        >
          <ArrowLeft size={20} />
          Back
        </button>
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={handleShare}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Share Itinerary
          </button>

          <button
            onClick={() => downloadAsPDF(trip)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Download PDF
          </button>

          <button
            onClick={() => downloadAsTXT(trip)}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Download TXT
          </button>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="travel"
            loading="lazy"
            className="w-full h-80 object-cover"
          />

          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900">
                Travel Itinerary
              </h1>

              <p className="text-gray-500 text-sm">
                {new Date(trip.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="whitespace-pre-wrap leading-8 text-gray-700">
              <ReactMarkdown>{trip.generatedItinerary}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleItinerary;

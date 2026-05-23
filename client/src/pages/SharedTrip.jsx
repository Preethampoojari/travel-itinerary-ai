import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { getSharedTrip } from "../services/shareService";

function SharedTrip() {
  const { shareId } = useParams();

  const [trip, setTrip] = useState(null);

  const [loading, setLoading] = useState(true);

  const fetchTrip = async () => {
    try {
      const data = await getSharedTrip(shareId);

      setTrip(data.itinerary);
    } catch (error) {
      console.log(error);
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

  if (!trip) {
    return (
      <h1 className="text-center mt-20 text-2xl font-semibold">
        Trip not found
      </h1>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="travel"
            className="w-full h-80 object-cover"
          />

          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900">
                Shared Travel Itinerary
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

export default SharedTrip;

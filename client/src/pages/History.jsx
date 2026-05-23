import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getHistory, deleteItinerary } from "../services/itineraryService";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function History() {
  const [trips, setTrips] = useState([]);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchHistory = async () => {
    try {
      const data = await getHistory();

      setTrips(data.itineraries || []);
    } catch (error) {
      console.log(error);

      toast.error("Failed to fetch history");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this itinerary?",
    );

    if (!confirmDelete) return;

    try {
      await deleteItinerary(id);

      toast.success("Itinerary deleted successfully");

      setTrips((prev) => prev.filter((trip) => trip._id !== id));
    } catch (error) {
      console.log(error);

      toast.error("Failed to delete itinerary");
    }
  };

  if (loading) {
    return (
      <h1 className="text-center mt-20 text-2xl font-semibold">Loading...</h1>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10 text-gray-900">Trip History</h1>

        {trips.length === 0 ? (
          <div className="bg-white rounded-2xl border p-10 text-center">
            <h2 className="text-2xl font-semibold text-gray-700">
              No Trips Yet
            </h2>

            <p className="text-gray-500 mt-3">
              Generate your first AI itinerary.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip) => (
              <div
                key={trip._id}
                className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg transition"
              >
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                  alt="travel"
                  loading="lazy"
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">
                  <p className="text-sm text-gray-500 mb-3">
                    {new Date(trip.createdAt).toLocaleDateString()}
                  </p>

                  <div className="text-gray-700 text-sm leading-7 line-clamp-5">
                    <ReactMarkdown>
                      {trip.generatedItinerary?.slice(0, 220)}
                    </ReactMarkdown>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => navigate(`/itinerary/${trip._id}`)}
                      className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
                    >
                      View Itinerary
                    </button>

                    <button
                      onClick={() => handleDelete(trip._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 rounded-xl font-semibold transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default History;

import UploadBox from "../components/UploadBox";
import { useState } from "react";
import { MapPinned } from "lucide-react";
import ReactMarkdown from "react-markdown";

function Dashboard() {
  const [itinerary, setItinerary] = useState(null);

  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Travel Dashboard</h1>

          <p className="text-gray-600 mt-2 text-lg">
            Upload travel bookings and generate AI-powered itineraries.
          </p>
        </div>

        {/* Layout */}

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Upload Section */}

          <UploadBox setItinerary={setItinerary} />

          {/* Itinerary Preview */}

          <div className="bg-white rounded-2xl border shadow-sm h-fit">
            <div className="border-b px-6 py-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Generated Itinerary
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                AI-generated smart travel plan
              </p>
            </div>

            {itinerary ? (
              <div className="p-6">
                <div className="max-h-[80vh] overflow-y-auto pr-2">
                  <div className="whitespace-pre-wrap text-gray-700 leading-8 text-[15px]">
                    <ReactMarkdown>
                      {itinerary.generatedItinerary}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-10 text-center">
                <div className="flex justify-center mb-4">
                  <MapPinned
                    size={52}
                    className="text-indigo-500"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-700">
                  No itinerary generated yet
                </h3>

                <p className="text-gray-500 mt-2">
                  Upload your booking documents to generate a travel plan.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;

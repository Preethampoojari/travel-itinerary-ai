import API from "../api/axios";

export const generateItinerary = async (formData) => {
  const response = await API.post("/itinerary/create", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const getHistory = async () => {
  const response = await API.get("/itinerary/all");
  return response.data;
};

export const getSingleItinerary = async (id) => {
  const response = await API.get(`/itinerary/${id}`);

  return response.data;
};

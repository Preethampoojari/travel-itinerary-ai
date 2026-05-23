import API from "../api/axios";

export const generateShareLink = async (id) => {
  const response = await API.post(`/share/${id}`);

  return response.data;
};

export const getSharedTrip = async (shareId) => {
  const response = await API.get(`/share/${shareId}`);

  return response.data;
};

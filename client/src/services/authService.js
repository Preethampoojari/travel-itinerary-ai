import API from "../api/axios";

export const registerUser = async (userData) => {
  const response = await API.post("/user/signup", userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await API.post("/user/login", userData);
  return response.data;
};

export const logoutUser = async () => {
  const response = await API.get("/user/logout");

  return response.data;
};

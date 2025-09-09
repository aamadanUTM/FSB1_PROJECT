import apiClient from "../axiosInstance";
export const postLogin = async (data) => {
  try {
    console.log(data);
    const response = await apiClient.post("/auth/login", data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      return {
        code: "invalid",
        message:
          "Username and password are invalid. Please enter correct username and password",
      };
    } else {
      return {
        code: "error",
        error: error.response?.status || "Unknown",
        message:
          "An unexpected server error occurred. Please try again later or contact the administrator.",
      };
    }
  }
};

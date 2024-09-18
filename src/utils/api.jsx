import axios from "axios";

const API_URL = "http://localhost/churchApp/users.php";

export const fetchUsers = async () => {
  try {
    const response = await axios.post(
      API_URL,
      new URLSearchParams({
        action: "fetch",
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    return response.data; // Adjust based on the response structure from your backend
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.post(API_URL, { action: "delete", userId });
    return response.data; // Adjust based on the response structure from your backend
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

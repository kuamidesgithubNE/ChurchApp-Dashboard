import axios from "axios";

const API_URL = "http://localhost/churchApp/announcement.php"; // Replace with your actual server URL and API path

export const addAnnouncements = async ({ title, content, date }) => {
  try {
    const response = await axios.post(
      API_URL,
      new URLSearchParams({
        action: "create",
        title,
        content,
        date,
      }),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding announcement:", error);
    throw error;
  }
};

export const fetchAnnouncements = async () => {
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
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

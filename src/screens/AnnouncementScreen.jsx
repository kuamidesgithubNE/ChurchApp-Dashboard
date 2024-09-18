import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/SideBar";
import Header from "../components/Header/AppBar";
import { NavLink } from "react-router-dom";
import { fetchAnnouncements } from "../utils/announcement_api";

const AnnouncementScreen = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchedAnnouncement = async () => {
      try {
        const response = await fetchAnnouncements();
        console.log(response);
        if (response.status === "success") {
          setAnnouncements(response.data); // Set the fetched events to the state
        } else {
          console.error("Failed to fetch events:", response.message);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchedAnnouncement();
  }, []);

  return (
    <div className="page">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">
          <div className="dashboard-table">
            <div className="dashboard-table-header">
              <h3>Announcement Lists</h3>
              <NavLink className="Links" to="/addannouncements">
                <button className="add-user-btn">ADD EVENTS</button>
              </NavLink>
            </div>
            <div className="table-container">
              <table className="user-table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>added_at</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {announcements.length > 0 ? (
                    announcements.map((announcement) => (
                      <tr key={announcement.id}>
                        <td>{announcement.id}</td>
                        <td>{announcement.title}</td>
                        <td className="message-cell">
                          {announcement.content}
                        </td>{" "}
                        {/* Apply message-cell class */}
                        <td>{announcement.date}</td>
                        <td>{announcement.added_at}</td>
                        <td>
                          <button className="edit-btn">EDIT</button>
                          <button className="delete-btn">DELETE</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" style={{ textAlign: "center" }}>
                        No Announcement found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementScreen;

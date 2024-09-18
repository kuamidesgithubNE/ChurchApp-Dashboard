import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/SideBar";
import Header from "../components/Header/AppBar";
import { NavLink } from "react-router-dom";
import { fetchEvents } from "../utils/event_api";

const EventScreen = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchedEvents = async () => {
      try {
        const response = await fetchEvents();
        console.log(response);
        if (response.status === "success") {
          setEvents(response.data); // Set the fetched events to the state
        } else {
          console.error("Failed to fetch events:", response.message);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchedEvents();
  }, []);

  return (
    <div className="page">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">
          <div className="dashboard-table">
            <div className="dashboard-table-header">
              <h3>Events Lists</h3>
              <NavLink className="Links" to="/addevents">
                <button className="add-user-btn">ADD EVENTS</button>
              </NavLink>
            </div>
            <div className="table-container">
              <table className="user-table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Organizer</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {events.length > 0 ? (
                    events.map((event) => (
                      <tr key={event.id}>
                        <td>{event.id}</td>
                        <td>{event.title}</td>
                        <td>{event.date}</td>
                        <td>{event.location}</td>
                        <td>{event.organizer_id}</td>
                        <td>
                          <button className="edit-btn">EDIT</button>
                          <button className="delete-btn">DELETE</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" style={{ textAlign: "center" }}>
                        No events found
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

export default EventScreen;

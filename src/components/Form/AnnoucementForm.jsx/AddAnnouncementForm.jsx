import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Sidebar from "../../../components/Sidebar/SideBar";
import Header from "../../../components/Header/AppBar";
import { NavLink } from "react-router-dom";
import { addAnnouncements } from "../../../utils/announcement_api"; // API function to add announcement
import "./AddAnnouncementForm.css"; // Import external CSS for styling

const AddAnnouncementForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    date: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the add announcement API
      const response = await addAnnouncements({
        title: formData.title,
        content: formData.content,
        date: formData.date,
      });

      // If the API call was successful, clear the form
      if (response.success) {
        setFormData({
          title: "",
          content: "",
          date: "",
        });
        // Navigate back to the announcement page
        navigate("/announcement");
      } else {
        console.error("Failed to add announcement:", response.message);
      }
    } catch (error) {
      console.error("Error adding announcement:", error);
    }
  };

  return (
    <div className="page">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">
          <div className="dashboard-table">
            <div className="dashboard-table-header">
              <h3>Add Announcements</h3>
              <NavLink className="links" to="/announcement">
                <button className="btn-back" type="button">
                  BACK
                </button>
              </NavLink>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-content">
                <div className="form-group">
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter title"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="date">Date:</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="content">Provide Description:</label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Enter Description"
                    required
                  />
                </div>
              </div>

              <div className="form-buttons">
                <button className="btn-save" type="submit">
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAnnouncementForm;

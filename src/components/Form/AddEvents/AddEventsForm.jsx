import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar/SideBar";
import Header from "../../../components/Header/AppBar";
import "./AddEventsForm.css"; // import external CSS for styling

const AddEventsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    isBan: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // For now, you can log the formData
    // Add your submit logic here, such as an API call to add a user
  };

  return (
    <div className="page">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">
          <div className="dashboard-table">
            <div className="dashboard-table-header">
              <h3>Add Events</h3>
              <button className="btn-back" type="button">
                BACK
              </button>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-content">
                <div className="form-group">
                  <label htmlFor="name">Title:</label>
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
                  <label htmlFor="organizer">Organizer's Name:</label>
                  <input
                    type="text"
                    name="organizer"
                    value={formData.organizer}
                    onChange={handleChange}
                    placeholder="Enter organizer name"
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
                  <label htmlFor="location">Location:</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter location"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="role">Provide Description:</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter Description"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="role">Upload Image:</label>
                  <input
                    type="file"
                    name="upload"
                    value={formData.upload}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-buttons">
                  <button className="btn-save" type="submit">
                    SAVE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEventsForm;

import React, { use } from "react";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/SideBar";
import Header from "../components/Header/AppBar";
import { fetchTestimony } from "../utils/testimonies_API";

const TestimonyScreen = () => {
  const [testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    const fetchedTestimony = async () => {
      try {
        const response = await fetchTestimony();
        setTestimonies(response.data);
        console.log("Testimonies", testimonies);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchedTestimony();
  }, []);

  return (
    <div className="page">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">
          <div className="dashboard-table">
            <div className="dashboard-table-header">
              <h3>Sermon Lists</h3>
              <button className="add-user-btn">ADD SERMON</button>
            </div>
            <div className="table-container">
              <table className="user-table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Content</th>
                    <th>Date Shared</th>
                  </tr>
                </thead>
                <tbody>
                  {testimonies.map((testimony) => (
                    <tr key={testimony.id}>
                      <td>{testimony.id}</td>
                      <td>{testimony.username}</td>
                      <td className="message-cell">{testimony.content}</td>
                      <td>{testimony.shared_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonyScreen;

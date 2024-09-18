import React, { useState, useContext } from "react";
import Sidebar from "../components/Sidebar/SideBar";
import Header from "../components/Header/AppBar";
import AuthContext from "../components/Context"; // Import the context

const ProfilePicScreen = () => {
  const { user, updateProfile } = useContext(AuthContext); // Get the updateProfile function from context
  const [selectedImage, setSelectedImage] = useState(null);
  const [fullName, setFullName] = useState(user?.fullname || "");
  const [email, setEmail] = useState(user?.email || "");
  const [userId, setUserID] = useState(user?.user_id || "");
  const [username, setUsername] = useState(user?.username || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [dob, setDob] = useState(user?.dob || "");
  const [error, setError] = useState("");

 

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSaveChanges = async () => {
    const profileData = {
      fullName,
      email,
      username,
      phone,
      imaege,
      dob,
      // You can handle the image upload separately and pass its URL
    };

    const success = await updateProfile(profileData);
    if (success) {
      // Profile updated successfully
      console.log("Profile updated:", profileData);
    } else {
      setError("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="page">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">
          <div className="profile-container">
            <h2>Profile</h2>

            {/* Profile Picture Section */}
            <div className="profile-pic-section">
              <div className="profile-pic-box">
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Profile"
                    className="profile-pic"
                  />
                ) : (
                  <div className="profile-pic-placeholder">
                    <i className="fa fa-user-circle" />
                  </div>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            {/* Profile Details Section */}
            <div className="profile-details-section">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>

              {error && <p className="error">{error}</p>}

              <button onClick={handleSaveChanges} className="save-btn">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicScreen;

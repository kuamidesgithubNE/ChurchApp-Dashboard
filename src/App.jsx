import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./components/Context";

// imported Screens
import Login from "./screens/AuthScreen/Login";
import HomeScreen from "./screens/HomeScreen";
import PrivateRoute from "./components/PrivateRoute";
import Donation from "./screens/DonationScreen";
import AnnouncementScreen from "./screens/AnnouncementScreen";
import EventScreen from "./screens/EventScreen";
import SermonScreen from "./screens/SermonScreen";
import UserScreen from "./screens/UserScreen";
import OfferingScreen from "./screens/OfferingScreen";
import TitheScreen from "./screens/TithesScreen";
import PrayerRequestScreen from "./screens/PrayerRequest";
import TestimonyScreen from "./screens/TestimonyScreen";
import ProfilePicScreen from "./screens/ProfileScreen";

// imported Forms
import AddEventsForm from "./components/Form/AddEvents/AddEventsForm";
import AddAnnouncementForm from "./components/Form/AnnoucementForm.jsx/AddAnnouncementForm";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomeScreen />
              </PrivateRoute>
            }
          />
          <Route path="/events" element={<EventScreen />} />
          <Route path="/users" element={<UserScreen />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/announcement" element={<AnnouncementScreen />} />
          <Route path="/sermon" element={<SermonScreen />} />

          {/* Add forms  */}
          <Route path="/addevents" element={<AddEventsForm />} />
          <Route path="/addannouncements" element={<AddAnnouncementForm />} />
          <Route path="/offering" element={<OfferingScreen />} />
          <Route path="/tithe" element={<TitheScreen />} />
          <Route path="/prayer" element={<PrayerRequestScreen />} />
          <Route path="/testimony" element={<TestimonyScreen />} />
          <Route path="/profile" element={<ProfilePicScreen />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

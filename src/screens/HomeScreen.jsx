import Sidebar from "../components/Sidebar/SideBar";
import Header from "../components/Header/AppBar";
import { NavLink } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="page">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
        <div className="dashboard-content">
          <CardContainer />
        </div>
      </div>
    </div>
  );
};

const CardContainer = () => (
  <div className="cardContainer">
    <NavLink className="Link" to="/users">
      <div className="card">
        <p>Total Users</p>
        <div className="cardDetails">
          <span>3</span>
          <i className="fa fa-user"></i>
        </div>
      </div>
    </NavLink>

    {/* second card */}
    <div className="card">
      <p>Total Sermons Uploaded</p>
      <div className="cardDetails">
        <span>3</span>
        <i className="fa fa-microphone"></i>
      </div>
    </div>

    {/* third card  */}

    <div className="card">
      <p>Total Donations Made</p>
      <div className="cardDetails">
        <span>20</span>
        <i className="fa fa-heart"></i>
      </div>
    </div>
  </div>
);

export default HomeScreen;

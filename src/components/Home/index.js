import React from "react";
import profileLogo from "../../assets/logos/profileIcon.png";
import moptroLogo from "../../assets/logos/moptroLogo.png";
import home from "../../assets/logos/home.png";
import profile from "../../assets/logos/profile.png";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Home() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/dashboard");
  };

  const navigateEmployeelist = () => {
    navigate("/employee");
  };

  return (
    <div className="dashboard-cont">
      <img className="prof-logo" alt="profile Logo" src={profileLogo} />
      <div>
        <p className="home-num">4</p>
        <img className="moptro-logo" alt="Moptro Logo" src={moptroLogo} />
      </div>
      <div className="dashboard-card">
        <div className="epd-cont">
          <p className="epd">Employee Productivity Dashboard</p>
        </div>

        <div>
          <div className="days-per-cont">
            <p className="days">Productivity on Monday</p>
            <p className="percent">4%</p>
          </div>
          <div className="hor-bar"></div>
        </div>

        <div>
          <div className="days-per-cont">
            <p className="days">Productivity on Tueday</p>
            <p className="percent">92%</p>
          </div>
          <div className="hor-bar1"></div>
        </div>

        <div>
          <div className="days-per-cont">
            <p className="days">Productivity on Wednesday</p>
            <p className="percent">122%</p>
          </div>
          <div className="hor-bar2"></div>
        </div>

        <div>
          <div className="days-per-cont">
            <p className="days">Productivity on Thursday</p>
            <p className="percent">93%</p>
          </div>
          <div className="hor-bar3"></div>
        </div>

        <div>
          <div className="days-per-cont">
            <p className="days">Productivity on Friday</p>
            <p className="percent">89%</p>
          </div>
          <div className="hor-bar4"></div>
        </div>

        <div>
          <div className="days-per-cont">
            <p className="days">Productivity on Saturday</p>
            <p className="percent">98%</p>
          </div>
          <div className="hor-bar5"></div>
        </div>
      </div>
      <div className="home-prof-cont">
        <div className="home-card" onClick={navigateHome}>
          <img className="home-icon" alt="home" src={home} />
        </div>
        <div className="home-card" onClick={navigateEmployeelist}>
          <img className="home-icon" alt="profile" src={profile} />
        </div>
      </div>
    </div>
  );
}

export default Home;

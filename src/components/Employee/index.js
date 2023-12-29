import React from "react";
import profileLogo from "../../assets/logos/profileIcon.png";
import moptroLogo from "../../assets/logos/moptroLogo.png";
import search from "../../assets/logos/search2.png";
import home from "../../assets/logos/home.png";
import profile from "../../assets/logos/profile.png";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Employee() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/dashboard");
  };

  const navigateEmployeelist = () => {
    navigate("/employee");
  };

  return (
    <div className="employee-cont">
      <img className="prof-logo" alt="profile Logo" src={profileLogo} />
      <div>
        <p className="home-num">4</p>
        <img className="moptro-logo" alt="Moptro Logo" src={moptroLogo} />
      </div>
      <div className="search-cont-emp">
        <input
          className="input-style"
          type="search"
          placeholder="Search with name"
        />
        <img className="search-icon" alt="search" src={search} />
      </div>
      <div className="employee-card">
        <div className="emp-id-cont">
          <p className="emp-id">EMP ID : 1</p>
          <span className="emp-id1">1</span>
        </div>
        <p className="name">Name : Arjun</p>
        <p className="name">
          DOB : <span className="dob-date">16-11-2000</span>
        </p>
        <p className="name">
          Role : <span className="role">Software Engineer</span>
        </p>
      </div>

      <div className="employee-card2">
        <div className="emp-id-cont">
          <p className="emp-id">EMP ID : 2</p>
          <span className="emp-id1">2</span>
        </div>
        <p className="name">Name : Mahesh</p>
        <p className="name">
          DOB : <span className="dob-date">15-01-2000</span>
        </p>
        <p className="name">
          Role : <span className="role">Web Developer</span>
        </p>
      </div>

      <div className="home-prof-cont1">
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

export default Employee;

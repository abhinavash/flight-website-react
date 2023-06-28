import React from "react";
import Flight from "../../assets/flight.png";
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={Flight} alt="" className="Logo" />
          </div>
          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className="scoialIcon flex">
            <CiFacebook className="icon" />
            <FiTwitter className="icon" />
            <AiOutlineYoutube className="icon" />
            <BsInstagram className="icon" />
          </div>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Check In</a>
          </li>
          <li>
            <a href="">Manage your booking</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="">Faq</a>
          </li>
          <li>
            <a href="">How to</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Check In</a>
          </li>
          <li>
            <a href="">Manage your booking</a>
          </li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Contact Us</span>
          <li>
            <a href="">Faq</a>
          </li>
          <li>
            <a href="">How to</a>
          </li>
          <li>
            <a href="">Flight Status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Check In</a>
          </li>
          <li>
            <a href="">Manage your booking</a>
          </li>
        </div>

      </div>
      <div className="copyRightDiv flex">
        <p>Courtesy Design | Developed by <a href="abhinav" target="__blank">Abhinav Ashesh</a></p>
      </div>
    </div>
  );
};

export default Footer;

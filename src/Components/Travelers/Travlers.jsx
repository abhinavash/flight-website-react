import React from "react";

// image imported

import paris from "../../assets/paris.jpg";
import traveler from "../../assets/userOne.jpg";

const Travlers = () => {
  return (
    <div className="travelers container section">
      <div className="travelersSection">
        <h2>Top Travelers of this months</h2>

        <div className="travelersContainer grid">
          <div className="singleTraveler">
            <img src={paris} alt="" className="destinationImage" />
            <div className="travelerDetails">
            <div className="travelerPictures">
              <img src={traveler} alt="traveler" className="travelerImage" />
            </div>
            <div className="travelerName">
              <span>Obs</span>
              <p>@obssolutions</p>
            </div>
          </div>
          </div>      
        </div>

        <div className="travelersContainer grid">
          <div className="singleTraveler">
            <img src={paris} alt="" className="destinationImage" />
            <div className="travelerDetails">
            <div className="travelerPictures">
              <img src={traveler} alt="traveler" className="travelerImage" />
            </div>
            <div className="travelerName">
              <span>Obs</span>
              <p>@obssolutions</p>
            </div>
          </div>
          </div>      
        </div>

        <div className="travelersContainer grid">
          <div className="singleTraveler">
            <img src={paris} alt="" className="destinationImage" />
            <div className="travelerDetails">
            <div className="travelerPictures">
              <img src={traveler} alt="traveler" className="travelerImage" />
            </div>
            <div className="travelerName">
              <span>Obs</span>
              <p>@obssolutions</p>
            </div>
          </div>
          </div>      
        </div>
      </div>
    </div>
  );
};

export default Travlers;

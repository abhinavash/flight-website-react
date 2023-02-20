import React from 'react'
import {HiOutlineLocationMarker} from "react-icons/hi";
import {RxCalendar} from "react-icons/rx";
import {MdOutlineCardTravel} from "react-icons/md";

const Search = () => {
  return (
    <div className="search container section">
      <div className="sectionContainer grid">

        <div className="btns flex">
          <div className="singleBtn">
            <span>Economy</span>
          </div>
          <div className="singleBtn">
            <span>Business Class</span>
          </div>
          <div className="singleBtn">
            <span>First Class</span>
          </div>
        </div>

        <div className="seachInput flex">
          <div className="singleInput flex">
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon"/>
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder='where do want to go?'/>
            </div>
          </div>

          {/* //single Inoput */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <MdOutlineCardTravel className="icon"/>
            </div>
            <div className="texts">
              <h4>Travel</h4>
              <input type="text" placeholder='Add Guest'/>
            </div>
          </div>

          {/* //single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon"/>
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="text" placeholder='Add Date'/>
            </div>
          </div>

           {/* //single Input */}
           <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon"/>
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="text" placeholder='Add Date'/>
            </div>
          </div>

          <button className='btn btnBlock flex'>Search</button>

        </div>
      </div>
    </div>
  )
}

export default Search
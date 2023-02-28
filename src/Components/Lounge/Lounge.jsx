import React from 'react'

const Lounge = () => {
  return (
    <div className='lounge container section'>
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src="" alt=""/>
        </div>
        
        <div className="textDiv">
          <h2>Uncompained Minor Lounge</h2>

          <div className="grids grid">
          <div className="singleGrid">
            <span className="gridTitle">
              Help through the airport
            </span>
            <p>You can also call airlines from your phone and book flight tickets to one of your favorite destination</p>
          </div>
        </div>

        <div className="grids grid">
          <div className="singleGrid">
            <span className="gridTitle">
             Priority Boarding
            </span>
            <p>You can also call airlines from your phone and book flight tickets to one of your favorite destination</p>
          </div>
        </div>

        <div className="grids grid">
          <div className="singleGrid">
            <span className="gridTitle">
              Care on the flight
            </span>
            <p>You can also call airlines from your phone and book flight tickets to one of your favorite destination</p>
          </div>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default Lounge
import React from 'react'

const Subscribers = () => {
  return (
    <div className='subscribers container section'>
      <div className="sectionContainer section">
        <h2>Subscribe Newsletter & get news letter</h2>

        <div className="inputDiv flex">
          <input type="text" placeholder='Enter your email address' />
          <button className='btn'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Subscribers
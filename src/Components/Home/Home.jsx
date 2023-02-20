import React from 'react'
import Plane from "../../assets/planeOne.png";
import Video from "../../assets/video.mp4";
const Home = () => {
  return (
    <div className='home flex container'>
        <div className="mainText">
          <h1>Create Everlasting Memories With Us</h1>
        </div>

        <div className="homeImages flex">
          <div className="videoDiv">
            <video src={Video} autoPlay muted loop className='video'></video>
          </div>
          <img src={Plane} alt="plane" className='plane'/>
        </div>
    </div>
  )
}

export default Home
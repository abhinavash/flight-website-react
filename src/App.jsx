import React from 'react'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Info from './Components/Info/Info'
import Lounge from './Components/Lounge/Lounge'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import Subscribers from './Components/Subscribers/Subscribers'
import Support from './Components/Support/Support'
import Travlers from './Components/Travelers/Travlers'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Info/>
      <Lounge/>
      {/* <Travlers/>
      <Subscribers/>
      <Footer/> */}
    </div>
  )
}

export default App
import React from 'react'
import SideBar from './components/sidebar/SideBar';
import MatchList from './components/matches/MatchList.jsx';
import "../App.css"

const Home = () => {
  return (
    <div className='home-container'>
      <div className="left">
        <SideBar />
      </div>
      <div className="middle">
        < MatchList />
      </div>
      <div className="right">
        {/* Right content here */}
        hello
      </div>
    </div>
  )
}

export default Home

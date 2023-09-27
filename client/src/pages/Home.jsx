import React from 'react'
import SideBar from './components/sidebar/SideBar';
import ThreadsList from './components/threads/threadList';
import "../App.css"


const Home = () => {

  return (
    <div className='home-container'>
      <div className="left">
        <SideBar />
      </div>
      <div className="middle">
        {/* < ThreadsList /> */}
        <div className="events">
          <a href="/" className="event">
            <span className="event-header">
              <span className="event-left">
                <span className="user">user001</span>
                <span className="time">date</span>
              </span>
              <span className="event-right">right</span>
            </span>
            <span className="content">
              <span className="event-title">This is the title of the event</span>
            </span>
            <span className="buttons">
              <button>test</button>
              <button>test</button>
              <button>test</button>
              <button>test</button>
            </span>
          </a>
          <a href="/" className="event">
            <span className="event-header">
              <span className="event-left">
                <span className="user">user001</span>
                <span className="time">date</span>
              </span>
              <span className="event-right">right</span>
            </span>
            <span className="content">
              <span className="event-title">UFC Gaethje vs Khabib</span>
            </span>
            <span className="buttons">
              <button>test</button>
              <button>test</button>
              <button>test</button>
              <button>test</button>
            </span>
          </a>
          <a href="/" className="event">
            <span className="event-header">
              <span className="event-left">
                <span className="user">user001</span>
                <span className="time">date</span>
              </span>
              <span className="event-right">right</span>
            </span>
            <span className="content">
              <span className="event-title">Wrestlemania</span>
            </span>
            <span className="buttons">
              <button>test</button>
              <button>test</button>
              <button>test</button>
              <button>test</button>
            </span>
          </a>
        </div>
      </div>
      <div className="right">
        {/* Right content here */}
        hello
      </div>
    </div>
  )
}

export default Home

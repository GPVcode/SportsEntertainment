import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';

const SideBar = () => {

    const handleHomeClick = (e) => {
        
    }
  return (
   <div className='sidebar-container'>
      <div className="sidebar-default" onClick={handleHomeClick}>
        <Link to="/home" className="sidebar-btn">
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
      </div>
       
      <div className="promotions">
        <span className='sidebar-title'>Promotions</span>

        <Link to="/wwe" className="sidebar-btn">Logo WWE</Link>
        <a href="/aew" className="sidebar-btn">Logo AEW</a>
        <a href="/ufc" className="sidebar-btn">Logo UFC</a>
      </div>
    </div>
  )
}

export default SideBar

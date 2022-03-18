import React from 'react';
import './navbar.css';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Navbar() {
  return (
    <div>
        <nav className='main-nav'>
            <div className='logo'>
                <h2>Logo</h2>
            </div>

            <div className='menu-links'>
                <ul>
                    <li>
                        < HomeIcon />
                        <a href='#'> Home </a>
                    </li>
                    <li>
                        < FormatListBulletedIcon />
                        <a href='#'> List </a>
                    </li>
                    <li>
                        < SettingsIcon />
                        <a href='#'> Escalation </a>
                    </li>

                    <li>
                        < SettingsIcon />
                        <a href='#'> Setting </a>
                    </li>
                    <li>
                        < AccountCircleIcon />
                        <a href='#'> Account </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
import React from 'react'

import NotificationsIcon from '@mui/icons-material/Notifications';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import GetAppIcon from '@mui/icons-material/GetApp';

import "./MoreT.css";

const MoreT = () => {
  return (
    <div className='moret'>
        <div className='moret__in'>
            <NotificationsIcon />
            <p>Notifications Preferences</p>
        </div><hr/>
        <div className='moret__in'>
            <MonetizationOnIcon />
            <p>Sell on Flipkart</p>
        </div><hr/>
        <div className='moret__in'>
            <LiveHelpIcon />
            <p>24*7 Customer Care</p>
        </div><hr/>
        <div className='moret__in'>
            <GetAppIcon />
            <p>Download App</p>
        </div>
      
    </div>
  )
}

export default MoreT

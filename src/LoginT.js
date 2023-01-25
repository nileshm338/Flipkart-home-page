import React from 'react'

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import "./LoginT.css";

const LoginT = () => {
    return (
        <div className='logint'>

            <div className='logint__in'>
                <h2>New Customer?</h2>
                <h3>Sign Up</h3>
            </div><hr />
            <div className='logint__in'>
                <AccountCircleIcon />
                <p>My Profile</p>
            </div><hr />
            <div className='logint__in'>
                <img src='//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png' alt='flipkartplus' />
                <p>Flipkart Plus Zone</p>
            </div><hr />
            <div className='logint__in'>
                <StoreIcon />
                <p>Orders</p>
            </div><hr />

            <div className='logint__in'>
                <EmojiEventsIcon />
                <p>Rewards</p>
            </div><hr />
            <div className='logint__in'>
                <CardGiftcardIcon />
                <p>Gifts Cards</p>
            </div>

        </div>
    )
}

export default LoginT

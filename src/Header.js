import React from 'react'
import './Header.css';

import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

import MoreT from './MoreT';
import LoginT from './LoginT';




const Header = () => {
    return (
        <div className='header'>

{/* Flipkart logo */}
            <div className='header__first'>
                <img src='//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt='flipkartlogo' />
                <div className='header__first1'>
                    <span className='1'>Explore</span>
                    <span style={{
                        color:'#f9e107'
                    }}>Plus</span>
                    <span><img width="10" src='//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png' alt='flipkartplus' /></span>
                </div>
            </div>

{/* SearchIcon logo */}
            <div className='header__second'>
                <input type="text" placeholder='Search for products,brands and more' />
                <SearchIcon />
            </div>

{/* Login logo */}
            <div className='header__third'>
                <Tippy  theme='light' content={<LoginT></LoginT>}interactive={true} offset={[5,18]}>
                <button>Login</button>
                </Tippy>
            </div>

{/* More logo */}
            <div className='header__fourth'>
                <Tippy  theme='light' content={<MoreT></MoreT>} interactive={true}>
                <span>More</span>
                </Tippy>
                <ExpandMoreIcon />


            </div>
            <div className='header__fifth'>
                <ShoppingCartIcon />
                <p>Cart</p>
            </div>

        </div>
    )
}

export default Header

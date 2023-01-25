import React from 'react'
import "./Women.css";

import Tippy from '@tippyjs/react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import WomenEthnicWear from './WomenEthnicWear';
import WomenEthnicBottoms from './WomenEthnicBottoms';
import WomenFootwear from './WomenFootwear';

const Women = () => {
  return (
    <div className='women'>
            <div className='women__in'>
                <Tippy theme='light' content={<WomenEthnicWear></WomenEthnicWear>} interactive={true} placement='right' >
                    <p>Ethnic Wear</p>
                </Tippy>
                <KeyboardArrowRightIcon />
            </div>
            <div className='women__in'>
                <Tippy theme='light' content={<WomenEthnicBottoms></WomenEthnicBottoms>} interactive={true} placement='right' >
                    <p>Ethnic Bottoms</p>
                </Tippy>
                <KeyboardArrowRightIcon />
            </div>
            <div className='women__in'>
                <Tippy theme='light' content={<WomenFootwear></WomenFootwear>} interactive={true} placement='right' >
                    <p>Women Footwear</p>
                </Tippy>
                <KeyboardArrowRightIcon />
            </div>
        </div>
  )
}

export default Women

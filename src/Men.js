import React from 'react'

import "./Men.css";

import Tippy from '@tippyjs/react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import MenTopWear from './MenTopWear';
import MenBottomWear from './MenBottomWear';
import MenWinterWear from './MenWinterWear';
import MenEthnicWear from './MenEthnicWear';
import MenFootwear from './MenFootwear';

const Men = () => {
    return (
        <div className='men'>
            <div className='men__in'>
                <Tippy theme='light' content={<MenTopWear></MenTopWear>} interactive={true} placement='right' >
                    <p>Top Wear</p>
                </Tippy>
                <KeyboardArrowRightIcon />
            </div>
            <div className='men__in'>
                <Tippy theme='light' content={<MenBottomWear></MenBottomWear>} interactive={true} placement='right' >
                    <p>Bottom Wear</p>
                </Tippy>
                <KeyboardArrowRightIcon />
            </div>
            <div className='men__in'>
                <Tippy theme='light' content={<MenWinterWear></MenWinterWear>} interactive={true} placement='right' >
                    <p>Winter Wear</p>
                </Tippy>
                <KeyboardArrowRightIcon />
            </div>
            <div className='men__in'>
                <Tippy theme='light' content={<MenEthnicWear></MenEthnicWear>} interactive={true} placement='right' >
                    <p>Ethnic Wear</p>
                </Tippy>
                <KeyboardArrowRightIcon />
            </div>
            <div className='men__in'>
                <Tippy theme='light' content={<MenFootwear></MenFootwear>} interactive={true} placement='right' >
                    <p>Men Footwear</p>
                </Tippy>
                <KeyboardArrowRightIcon />
            </div>
        </div>
    )
}

export default Men

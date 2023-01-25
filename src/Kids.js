import React from 'react'

import "./Kids.css";

import Tippy from '@tippyjs/react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import KidsBoysClothing from './KidsBoysClothing';
import KidsBoysFootwear from './KidsBoysFootwear';
import KidsGirlsClothing from './KidsGirlsClothing';
import KidsGirlsFootwear from './KidsGirlsFootwear';

const Kids = () => {
  return (
    <div className='kids'>
            <div className='kids__in'>
                <Tippy theme='light' content={<KidsBoysClothing></KidsBoysClothing>} interactive={true} placement='right' >
                    <p>Boy's Clothing</p>
                </Tippy>
                <KeyboardArrowRightIcon />
            </div>
            <div className='kids__in'>
                <Tippy theme='light' content={<KidsBoysFootwear></KidsBoysFootwear>} interactive={true} placement='right' >
                    <p>Boy's Footwear</p>
                </Tippy>
                <KeyboardArrowRightIcon />
            </div>
            <div className='kids__in'>
                <Tippy theme='light' content={<KidsGirlsClothing></KidsGirlsClothing>} interactive={true} placement='right' >
                    <p>Girl's Clothing</p>
                </Tippy>
                <KeyboardArrowRightIcon />
            </div>
            <div className='kids__in'>
                <Tippy theme='light' content={<KidsGirlsFootwear></KidsGirlsFootwear>} interactive={true} placement='right' >
                    <p>Girl's Footwear</p>
                </Tippy>
                <KeyboardArrowRightIcon />
            </div>
        </div>
  )
}

export default Kids

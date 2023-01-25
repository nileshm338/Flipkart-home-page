import React from 'react'


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import "./Fashion.css";

import Tippy from '@tippyjs/react';

import Men from './Men';
import Women from './Women';
import Kids from './Kids';

const Fashion = () => {
  return (
    <div className='fashion'>
        <div className='fashion__in'>
        <Tippy  theme='light' content={<Men></Men>} interactive={true} placement='bottom' >
            <p>Men</p>
        </Tippy>
            <KeyboardArrowDownIcon />         
        </div>
        <div className='fashion__in'>
        <Tippy  theme='light' content={<Women></Women>} interactive={true} placement='bottom' >
            <p>Women</p>
        </Tippy>
            <KeyboardArrowDownIcon /> 
        </div>
        <div className='fashion__in'>
        <Tippy  theme='light' content={<Kids></Kids>} interactive={true} placement='bottom' >
            <p>Kids</p>
        </Tippy>
            <KeyboardArrowDownIcon />
        </div>
      
    </div>
  )
}

export default Fashion

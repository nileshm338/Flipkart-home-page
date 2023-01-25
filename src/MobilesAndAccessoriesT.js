import React from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import "./MobilesAndAccessoriesT.css";
import Tippy from '@tippyjs/react';

import Mobiles from './Mobiles';
import MobileAccessories from './MobileAccessories';

const MobilesAndAccessoriesT = () => {
  return (
    <div className='mobilesAndAccessoriest'>
        <div className='mobilesAndAccessoriest__in'>
        <Tippy  theme='light' content={<Mobiles></Mobiles>} interactive={true} placement='bottom' >
            <p>Mobiles</p>
        </Tippy>
            <KeyboardArrowDownIcon />
        </div>
        <div className='mobilesAndAccessoriest__in'>
        <Tippy  theme='light' content={<MobileAccessories></MobileAccessories>} interactive={true} placement='bottom' >
            <p>Mobiles Accessories</p>
        </Tippy>
            <KeyboardArrowDownIcon />
        </div>
      
    </div>
  )
}

export default MobilesAndAccessoriesT

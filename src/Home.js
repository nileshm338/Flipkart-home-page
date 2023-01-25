import React from 'react'

import Tippy from '@tippyjs/react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import "./Home.css";

import HomeFurnishings from './HomeFurnishings';
import LivingRoomFurniture from './LivingRoomFurniture';
import KitchenAndDining from './KitchenAndDining';
import BedroomFurniture from './BedroomFurniture';
import KidsFurniture from './KidsFurniture';
import LightingsAndElectricals from './LightingsAndElectricals';

const Home = () => {
  return (
    <div className='home'>
    <div className='home__in'>
        <Tippy theme='light' content={<HomeFurnishings></HomeFurnishings>} interactive={true} placement='bottom' >
            <p>Home Furnishings</p>
        </Tippy>
        <KeyboardArrowDownIcon />
    </div>
    <div className='home__in'>
        <Tippy theme='light' content={<LivingRoomFurniture></LivingRoomFurniture>} interactive={true} placement='bottom' >
            <p> Living Room Furniture</p>
        </Tippy>
        <KeyboardArrowDownIcon />
    </div>
    <div className='home__in'>
        <Tippy theme='light' content={<KitchenAndDining></KitchenAndDining>} interactive={true} placement='bottom' >
            <p>Kitchen & Dining </p>
        </Tippy>
        <KeyboardArrowDownIcon />
    </div>
    <div className='home__in'>
        <Tippy theme='light' content={<BedroomFurniture></BedroomFurniture>} interactive={true} placement='bottom' >
            <p>Bedroom Furniture</p>
        </Tippy>
        <KeyboardArrowDownIcon />
    </div>
    <div className='home__in'>
        <Tippy theme='light' content={<KidsFurniture></KidsFurniture>} interactive={true} placement='bottom' >
            <p>Kids Furniture</p>
        </Tippy>
        <KeyboardArrowDownIcon />
    </div>
    <div className='home__in'>
        <Tippy theme='light' content={<LightingsAndElectricals></LightingsAndElectricals>} interactive={true} placement='bottom' >
            <p>Lightings & Electricals</p>
        </Tippy>
        <KeyboardArrowDownIcon />
    </div>
    
</div>
  )
}

export default Home

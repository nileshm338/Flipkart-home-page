import React from 'react'

import Tippy from '@tippyjs/react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import "./ElectronicsAndAppliances.css";

import ElectronicsAudio from './ElectronicsAudio';
import ElectronicComputerPeripherals from './ElectronicComputerPeripherals';
import ElectronicsGaming from './ElectronicsGaming';
import ElectronicsLaptopandDesktop from './ElectronicsLaptopandDesktop';
import ElectronicsSmartHomeAutomation from './ElectronicsSmartHomeAutomation';

const ElectronicsAndAppliances = () => {
  return (
    <div className='electronicsAndappliances'>
            <div className='electronicsAndappliances__in'>
                <Tippy theme='light' content={<ElectronicsAudio></ElectronicsAudio>} interactive={true} placement='bottom' >
                    <p>Audio</p>
                </Tippy>
                <KeyboardArrowDownIcon />
            </div>
            <div className='electronicsAndappliances__in'>
                <Tippy theme='light' content={<ElectronicComputerPeripherals></ElectronicComputerPeripherals>} interactive={true} placement='bottom' >
                    <p>ComputerPeripherals</p>
                </Tippy>
                <KeyboardArrowDownIcon />
            </div>
            <div className='electronicsAndappliances__in'>
                <Tippy theme='light' content={<ElectronicsGaming></ElectronicsGaming>} interactive={true} placement='bottom' >
                    <p>Gaming </p>
                </Tippy>
                <KeyboardArrowDownIcon />
            </div>
            <div className='electronicsAndappliances__in'>
                <Tippy theme='light' content={<ElectronicsLaptopandDesktop></ElectronicsLaptopandDesktop>} interactive={true} placement='bottom' >
                    <p>Laptop and Desktop</p>
                </Tippy>
                <KeyboardArrowDownIcon />
            </div>
            <div className='electronicsAndappliances__in'>
                <Tippy theme='light' content={<ElectronicsSmartHomeAutomation></ElectronicsSmartHomeAutomation>} interactive={true} placement='bottom' >
                    <p>Smart Home Automation</p>
                </Tippy>
                <KeyboardArrowDownIcon />
            </div>
            
        </div>
  )
}

export default ElectronicsAndAppliances

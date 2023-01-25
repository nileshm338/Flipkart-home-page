import React from 'react'
import './Menu.css';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

import MobilesAndAccessoriesT from './MobilesAndAccessoriesT';
import Fashion from './Fashion';
import TwoWheelers from './TwoWheelers';
import ElectronicsAndAppliances from './ElectronicsAndAppliances';
import ToysAndSchoolSupplies from './ToysAndSchoolSupplies';
import Home from './Home';


const Menu = () => {
    return (
        <div className='menu'>

            {/* Mobiles logo */}
            <div className='menu__first'>
                <Tippy theme='light' content={<MobilesAndAccessoriesT></MobilesAndAccessoriesT>} interactive={true} placement='bottom' >
                    <h3>Mobiles & Accessories</h3>
                </Tippy>
                <ExpandMoreIcon />
            </div>

            {/* Fashion logo */}
            <div className='menu__second'>
                <Tippy theme='light' content={<Fashion></Fashion>} interactive={true} placement='bottom' >
                    <h3>Fashion</h3>
                </Tippy>
                <ExpandMoreIcon />
            </div>

            {/* ElectronicsAndAppliances logo */}
            <div className='menu__third'>
                <Tippy theme='light' content={<ElectronicsAndAppliances></ElectronicsAndAppliances>} interactive={true} placement='bottom' >
                    <h3>Electronics & Appliances</h3>
                </Tippy>
                <ExpandMoreIcon />
            </div>

            {/* Home logo */}
            <div className='menu__fourth'>
                <Tippy theme='light' content={<Home></Home>} interactive={true} placement='bottom' >
                    <h3>HomeDecor & Appliances</h3>
                </Tippy>
                <ExpandMoreIcon />
            </div>

            {/* Toys & School Supplies logo */}
            <div className='menu__fifth'>
                <Tippy theme='light' content={<ToysAndSchoolSupplies></ToysAndSchoolSupplies>} interactive={true} placement='bottom' >
                    <h3>Toys & School Supplies</h3>
                </Tippy>
                <ExpandMoreIcon />
            </div>

            {/* Two Wheelers logo */}
            <div className='menu__six'>
                <Tippy theme='light' content={<TwoWheelers></TwoWheelers>} interactive={true} placement='bottom' >
                    <h3>TwoWheelers</h3>
                </Tippy>
                <ExpandMoreIcon />
            </div>
        </div>
    )
}

export default Menu

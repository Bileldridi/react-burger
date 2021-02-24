import React from 'react';
import NavigationItem from '../Navigationitems/Navigationitem/Navigationitem';
import './Navigationitems.css'
const navigationItems = (props) => (
    <ul className='NavigationItems'>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;
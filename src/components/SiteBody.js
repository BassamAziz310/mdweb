import React from 'react';
import '../App.css'
import { Button } from './Button';
import './SiteBody.css'

function SiteBody() {
    return (
        <div className='sitebody-container'>
            
            <h1>Infusion Center Fresno</h1>

            <div className='sitebody-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Book An Appointment</Button>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Location</Button>
            </div>
            
        </div>
    );
}

export default SiteBody; 

import React from 'react';
import SlideItem from './SlideItem';
import './Slides.css';

function Slides() {
    return (
        <div className='slides'>
            <h1>Insurance Policy</h1>
            <div className="slides__container">
             <div className="slides__wrapper">
                 <ul className="slides__items">
                     <SlideItem
                     src="http://toprated.pro/wp-content/uploads/2016/03/health-logos.png"
                     text="Insurance Plans"
                     
                     path="/services"

                     />

                     <SlideItem
                     src=""
                     text=""
                     label="Yahweh"
                     path="/services"

                     />
                 </ul>
             </div>
            </div>
        </div>
    )
}

export default Slides



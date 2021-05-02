import React from 'react';
import { Link } from 'react-router-dom';

function SlideItem(props) {
    return (
        <>
            <li className="slides__item"></li>
            <Link className="slides__item__link" to={props.path}>
                <figure className="slides__item__pic-wrap" data-category={props.label}><img src="/" alt="pic" className="slides__item__img"/>
                <img src={props.src} alt='FREE E' className='slides_item_img'></img>
                
                </figure>
            <div className="slides__item__info"></div>
            <h5 className="slides__item__text">{props.text}</h5>
            
            </Link>
        </>
    )
}

export default SlideItem



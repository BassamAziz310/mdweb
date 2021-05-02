import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavBar.css'; 


function NavBar() {
    const [click, setClick] = useState(false); 

    const [button, setButton] = useState(true);

    
    const handleClick = () => {setClick(!click)};

    const closeMobileMenu = () => {setClick(false)};

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };
    
    useEffect(() => {
        showButton();
    }, []);
    
    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
            
            <div className="navbar-container">
           
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                Infusion Center  <i className="fab fa-typo3"></i>
                </Link>
            
                <div className='menu-icon' onClick={handleClick}>
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
        
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li>
                            <Link to ='/' className = 'nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        
                        <li>
                            <Link to ='/forms-insurance' className = 'nav-links' onClick={closeMobileMenu}>
                                Insurance Forms
                            </Link>
                        </li>
                        
                        <li>
                            <Link to ='/services' className = 'nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        
                        <li>
                            <Link to ='/sign-up' className = 'nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up 
                            </Link>
                        </li>
                    </ul>
        
        
              
            {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}  
              
              
              </div>
        </nav>
            
        </>
    )
}

export default NavBar

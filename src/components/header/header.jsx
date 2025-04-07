import React from 'react';
import "./header.css";
import { CV } from './CIV';
import { HeaderSocials } from './headerSocials';
const MyPhoto = "/images/me.png"



const Header = () => {
    return (
        <>
            <header>
                <div className='container header_container'>
                    <h5>Hello I'm</h5>
                    <h1>Muhammad Mudassar </h1>
                    <h5 className='text-light'> <span> Frontend Deveolper </span></h5>
                    <CV />
                    <HeaderSocials />
                    <div className='me'>
                        <img src={MyPhoto} alt="" />
                    </div>

                    <a href="#contact" className='scroll__down'>Scroll Down</a>

                </div>
            </header>
        </>
    )
}
export default Header;
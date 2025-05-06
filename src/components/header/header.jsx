import React from 'react';
import "./header.css";
import { CV } from './CIV';
import { HeaderSocials } from './headerSocials';
const MyPhoto = "/images/WhatsApp_Image_2025-04-26_at_01.36.44_21ffeedf-removebg-preview.png"



const Header = () => {
    return (
        <>
            <header>
                <div className='container header_container'>
                    <h5>Hello I'm</h5>
                    <h1>Muhammad Mudassar </h1>
                    <h5 className='text-light'> <span> Full Stack (MERN) Deveolper </span></h5>
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
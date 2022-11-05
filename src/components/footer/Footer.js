import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='footer--logo'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='Netflix'/>
                </a>
            </div>
            <div className='footer--menu'>
                <a href='/'>
                    Netflix Image Rights
                </a>
                <a href='/'>
                    Movie Database
                </a>
            </div>
        </footer>
    );
};

export default Footer;

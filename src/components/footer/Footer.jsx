import React from 'react';
import { FaInstagramSquare, FaLinkedin, FaMailBulk } from 'react-icons/fa';
import './footer.css';


const Footer = () => {
  return (
    <footer className='footer' id='footer'>
        <div className='footer__container container grid'>
            <div className='footer__socials'>
                <a href='https://www.instagram.com/nicolas_origlia/?igshid=YmMyMTA2M2Y' className='footer__socials-link'>
                    <FaInstagramSquare />
                </a>
                <a href='https://ar.linkedin.com/in/nicolás-origlia-4bb0ba251' className='footer__socials-link'>
                    <FaLinkedin />
                </a>
                <a href='mailto:Spear98@outlook.es?Subject=Insert%20Subject' className='footer__socials-link'>
                    <FaMailBulk />
                </a>
            </div>

            <p className='footer__copyright text-cs'>&copy; 2023
            <span> All Right Reserved</span></p>

            <p className='footer__copyright text-cs'>Developed By
            <span> Nicolas Origlia</span></p>
        </div>
    </footer>
  )
}

export default Footer

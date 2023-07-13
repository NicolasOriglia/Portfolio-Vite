import React, {useState, useEffect} from 'react';
import { links } from '../../Data';
import { FaInstagramSquare, FaMailBulk, FaLinkedin } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import { Link } from 'react-scroll';
import './header.css';

const Header = () => {

    const getStorageTheme = () =>{
        let them = 'dark-theme';
        if(localStorage.getItem('theme')){
            them = localStorage.getItem('theme');
        }
    };

    const [showMenu, setShowMenu] = useState(false);
    const [theme, setTheme] = useState(getStorageTheme()); 
    
    const  toggleTheme = () =>{
        if (theme === 'dark-theme'){
            setTheme('light-theme');
        }else{
            setTheme('dark-theme');
        }
    };

    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu);
    }, [showMenu]);

    useEffect(() => {
        document.documentElement.classList = theme;
        localStorage.setItem('theme',theme);
    }, [theme]);

  return (
    <header className= 'header'>
        <nav className="nav">
            <a href="#" className="nav__logo text-cs">
                Origlia
            </a>

            <div className={`${showMenu ? 'nav__menu show__menu' : 'nav__menu'}`}>
                <div className='nav__data'>
                    <ul className='nav__list'>
                        {links.map(( {name, path}, index )=>{
                            return(
                            <li className='nav__item' key={index} >
                               <Link
                                className='nav__link text-cs'
                                to={path}
                                spy={true}
                                hashSpy={true} 
                                smooth={true} 
                                offset={-100} 
                                duration={500}
                                onClick={ () => {setShowMenu(!showMenu) }} >
                                {name}
                                </Link>
                            </li>      
                            );
                        })}
                    </ul>

                    <div className='header__socials'>
                        <a href='https://www.instagram.com/nicolas_origlia/?igshid=YmMyMTA2M2Y' className='header__socials-link'>
                            <FaInstagramSquare />
                        </a>
                        <a href='https://ar.linkedin.com/in/nicolás-origlia-4bb0ba251' className='header__socials-link'>
                            <FaLinkedin />
                        </a>
                        <a href='mailto:Spear98@outlook.es?Subject=Insert%20Subject' className='header__socials-link'>
                            <FaMailBulk />
                        </a>
                    </div>
                </div>
            </div>
            <div className='nav__btns'>
                <div className='theme__toggler' onClick={toggleTheme}>
                    {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                </div>

                <div className= {`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`}
                onClick={()=>{setShowMenu(!showMenu)}}>
                    <span></span><span></span>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header

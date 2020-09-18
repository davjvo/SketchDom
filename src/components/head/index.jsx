import React from 'react';
import logo from '../../assets/images/logos/logo_sketchdom.png';
import hamburger from '../../assets/images/hamburger.png';
import { Link } from 'react-router-dom';
import { Animated } from "react-animated-css";

const Head = () => {
    const [displayLinks, setDisplayLinks] = React.useState(false);

    const handleHamburgerClick = () => {
        setDisplayLinks(!displayLinks);
    }

    return (
        <header>
            <nav className='menu row justify_around '>
                <a href='/' className='brand_logo'>
                    <img src={logo} alt='logo de sketchdom' className='logo_sketch' />
                </a>
                <div className='flex center justify_end wrap'>
                    <ul className='nav_ul flex row center font_brandon'>
                        <li className='nav_li li_right_border'><Link to='/acreditaciones' className='text_black'>TICKETS</Link></li>
                        <li className='nav_li li_right_border'><Link to='/invitados' className='text_black'>ARTISTAS INVITADOS</Link></li>
                        <li className='nav_li li_right_border'><Link to='/programa' className='text_black'>PROGRAMA</Link></li>
                        <li className='nav_li li_right_border'><Link to='/alley' className='text_black'>ARTIST ALLEY</Link></li>
                        <li className='nav_li'><Link to='/concursos' className='text_black'>CONCURSOS</Link></li>
                    </ul>
                </div>
            </nav>
            <nav className='flex menu_mobile  '>
                <div className='flex column full_width'>
                    <div className='flex full_width justify_between pointer'>
                        <a href='/' className='brand_logo'>
                            <img src={logo} alt='logo de sketchdom' className='logo_sketch' />
                        </a>
                        <img src={hamburger} alt='menu' className='hamburger' onClick={handleHamburgerClick} />
                    </div>
                    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={displayLinks}>
                        <div className='flex column menu_links font_brandon' style={displayLinks ? null : { display: 'none', transition: '2s' }}>
                            <Link onClick={handleHamburgerClick} to='/acreditaciones' className='text_black'>TICKETS</Link>
                            <Link onClick={handleHamburgerClick} to='/invitados' className='text_black'>ARTISTAS INVITADOS</Link>
                            <Link onClick={handleHamburgerClick} to='/programa' className='text_black'>PROGRAMA</Link>
                            <Link onClick={handleHamburgerClick} to='/alley' className='text_black'>ARTIST ALLEY</Link>
                            <Link onClick={handleHamburgerClick} to='/concursos' className='text_black'>CONCURSOS</Link>
                        </div>
                    </Animated>
                </div>
            </nav>
        </header>
    );
}

export default Head;
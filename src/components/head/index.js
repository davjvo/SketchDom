import React from 'react';
import logo from '../../assets/images/logos/logo_sketchdom.png';
import { Link } from 'react-router-dom';
import './index.css';

const Head = () => {
    return (
        <header>
            <nav className="flex row justify_around">
                <a href="/" className="brand_logo">
                    <img src={logo} alt="logo de sketchdom" className="logo_sketch" />
                </a>
                <div className="flex center justify_end wrap">
                    <ul className="nav_ul flex row center font_brandon">
                        <li className="nav_li li_right_border"><Link to='/acreditaciones' className='text_black'>TICKETS</Link></li>
                        <li className="nav_li li_right_border"><Link to='/invitados' className='text_black'>ARTISTAS INVITADOS</Link></li>
                        <li className="nav_li li_right_border"><Link to='/programa' className='text_black'>PROGRAMA</Link></li>
                        <li className="nav_li li_right_border"><Link to='/alley' className='text_black'>ARTIST ALLEY</Link></li>
                        <li className="nav_li"><Link to="/concursos" className='text_black'>CONCURSOS</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Head;
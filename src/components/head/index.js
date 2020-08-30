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
                        <li className="nav_li li_right_border"><Link to='/acreditaciones'>TICKETS</Link></li>
                        <li className="nav_li li_right_border"><Link to='/invitados'>ARTISTAS INVITADOS</Link></li>
                        <li className="nav_li li_right_border"><Link to='/programa'>PROGRAMA</Link></li>
                        <li className="nav_li li_right_border"><Link to='/alley'>ARTIST ALLEY</Link></li>
                        <li className="nav_li"><Link to="/concursos">CONCURSOS</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Head;
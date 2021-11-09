import React from 'react';
import Redes from '../redes_sociales';
import './footer_simple.css';

const Footer_Simple = props => {
    return (
        <footer className='background_white font_brandon flex row center justify_end relative footer_simple'>
            <Redes />
            {props.children}
        </footer>
    )
}

export default Footer_Simple;
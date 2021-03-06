import React from 'react';
import './footer.css';

const Footer = () => {

    const openNewsLetter = () => {
        window.open('http://eepurl.com/hc7745');
    }

    return (
        <footer className='flex justify_around font_brandon footer_full text_white'>
            <div className='flex column contactos'>
                <p className='font_amsi'>Contactos</p>
                <span className='marker_white'></span>
                <div className='contactos_body'>
                    <p className='no_margin'>E-mail: <a href='mailto:contactosketchdom@gmail.com' className='text_white'>contactosketchdom@gmail.com</a></p>
                    <div className='flex row'>
                        <p className='no_margin'>Cel:</p>
                        <div className='flex column'>
                            <p className='no_margin'>1+ 829-605-0468</p>
                            <p className='no_margin'>1+ 829-462-5950</p>
                            <p className='no_margin'>1+ 829-542-5112</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex column newsletter'>
                <p className='font_amsi no_margin'>Recibe nuestro</p>
                <p className='font_amsi no_margin'>newsletter!</p>
                <span className='marker_white'></span>
                <div className='flex column newsletter_body'>
                    <p className='no_margin'>Entérate de nuevas noticias sobre el</p>
                    <p className='no_margin'>evento, reuniones y mucho más.</p>
                    <div className='button_fake text_white pointer' onClick={openNewsLetter} >
                        apuntarme
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
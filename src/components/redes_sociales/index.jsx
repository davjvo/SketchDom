import React from 'react';
import instagram from '../../assets/images/social_instagram.png';
import facebook from '../../assets/images/social_facebook.png';
import youtube from '../../assets/images/social_youtube.png';
import './index.css';


const RedesSociales = () => {
    return (
        <div className=' flex row banner_redes_sociales'>
            <a href='https://www.instagram.com/sketchdomrd/' target='_blank' rel='noopener noreferrer'>
                <img src={instagram} alt='Instagram' />
            </a>
            <a href='https://www.facebook.com/sketchdomrd/' target='_blank' rel='noopener noreferrer'>
                <img src={facebook} alt='Facebook' />
            </a>
            <a href='https://www.youtube.com/channel/UC_5ZvYQxisBOTxysviAawVg' target='_blank' rel='noopener noreferrer'>
                <img src={youtube} alt='Youtube' />
            </a>
        </div>
    );
}

export default RedesSociales;
import React from 'react';
import instagram from '../../assets/images/social_instagram.png';
import facebook from '../../assets/images/social_facebook.png';
import youtube from '../../assets/images/social_youtube.png';
import instagram_white from '../../assets/images/social_instagram_white.png';
import facebook_white from '../../assets/images/social_facebook_white.png';
import youtube_white from '../../assets/images/social_youtube_white.png';
import './redes_sociales.css';


const RedesSociales = ({ white }) => {
    return (
        <div className=' flex row banner_redes_sociales'>
            <a href='https://www.instagram.com/sketchdomrd/' target='_blank' rel='noopener noreferrer'>
                <img src={white ? instagram_white : instagram} alt='Instagram' />
            </a>
            <a href='https://www.facebook.com/sketchdomrd/' target='_blank' rel='noopener noreferrer'>
                <img src={white ? facebook_white : facebook} alt='Facebook' />
            </a>
            <a href='https://www.youtube.com/channel/UC_5ZvYQxisBOTxysviAawVg' target='_blank' rel='noopener noreferrer'>
                <img src={white ? youtube_white : youtube} alt='Youtube' />
            </a>
        </div>
    );
}

export default RedesSociales;
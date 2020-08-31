import React from 'react';
import './index.css';
import coming_soon from '../../assets/images/coming_soon.png'

const ComingSoon = () => {
    return <div className='flex center coming_soon'>
        <img src={coming_soon} alt='coming soon' />
    </div>;
}

export default ComingSoon;
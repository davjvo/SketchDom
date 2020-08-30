import React from 'react';
import banner_concursos from '../../assets/images/concurso.png';
import Banner from '../../components/banner';
import angry_balls from '../../assets/images/angry_balls.png';
import textura from '../../assets/images/textura.png';
import postick_amarillo from '../../assets/images/indice_postick_amarillo.png';
import './index.css';

const MailTo = ({ textColor }) => {
    return <a className={textColor} href='mailto:contactosketchdom@gmail.com?subject=Participación%20Royal%20Rumble'>me apunto!</a>;
};


const Concursos = () => {
    return (
        <>
            <Banner logo={banner_concursos} />
            <div className='flex row gallery_container'>
                <div className='flex column img_container'>
                    <img src={textura} className='img_texture' alt='textura' />
                    <img src={angry_balls} alt='angry_balls' />
                </div>
                <div className='flex column text_container'>
                    <p className='font_amsi gallery_title'>Galería Sketch</p>
                    <div className='gallery_black_marker'></div>
                    <p className='font_brandon'>Consiste en la participación de jóvenes artistas dominicanos exponiendo sus obras.</p>
                    <p className='font_brandon diversity_containter'>Este año trata sobre la diversidad.</p>
                    <div className='flex center font_brandon fake_button_container'>
                        <div className='button_fake_black'>
                            <MailTo textColor='text_black' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex row royal_rumble_container background_red'>
                <img src={postick_amarillo} alt='post stick amarillo ' />
                <div className='flex column royal_rumble_container_text text_white'>
                    <p className='font_amsi royal_rumble_container_title no_padding no_margin'>Sketchdom</p>
                    <p className='font_amsi royal_rumble_container_title no_padding no_margin'>Royal Rumble</p>
                    <div className='white_marker'></div>
                    <p className='font_brandon no_padding no_margin'>Este año tendremos dos acreditaciones</p>
                    <p className='font_brandon no_padding no_margin'>o entradas: acreditación festival y</p>
                    <p className='font_brandon no_padding no_margin'>acreditación boss. A través de estos</p>
                    <p className='font_brandon no_padding no_margin'>podrás disfrutar el evento.</p>
                    <div className='flex center font_brandon fake_button_container'>
                        <div className='button_fake'>
                            <MailTo textColor='text_white' />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Concursos;
import React from 'react';
import Banner from '../../components/banner';
import Footer from '../../components/footer_simple';
import banner_concursos from '../../assets/images/concurso.png';
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
            <div className='flex column sketch_favorito_container'>

            </div>
            <div className='flex column center ediciones_anteriores_container background_black'>
                <p className='youtube_title font_amsi'>Ediciones Anteriores</p>
                <div className='flex row links_container'>
                    <iframe width="560" height="315" title='Vlog' src="https://www.youtube.com/embed/pI0ld_-P5d0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" title='Royal Rumble' src="https://www.youtube.com/embed/UuzZ58Pe6B0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p className='text_white youtube_title font_amsi'>links de youtube</p>
                <div className='flex row links_container justify_around'>
                    <iframe width="560" height="315" title='Llegada evento' src="https://www.youtube.com/embed/xGcXDKBAYLA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" title='Video fotográfico' src="https://www.youtube.com/embed/eCK7Ih97Lis" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Concursos;
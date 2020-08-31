import React from 'react';
import RedesSociales from '../../components/redes_sociales';
import Footer from '../../components/footer_simple';
import yonson from '../../assets/images/yonson.png';
import angry_balls from '../../assets/images/angry_balls.png';
import textura from '../../assets/images/textura.png';
import cinta from '../../assets/images/cinta.png';
import postick_amarillo from '../../assets/images/indice_postick_amarillo.png';
import sticker_girl from '../../assets/images/sticker_girls.png';
import background_sketch_favorito from '../../assets/images/background_sketch.png';
import notepad from '../../assets/images/notepad.png';
import papel from '../../assets/images/Papel.png';
import './index.css';

const MailTo = ({ textColor, url }) => {
    let ref = url || 'mailto:contactosketchdom@gmail.com?subject=Participación%20Royal%20Rumble';
    return <a className={textColor} href={ref}>me apunto!</a>;
};

const Concursos = () => {
    return (
        <>
            <div className='relative white banner_acreditaciones'>
                <div className='banner_acreditaciones_papel absolute'>
                    <img src={papel} alt='background' width='100%' className=' background_banner_acreditaciones' />
                </div>
                <img src={yonson} alt='yonson' width='100%' className='absolute yonson img_banner' />
                <img src={sticker_girl} alt='sticker' width='100%' className='absolute sticker_girl img_banner' />
                <p className='font_amsi absolute banner_welcome banner_sticker_text'>CONCURSOS</p>
                <RedesSociales />
            </div>
            <div className='flex row gallery_container'>
                <div className='flex column img_container'>
                    <img src={textura} className='img_texture' alt='textura' />
                    <img src={angry_balls} alt='angry_balls' />
                </div>
                <div className='flex column text_container'>
                    <p className='font_amsi gallery_title'>Galería Sketch</p>
                    <div className='black_marker'></div>
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
            <div className='relative'>
                <img src={background_sketch_favorito} alt='background' className='full_width' />
                <img src={notepad} alt='notepad' className='absolute notepad' />
                <img src={cinta} alt='cinta' className='absolute cinta_concursos' />
                <div className='flex column sketch_favorito_container_text absolute '>
                    <p className='font_amsi no_padding no_margin sketch_favorito_container_title'>Mi Sketch</p>
                    <p className='font_amsi no_padding no_margin sketch_favorito_container_title'>Favorito</p>
                    <div className='black_marker'></div>
                    <p className='font_brandon no_padding no_margin sketch_favorito_container_body'>Concurso en el que los participantes mostrarán sus sketch y el público votará por el mejor.</p>
                    <div className='flex center font_brandon fake_button_container'>
                        <div className='button_fake_black'>
                            <MailTo textColor='text_black' url='mailto:contactosketchdom@gmail.com?subject=Mi%20Sketch%20Favorito' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex column relative center ediciones_anteriores_container background_black'>
                <img src={papel} alt='background' className='absolute ' />
                <p className='youtube_title font_amsi index-1'>EDICIONES ANTERIORES</p>
                <div className='flex row links_container index-1'>
                    <iframe width='560' height='315' title='Vlog' src='https://www.youtube.com/embed/pI0ld_-P5d0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
                    <iframe width='560' height='315' title='Royal Rumble' src='https://www.youtube.com/embed/UuzZ58Pe6B0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
                </div>
                <p className='text_white youtube_title font_amsi index-1'>links de youtube</p>
                <div className='flex row links_container justify_around index-1'>
                    <iframe width='560' height='315' title='Llegada evento' src='https://www.youtube.com/embed/xGcXDKBAYLA' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
                    <iframe width='560' height='315' title='Video fotográfico' src='https://www.youtube.com/embed/eCK7Ih97Lis' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Concursos;
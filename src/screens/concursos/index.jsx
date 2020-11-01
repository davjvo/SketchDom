import React, { useState } from 'react';
import Modal from 'react-modal';
import RedesSociales from '../../components/redes_sociales';
import yonson from '../../assets/images/yonson.png';
import angry_balls from '../../assets/images/angry_balls.png';
import textura from '../../assets/images/textura.png';
import cinta from '../../assets/images/cinta.png';
import Footer from '../../components/footer_simple';
import postick_amarillo from '../../assets/images/indice_postick_amarillo.png';
import sticker_girl from '../../assets/images/sticker_girls.png';
import background_sketch_favorito from '../../assets/images/background_sketch.jpg';
import notepad from '../../assets/images/notepad.png';
import papel from '../../assets/images/Papel.png';
import './concursos.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '7vh 10vw',
        zIndex: '2'
    }
};

const RequisitosGaleria = () => {

    return (
        <>
            <ul>
                <li>Formato: Horizontal</li>
                <li>Medidas: 1920 x 1080 px</li>
                <li>Técnica: Libre, digital solamente (usualmente permitimos obras en tradicional pero dada la naturaleza de la galería, nos vemos obligados a recurrir a este único medio)</li>
                <li>Fecha límite: 05/11/2020 (NO HABRÁ PRÓRROGA)</li>
            </ul>
            <strong>Premios: Una beca 100% del curso Social Media Creative impartido en Brothers y una licencia por 2 años de Clip Studio Paint PRO.</strong>
        </>
    )
}

const RequisitosSketch = () => {

    return (

        <>
            <p>Enviar a nuestro correo lo siguiente:</p>
            <ul>
                <li>Vídeo editado que tenga máximo 40 seg. Debe estar grabado de manera horizontal con buena iluminación y calidad de vídeo (usa una lámparita o aprovecha ese solecito que nos azota todos los días.)</li>
                <li>Imagen/screenshot de comprobante de pago de acreditación (puede ser cualquiera de las 2 contribuciones, festival o boss)</li>
            </ul>
            <strong>Favorito del Juez: Una beca de 50% para curso Creatividad Integral en Brothers y una licencia por 2 años de Clip Studio Paint PRO. Favorito del Público: licencia por 2 años de Clip Studio Paint PRO.</strong>
        </>
    )

}

const Concursos = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [currentUrl, setCurrentUrl] = useState('');

    const urlGaleria = 'mailto:contactosketchdom@gmail.com?subject=Participación%2Galería%20Sketch';
    // const urlRoyaRumble = 'mailto:contactosketchdom@gmail.com?subject=Participación%20Royal%20Rumble';
    const urlSketchFavorito = 'mailto:contactosketchdom@gmail.com?subject=Mi%20Sketch%20Favorito';

    function openModal(url) {
        setIsOpen(true);
        setCurrentUrl(url);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const acceptTerms = () => {
        window.open(currentUrl);
        setCurrentUrl('');
    }

    return (
        <div className='body'>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Confirmación"
                ariaHideApp={false}
            >
                <h3 className='font_amsi'>Para participar en este concurso tienes que tener por lo menos una acreditación festival</h3>
                {
                    currentUrl === urlSketchFavorito ?
                        <RequisitosSketch /> : <RequisitosGaleria />
                }

                <div className='flex row justify_between font_brandon'>
                    <button className='cancel pointer' onClick={closeModal}>Cancelar</button>
                    <button className='pointer' onClick={acceptTerms}>Aceptar</button>
                </div>
            </Modal>
            <div className='relative white banner_acreditaciones'>
                <div className='flex column absolute banner_image'>
                    <img src={yonson} alt='yonson' width='100%' className='img_banner' />
                    <img src={sticker_girl} alt='sticker' width='100%' className='sticker_girl img_banner' />
                </div>
                <p className='font_amsi absolute banner_welcome banner_sticker_text'>CONCURSOS</p>
                <RedesSociales />
                <div className='banner_acreditaciones_papel '>
                    <img src={papel} alt='background' className=' background_banner_acreditaciones' />
                </div>
            </div>
            <div className='flex row gallery_container relative'>
                <div className='flex column img_container'>
                    <img src={textura} className='img_texture' alt='textura' />
                    <img src={angry_balls} alt='angry_balls' />
                </div>
                <div className='flex column text_container absolute'>
                    <p className='font_amsi gallery_title'>Galería Sketch</p>
                    <div className='marker_black'></div>
                    <p className='font_brandon'>Consiste en la participación de jóvenes artistas dominicanos exponiendo sus obras.</p>
                    <div className='flex font_brandon button_fake_container pointer' onClick={() => openModal(urlGaleria)}>
                        <div className='button_fake_black text_black'>
                            Me apunto!
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex row royal_rumble_container background_red'>
                <img src={postick_amarillo} alt='post stick amarillo' className='post_stick_amarillo' />
                <div className='flex column royal_rumble_container_text text_white'>
                    <p className='font_amsi royal_rumble_container_title no_padding no_margin'>Sketchdom</p>
                    <p className='font_amsi royal_rumble_container_title no_padding no_margin'>Royal Rumble</p>
                    <div className='marker_white'></div>
                    <p className='font_brandon'>Este evento permite poner a prueba las capacidades ilustrativas e imaginativas de 10 participantes.</p>

                    {/* <div className='flex center font_brandon button_fake_container pointer' onClick={() => openModal(urlRoyaRumble)}>
                        <div className='button_fake text_white'>
                            Me apunto!
                        </div>
                    </div> */}
                    <div className='flex center font_brandon button_fake_container'>
                        Auch, ya los participantes de este evento ya han sido seleccionados, para la próxima!
                    </div>
                </div>
            </div>
            <div className='relative sketchbook_favorito'>
                <img src={background_sketch_favorito} alt='background' className='width_full' />
                <img src={notepad} alt='notepad' className='absolute notepad' />
                <img src={cinta} alt='cinta' className='absolute cinta_concursos' />
                <div className=' absolute sketch_favorito_container_text'>
                    <div className='flex column font_brandon'>
                        <p className='font_amsi no_padding no_margin sketch_favorito_container_title'>Mi Sketchbook</p>
                        <p className='font_amsi no_padding no_margin sketch_favorito_container_title'>Favorito</p>
                        <div className='marker_black'></div>
                        <p className='sketch_favorito_container_body_text display_web'>Concurso en el que los participantes mostrarán su sketchbook y el público votará por el mejor.</p>
                        <p className='sketch_favorito_container_body_text display_mobile'>El mejor sketchbook será decidido por el público.</p>
                        <div className='flex center button_fake_container no_padding no_margin pointer' onClick={() => openModal(urlSketchFavorito)}>
                            <div className='button_fake_black'>
                                Me apunto!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' display_mobile width_full'>
                <div className='flex column center ediciones_anteriores_container background_black'>
                    <p className='youtube_title text_white font_amsi index-1 center'>EDICIONES ANTERIORES</p>
                    <div className='flex column links_container index-1'>
                        <iframe title='Vlog' src='https://www.youtube.com/embed/pI0ld_-P5d0' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                        <iframe title='Royal Rumble' src='https://www.youtube.com/embed/UuzZ58Pe6B0' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                    </div>
                    <p className='text_white youtube_title font_amsi index-1 center'>links de youtube</p>
                    <div className='flex column links_container justify_around index-1'>
                        <iframe title='Llegada evento' src='https://www.youtube.com/embed/xGcXDKBAYLA' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                        <iframe title='Video fotográfico' src='https://www.youtube.com/embed/eCK7Ih97Lis' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <div className='display_web width_full'>
                <div className='relative ediciones_anteriores_container background_black'>
                    <img src={papel} alt='background' className='absolute ' />
                    <div className='absolute'>
                        <div className='flex column center'>

                            <p className='youtube_title font_amsi index-1'>EDICIONES ANTERIORES</p>
                            <div className='flex row links_container justify_around index-1'>
                                <iframe width='560' height='315' title='Vlog' src='https://www.youtube.com/embed/pI0ld_-P5d0' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                                <iframe width='560' height='315' title='Royal Rumble' src='https://www.youtube.com/embed/UuzZ58Pe6B0' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                            </div>
                            <p className='text_white youtube_title font_amsi index-1'>links de youtube</p>
                            <div className='flex row links_container justify_around index-1'>
                                <iframe width='560' height='315' title='Llegada evento' src='https://www.youtube.com/embed/xGcXDKBAYLA' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                                <iframe width='560' height='315' title='Video fotográfico' src='https://www.youtube.com/embed/eCK7Ih97Lis' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Concursos;
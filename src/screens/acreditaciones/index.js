import React from 'react';
import Footer from '../../components/footer_simple';
import Banner from '../../components/banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import PostStick from '../../assets/images/post_stick.png';
import logo_banner from '../../assets/images/acreditacion_banner.png';

import './index.css';

const Acreditaciones = () => {
    return (
        <div className='background_black'>
            <Banner logo={logo_banner}>
                <div className='container_acreditaciones no_padding font_amsi'>
                    <p>ACRE</p>
                    <p>DITA</p>
                    <p>CIONES</p>
                </div>
            </Banner>
            <div className='flex space_around center background_black postick_container'>
                <div className='relative white font_amsi'>
                    <img src={PostStick} alt='post_stick' className='post_stick' />
                    <div className='absolute post_stick_text'>
                        <div className='flex column'>
                            <p className='post_stick_text_title'>Acreditación</p>
                            <p className='post_stick_text_title'>Festival</p>
                            <span className='black_marker'></span>
                            <p className='font_brandon'>Para todos esos ilustradores entusiastas, profesionales o el público en general que disfruta del arte y de aprender cosas nuevas.</p>
                        </div>
                    </div>
                    <div className='button_payment post_stick_payment absolute'><a href='https://www.eventbrite.es/e/entradas-sketchdom-118793728239' target='_blank' rel="noopener noreferrer">Pagar</a></div>
                </div>
                <div className='relative white font_amsi'>
                    <img src={PostStick} alt='post_stick' className='post_stick' />
                    <div className='absolute post_stick_text'>
                        <div className='flex column'>
                            <p className='post_stick_text_title'>Acreditación</p>
                            <p className='post_stick_text_title'>Boss</p>
                            <span className='black_marker'></span>
                            <p className='font_brandon'>Para ilustradores profesionales o ilustradores independientes que quieren tener acceso a workshops, video conferencia con charlistas internacionales, networking y más.</p>
                        </div>
                    </div>
                    <div className='button_payment post_stick_payment absolute'><a href='https://www.eventbrite.es/e/entradas-sketchdom-118793728239' target='_blank' rel="noopener noreferrer">Pagar</a></div>
                </div>
            </div>
            <div className='container font_brandon background_white'>
                <div className='cell background_black text_white border_right_White cell_offset'>Festival</div>
                <div className='cell background_black text_white'>Boss</div>

                <div className='cell low_padding cell_offset'></div>
                <div className='cell low_padding'></div>

                <div className='cell low_padding background_black'></div>
                <div className='cell low_padding background_black border_right_White'></div>
                <div className='cell low_padding background_black'></div>

                <div className='cell low_padding cell_offset'></div>
                <div className='cell low_padding'></div>

                <div className='cell border_bottom_red'>Acceso a la galería</div>
                <div className='cell border_bottom_red background_black border_right_White'><FontAwesomeIcon icon={faCheck} color='white' /></div>
                <div className='cell border_bottom_red background_black'><FontAwesomeIcon icon={faCheck} color='white' /></div>

                <div className='cell border_bottom_red'>Charlas nacionales</div>
                <div className='cell border_bottom_red background_black border_right_White'><FontAwesomeIcon icon={faCheck} color='white' /></div>
                <div className='cell border_bottom_red background_black'><FontAwesomeIcon icon={faCheck} color='white' /></div>

                <div className='cell border_bottom_red'>Charlas internacionales</div>
                <div className='cell border_bottom_red background_black border_right_White'><FontAwesomeIcon icon={faTimes} color='white' /></div>
                <div className='cell border_bottom_red background_black'><FontAwesomeIcon icon={faCheck} color='white' /></div>

                <div className='cell border_bottom_red'>Workshops pre-grabados</div>
                <div className='cell border_bottom_red background_black border_right_White'><FontAwesomeIcon icon={faTimes} color='white' /></div>
                <div className='cell border_bottom_red background_black'><FontAwesomeIcon icon={faCheck} color='white' /></div>

                <div className='cell border_bottom_red'>Artist alley virtual</div>
                <div className='cell border_bottom_red background_black text_white border_right_White'><FontAwesomeIcon icon={faCheck} color='white' /></div>
                <div className='cell border_bottom_red background_black text_white'><FontAwesomeIcon icon={faCheck} color='white' /></div>

                <div className='cell border_bottom_red'>Concursos</div>
                <div className='cell border_bottom_red background_black border_right_White'><FontAwesomeIcon icon={faCheck} color='white' /></div>
                <div className='cell border_bottom_red background_black'><FontAwesomeIcon icon={faCheck} color='white' /></div>

                <div className='cell border_bottom_red'>Lanzamientos exclusivos</div>
                <div className='cell border_bottom_red background_black border_right_White'><FontAwesomeIcon icon={faTimes} color='white' /></div>
                <div className='cell border_bottom_red background_black'><FontAwesomeIcon icon={faCheck} color='white' /></div>

                <div className='cell border_bottom_red'>Portafolio review</div>
                <div className='cell border_bottom_red background_black border_right_White'><FontAwesomeIcon icon={faTimes} color='white' /></div>
                <div className='cell border_bottom_red background_black'><FontAwesomeIcon icon={faCheck} color='white' /></div>

                <div className='cell cell_offset background_black border_right_White'><FontAwesomeIcon icon={faCheck} color='white' /></div>
                <div className='cell border_bottom_red background_black'><FontAwesomeIcon icon={faCheck} color='white' /></div>

                <div className='cell cell_offset background_red text_white border_right_White'>Precio</div>
                <div className='cell border_bottom_red background_red text_white'>Precio</div>

                <div className='cell cell_offset background_black text_white border_right_White'>$5 USD</div>
                <div className='cell text_white background_black'>$10 USD</div>

                <div className='cell padding_low cell_offset'><div className='button_payment margin_right_low'><a href='https://www.eventbrite.es/e/entradas-sketchdom-118793728239' target='_blank' rel="noopener noreferrer">Pagar</a> </div></div>
                <div className='cell padding_low'><div className='button_payment margin_left_low'><a href='https://www.eventbrite.es/e/entradas-sketchdom-118793728239' target='_blank' rel="noopener noreferrer">Pagar</a> </div></div>
            </div>
            <Footer />
        </div>
    )
}

export default Acreditaciones;
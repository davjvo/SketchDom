import React from 'react';
import Footer from '../../components/footer_simple';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import PostStick from '../../assets/images/post_stick.png';
import cinta from '../../assets/images/cinta.png';
import background from '../../assets/images/background.png';
import textura from '../../assets/images/textura.png';
import yellow_sticker from '../../assets/images/acreditacion_sticker.png';
import RedesSociales from '../../components/redes_sociales';
import './acreditaciones.css';


const Acreditaciones = () => {
    const paypalBoss = <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="E4JHDVE9CUHCA" />
        <input type="image" src="https://i.ibb.co/pWM0jnn/Boton-de-pagar-01.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
        <img alt="" border="0" className='' src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" height="1" />
    </form>;

    const paypalFestival = <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="KH389MVRY6XRQ" />
        <input type="image" src="https://i.ibb.co/pWM0jnn/Boton-de-pagar-01.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
        <img alt="" border="0" className='' src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" height="1" />
    </form>;

    return (
        <div className='background_black'>
            <div className='banner_acreditacion relative'>
                <img src={background} alt='background' className='background absolute' />
                <img src={textura} alt='textura' className='textura absolute' />
                <img src={cinta} alt='cinta' className='bottom_right cinta absolute' />
                <img src={cinta} alt='cinta' className='top_left cinta absolute' />
                <img src={yellow_sticker} alt='yellow_sticker' className='sticker absolute' />
                <div className='container_acreditaciones no_margin no_padding interniliado_container font_amsi no_padding no_margin'>
                    <p className='no_padding no_margin'>ACRE</p>
                    <p className='no_padding no_margin'>DITA</p>
                    <p className='no_padding no_margin'>CIONES</p>
                </div>
                <RedesSociales />
            </div>
            <div className='flex space_around center background_black postick_container'>
                <div className='relative white font_amsi'>
                    <img src={PostStick} alt='post_stick' className='post_stick' />
                    <div className='absolute post_stick_text'>
                        <div className='flex column'>
                            <p className='post_stick_text_title'>Acreditación</p>
                            <p className='post_stick_text_title'>Festival</p>
                            <span className='black_marker'></span>
                            <p className='font_brandon post_stick_text_body '>Para todos esos ilustradores entusiastas, profesionales o el público en general que disfruta del arte y de aprender cosas nuevas.</p>
                        </div>
                    </div>
                    <div className='button_payment post_stick_payment absolute'>
                        {paypalFestival}
                    </div>
                </div>
                <div className='relative white font_amsi'>
                    <img src={PostStick} alt='post_stick' className='post_stick' />
                    <div className='absolute post_stick_text'>
                        <div className='flex column'>
                            <p className='post_stick_text_title'>Acreditación</p>
                            <p className='post_stick_text_title'>Boss</p>
                            <span className='black_marker'></span>
                            <p className='font_brandon '>Para ilustradores profesionales o ilustradores independientes que quieren tener acceso a workshops, video conferencia con charlistas internacionales, networking y más.</p>
                        </div>
                    </div>
                    <div className='button_payment post_stick_payment absolute'>
                        {paypalBoss}
                    </div>
                </div>
            </div>
            <div className='grid_container background_white'>
                <div className='grid font_brandon '>
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

                    <div className='cell border_bottom_red'>Workshops</div>
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
                    <div className='cell padding_low cell_offset'>
                        {paypalFestival}
                    </div>
                    <div className='cell padding_low'>
                        {paypalBoss}

                    </div>
                </div>
                <div className='font_amsi background_white align_right '>
                    <p className='no_padding no_margin'>También aceptamos transferencias bancarias, por favor enviar comprobante a contactosketchdom@gmail.com</p>
                    <p className='no_padding no_margin'>Cuenta 011-122525-3| Banco de reservas | Luis Manuel Mariñes</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Acreditaciones;
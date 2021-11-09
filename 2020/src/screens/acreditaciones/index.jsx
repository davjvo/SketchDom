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

const CellCheck = ({ offset }) => {
    return (
        <div className={offset ? 'cell flex center cell_offset border_bottom_red border_right_White' : 'cell flex center border_bottom_red  border_right_White'}>
            <div className='flex center background_black cell_container'>
                <FontAwesomeIcon icon={faCheck} color='white' />
            </div>
        </div>
    );
}

const CellClose = () => {
    return (
        <div className='cell flex center border_bottom_red  border_right_White'>
            <div className='flex center background_black cell_container'>
                <FontAwesomeIcon icon={faTimes} color='white' />
            </div>
        </div>
    );
}

const CellPagar = ({ onClick, ...props }) => {
    return (
        <div className='cell_pagar' onClick={onClick} >
            Pagar
            {props.children}
        </div>
    )
}

const PaypalFestival = ({ style }) => {

    return (
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style={style}>
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="KH389MVRY6XRQ" />
            <input type="image" className='input_payment' src="https://i.ibb.co/pWM0jnn/Boton-de-pagar-01.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
        </form>
    );
}

const PaypalBoss = ({ style }) => {
    return (
        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style={style}>
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="E4JHDVE9CUHCA" />
            <input type="image" className='input_payment' src="https://i.ibb.co/pWM0jnn/Boton-de-pagar-01.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
        </form>
    );
}

const Acreditaciones = () => {
    const handlePagarClick = event => {
        event.preventDefault();
        event.target.children[0].submit();
    }

    return (
        <div className='body background_black'>
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
            <div className='flex justify_around background_black postick_container'>
                <div className='relative white font_amsi'>
                    <img src={PostStick} alt='post_stick' className='post_stick' />
                    <div className='absolute post_stick_text align_left'>
                        <div className='flex column'>
                            <p className='post_stick_text_title no_margin'>Acreditación</p>
                            <p className='post_stick_text_title no_margin'>Festival</p>
                            <span className='marker_black'></span>
                            <p className='font_brandon display_web'>Para todos esos ilustradores entusiastas, profesionales o el público en general que disfruta del arte y de aprender cosas nuevas.</p>
                            <p className='font_brandon display_mobile'>Para el público en general que disfruta del arte y de aprender cosas nuevas.</p>
                        </div>
                    </div>
                    <div className='button_payment post_stick_payment absolute'>
                        <PaypalFestival />
                    </div>
                </div>
                <div className='relative white font_amsi'>
                    <img src={PostStick} alt='post_stick' className='post_stick' />
                    <div className='absolute post_stick_text '>
                        <div className='flex column'>
                            <p className='post_stick_text_title '>Acreditación</p>
                            <p className='post_stick_text_title'>Boss</p>
                            <span className='marker_black'></span>
                            <p className='font_brandon display_web'>Para ilustradores profesionales o ilustradores independientes que quieren tener acceso a workshops, video conferencia con charlistas internacionales, networking y más.</p>
                            <p className=' font_brandon display_mobile'>Para ilustradores que quieren acceso a workshops, conferencias, networking y más.</p>
                        </div>
                    </div>
                    <div className='button_payment post_stick_payment absolute'>
                        <PaypalBoss />
                    </div>
                </div>
            </div>
            <div className='grid_container background_white'>
                <div className='grid font_brandon '>
                    <div className='cell background_black text_white border_right_White cell_offset '>
                        <div className='cell_container'>
                            Festival
                        </div>
                    </div>
                    <div className='cell background_black text_white'>
                        <div className='cell_container'>
                            Boss
                        </div>
                    </div>

                    <div className='cell cell_small cell_offset'></div>
                    <div className='cell cell_small'></div>

                    <div className='cell cell_small background_black'></div>
                    <div className='cell cell_small background_black border_right_White'></div>
                    <div className='cell cell_small background_black'></div>

                    <div className='cell cell_small cell_offset'></div>
                    <div className='cell cell_small'></div>

                    <div className='cell flex center border_bottom_red'>Acceso a la galería</div>
                    <CellCheck />
                    <CellCheck />

                    <div className='cell flex center border_bottom_red'>Charlas nacionales</div>
                    <CellCheck />
                    <CellCheck />

                    <div className='cell flex center border_bottom_red'>Charlas internacionales</div>
                    <CellClose />
                    <CellCheck />

                    <div className='cell flex center border_bottom_red'>Workshops</div>
                    <CellClose />
                    <CellCheck />

                    <div className='cell flex center border_bottom_red'>Artist alley virtual</div>
                    <CellCheck />
                    <CellCheck />

                    <div className='cell flex center border_bottom_red'>Concursos</div>
                    <CellCheck />
                    <CellCheck />

                    <div className='cell flex center border_bottom_red'>Lanzamientos exclusivos</div>
                    <CellClose />
                    <CellCheck />

                    <div className='cell flex center m_red'>Portafolio review</div>
                    <CellClose />
                    <CellCheck />

                    <div className='cell flex center cell_offset text_white border_right_White'>
                        <div className='cell_container background_red'>
                            Precio
                        </div>
                    </div>

                    <div className='cell flex center  text_white border_right_White'>
                        <div className='cell_container background_red'>
                            Precio
                        </div>
                    </div>

                    <div className='cell flex center cell_offset text_white border_right_White'>
                        <div className='cell_container background_black font_brandon'>
                            $5 USD
                        </div>
                    </div>

                    <div className='cell flex center text_white border_right_White'>
                        <div className='cell_container background_black font_brandon'>
                            $10 USD
                        </div>
                    </div>

                    <div className='cell padding_low cell_offset '>
                        <CellPagar onClick={handlePagarClick}>
                            <PaypalFestival style={{ display: 'none' }} />
                        </CellPagar>
                    </div>
                    <div className='cell padding_low '>
                        <CellPagar onClick={handlePagarClick}>
                            <PaypalBoss style={{ display: 'none' }} />
                        </CellPagar>
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
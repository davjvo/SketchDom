import React from 'react';
import { Link } from 'react-router-dom';
import RedesSociales from '../../components/redes_sociales';
import Footer from '../../components/footer';
import bienvenidos from '../../assets/images/indice_banner.jpg';
import acreditacion_1 from '../../assets/images/indice_acreditacion1.png';
import acreditacion_2 from '../../assets/images/indice_acreditacion2.svg';
import clip_studio from '../../assets/images/logos/logo_csp.jpg';
import brother from '../../assets/images/logos/logo_brother.jpg';
import boca from '../../assets/images/logos/logo_boca.jpg';
import alpha from '../../assets/images/logos/logo_alpha.jpg';
import cuarto_creativo from '../../assets/images/logos/logo_cuarto_creativo.jpg';
import canita from '../../assets/images/logos/logo_canita.jpg';
import anime_island from '../../assets/images/logos/logo_anime_island.jpg';
import cultura_comic from '../../assets/images/logos/logo_cultura_comic.jpg';
import yoyo from '../../assets/images/logos/logo_yoyo.jpg';
import pardo from '../../assets/images/logos/logo_pardo.jpg';
import berenice from '../../assets/images/logos/logo_papelería_berenice.jpg';
import baltri from '../../assets/images/logos/logo_baltri.jpg';
import viart from '../../assets/images/logos/logo_viart.jpg';
import edgar from '../../assets/images/logos/logo_edgar.jpg';
import magma from '../../assets/images/logos/logo_magma.jpg';
import cacani from '../../assets/images/logos/logo_cacani.jpg';
import './main.css';

const Main = () => {
    return (
        <div className='body'>
            <div className='relative white banner'>
                <img src={bienvenidos} alt='Alpha' width='100%' />
                <p className='banner_welcome font_amsi'>BIENVENIDOS A:</p>
                <RedesSociales />
            </div>
            <div className='column center banner_container banner_container_mobile'>
                <p className=' width_full font_brandon'>Sketchdom es un evento que busca unir, promover e impulsar el talento ilustrativo criollo en todas sus
                    vertientes.</p>
                <span className='marker_red'></span>
            </div>
            <div className=' banner_container banner_container_web column center'>
                <p className=' width_full font_brandon'>Sketchdom es un evento que busca unir, promover e impulsar el talento ilustrativo criollo en todas sus
                    vertientes. Que con el pasar de los años, se ha convertido en una comunidad.</p>
                <span className='marker_red'></span>
            </div>
            <div className='acreditacion_container relative flex row center text_white'>
                <img src={acreditacion_1} alt='' className='acreditacion_imagen_1' />
                <div className='flex column acreditacion_text relative center align_left'>
                    <div className='acreditacion_header font_amsi flex column'>
                        <p>Obtén tu acreditación!</p>
                        <span className='marker_white'></span>
                    </div>
                    <div className='acreditacion_body font_brandon'>
                        <p>Este año tendremos dos acreditaciones o entradas: acreditación festival y acreditación boss. A
                            través de estos podrás disfrutar el evento.</p>
                    </div>
                    <Link className='acreditacion_button button_fake font_amsi text_white' to='/acreditaciones'>más info</Link>
                </div>
                <img src={acreditacion_2} alt='' className='acreditacion_imagen_2' />
            </div>
            <div className='flex column center patrocinadores_text font_brandon'>
                <p>Amamos a nuestros patrocinadores</p>
                <span className='marker_black'></span>
            </div>
            <div className='flex row center wrap justify_around patrocinadores'>
                <img src={clip_studio} alt='Clip Studio Paint' className='patrocinadores_logo_2' />
                <img src={brother} alt='Brother' className='logo_brother patrocinadores_logo_2 ' />
                <img src={boca} alt='Boca' className='patrocinadores_logo' />
                <img src={alpha} alt='Alpha' className='patrocinadores_logo' />
                <img src={cuarto_creativo} alt='1/4 Creativo' className='patrocinadores_logo' />
                <img src={canita} alt='Canita' className='patrocinadores_logo_2' />
                <img src={anime_island} alt='Anime Island' className='patrocinadores_logo_2' />
                <img src={cultura_comic} alt='Cultura Comic' className='patrocinadores_logo' />
                <img src={yoyo} alt='Yo Yo Colectivo Creativo' className='patrocinadores_logo' />
                <img src={pardo} alt='Pardo' className='patrocinadores_logo' />
                <img src={berenice} alt='Papeleria berenice' className='patrocinadores_logo_2' />
                <img src={baltri} alt='Baltri' className='patrocinadores_logo' />
                <img src={viart} alt='Viart' className='patrocinadores_logo' />
                <img src={edgar} alt='Edgar' className='patrocinadores_logo' />
                <img src={magma} alt='Magma Studio' className='patrocinadores_logo_2' />
                <img src={cacani} alt='Magma Studio' className='patrocinadores_logo' />
            </div>
            <Footer />
        </div>
    );
}

export default Main;
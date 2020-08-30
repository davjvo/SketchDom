import React from 'react';
import Banner from '../../components/banner';
import Footer from '../../components/footer';
import bienvenidos from '../../assets/images/indice_banner.png';
import acreditacion_1 from '../../assets/images/indice_acreditacion1.png';
import acreditacion_2 from '../../assets/images/indice_acreditacion2.svg';
import clip_studio from '../../assets/images/logos/logo_csp.png';
import brother from '../../assets/images/logos/logo_brother.png';
import boca from '../../assets/images/logos/logo_boca.png';
import alpha from '../../assets/images/logos/logo_alpha.png';
import cuarto_creativo from '../../assets/images/logos/logo_cuarto_creativo.png';
import canita from '../../assets/images/logos/logo_canita.png';
import anime_island from '../../assets/images/logos/logo_anime_island.png';
import cultura_comic from '../../assets/images/logos/logo_cultura_comic.png';
import yoyo from '../../assets/images/logos/logo_yoyo.png';
import pardo from '../../assets/images/logos/logo_pardo.png';
import berenice from '../../assets/images/logos/logo_papelería_berenice.png';
import './index.css';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Banner logo={bienvenidos}>
                <p className='banner_welcome font_amsi'>BIENVENIDOS A:</p>
            </Banner>
            <div className='banner_container flex column center'>
                <p className='banner_text full_width font_brandon'>Sketchdom es un evento que busca unir, promover e impulsar el talento ilustrativo criollo en todas sus
                    vertientes. Que con el pasar de los años, se ha convertido en una comunidad.</p>
                <span className='red_marker'></span>
            </div>
            <div className='acreditacion_container relative flex row center'>
                <img src={acreditacion_1} alt='' className='acreditacion_imagen_1' />
                <div className='flex column acreditacion_text relative center'>
                    <div className='acreditacion_header font_amsi flex column'>
                        <p>Obtén tu acreditación!</p>
                        <span className='white_marker'></span>
                    </div>
                    <div className='acreditacion_body font_brandon'>
                        <p>Este año tendremos dos acreditaciones o entradas: acreditación festival y acreditación boss. A
                            través de estos podrás disfrutar el evento.</p>
                    </div>
                    <Link className='acreditacion_button button_fake font_amsi' to="/acreditaciones">más info</Link>
                </div>
                <img src={acreditacion_2} alt='' className='acreditacion_imagen_2' />
            </div>
            <div className='flex column center patrocinadores_text font_brandon'>
                <p>Amamos a nuestros patrocinadores</p>
                <span className='black_marker'></span>
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
            </div>
            <Footer />
        </>
    );
}

export default Main;
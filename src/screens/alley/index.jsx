import React, { useState } from 'react';
import RedesSociales from '../../components/redes_sociales';
import resma from '../../assets/images/resma.png';
import Steph1 from '../../assets/images/StephM1.jpg';
import Steph2 from '../../assets/images/StephM2.jpg';
import Steph3 from '../../assets/images/StephM3.jpg';
import Lydia1 from '../../assets/images/Lydia1M.jpg';
import Lydia2 from '../../assets/images/Lydia2M.jpg';
import Lydia3 from '../../assets/images/Lydia3M.jpg';
import Elkys1 from '../../assets/images/ElkysM1.jpg';
import Elkys2 from '../../assets/images/ElkysM2.jpg';
import Elkys3 from '../../assets/images/ElkysM3.jpg';
import Vianca1 from '../../assets/images/vithcy1M.jpg';
import Vianca2 from '../../assets/images/vithcy2M.jpg';
import Vianca3 from '../../assets/images/vithcy3M.jpg';
import Diego1 from '../../assets/images/Diego1M.jpg';
import Diego2 from '../../assets/images/Diego2M.jpg';
import Diego3 from '../../assets/images/Diego3M.jpg';
import Ken1 from '../../assets/images/KenM1.jpg';
import Ken2 from '../../assets/images/KenM2.jpg';
import Ken3 from '../../assets/images/KenM3.jpg';
import StephG1 from '../../assets/images/StephG1M.jpg';
import StephG2 from '../../assets/images/StephG2M.jpg';
import StephG3 from '../../assets/images/StephG3M.jpg';
import Yeu1 from '../../assets/images/Yeu1M.jpg';
import Yeu2 from '../../assets/images/Yeu2M.jpg';
import Yeu3 from '../../assets/images/Yeu3M.jpg';
import GyM1 from '../../assets/images/GyM1.jpg';
import GyM2 from '../../assets/images/GyM2.jpg';
import GyM3 from '../../assets/images/GyM3.jpg';
import Isla1 from '../../assets/images/Isla1M.jpg';
import Isla2 from '../../assets/images/Isla2M.jpg';
import Isla3 from '../../assets/images/Isla3M.jpg';
import Camila1 from '../../assets/images/Camila1M.jpg';
import Camila2 from '../../assets/images/Camila2M.jpg';
import Camila3 from '../../assets/images/Camila3M.jpg';
import Desire1 from '../../assets/images/Desire1M.jpg';
import Desire2 from '../../assets/images/Desire2M.jpg';
import Desire3 from '../../assets/images/Desire3M.jpg';
import Mari1 from '../../assets/images/Mari1M.jpg';
import Mari2 from '../../assets/images/Mari2M.jpg';
import Mari3 from '../../assets/images/Mari3M.jpg';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import FoldOutSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import 'react-awesome-slider/dist/styles.css';

const createArtist = (id, name, store, handle, arts) => {
    return {
        Id: id,
        Name: name,
        Store: store,
        Handle: handle,
        Arts: arts
    };
}

const artists = [
    createArtist(1, 'Stephany Mesa', 'https://stephmesa.threadless.com/', 'steph.mesa', [
        Steph1,
        Steph2,
        Steph3,
    ]),
    createArtist(2, 'Lydia Pérez', 'https://society6.com/lydiaestephania', 'lydiaestephania', [
        Lydia1,
        Lydia2,
        Lydia3,
    ]),
    createArtist(3, 'Elkys Nova', 'https://www.instagram.com/elkysnovart_rd/', 'elkysnovart_rd', [
        Elkys1,
        Elkys2,
        Elkys3,
    ]),
    createArtist(4, 'Vianca Santos', 'https://gumroad.com/vithcy', 'vithcy', [
        Vianca1,
        Vianca2,
        Vianca3,
    ]),
    createArtist(5, 'Camila Rodriguez', 'https://teespring.com/es/stores/rodistic-2', 'rodistic', [
        Camila1,
        Camila2,
        Camila3,
    ]),
    createArtist(6, 'Diego Colon', 'https://gumroad.com/emerash', 'emerash0', [
        Diego1,
        Diego2,
        Diego3,
    ]),
    createArtist(7, 'Ken Ahtzell', 'https://www.instagram.com/ken.ahtzell/', 'ken.ahtzell', [
        Ken1,
        Ken2,
        Ken3,
    ]),
    createArtist(8, 'Estephanie Gómez', 'https://www.etsy.com/shop/Estephaniecone', 'estephaniecone', [
        StephG1,
        StephG2,
        StephG3,
    ]),
    createArtist(9, 'Yeruveli Garcia', 'https://www.instagram.com/tienda.sunflower_eru', 'tienda.sunflower_eru', [
        Yeu1,
        Yeu2,
        Yeu3,
    ]),
    createArtist(10, 'Geeks y Medio', 'https://www.instagram.com/geeksymedio', 'geeksymedio', [
        GyM1,
        GyM2,
        GyM3,
    ]),
    createArtist(11, 'La isleña Creativa', 'https://www.laislenacreativa.com', 'laislenacreativard', [
        Isla1,
        Isla2,
        Isla3,
    ]),
    createArtist(12, 'Mari Gabi Messina', 'https://www.marigabimessina.com/', 'marigabimessina', [
        Mari1,
        Mari2,
        Mari3,
    ]),
    createArtist(13, 'Desiree Gneco', 'www.etsy.com/shop/Drawsiree', 'drawsiree', [
        Desire1,
        Desire2,
        Desire3,
    ]),
];

const Alley = () => {
    const [selected, setSelected] = useState(artists[0]);
    const mobileSize = 768;
    const [width, setWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(width <= mobileSize);

    const handleSelectedArtist = (event, selectedArtist) => {
        setSelected(selectedArtist);
    }

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
        setIsMobile(window.innerWidth <= mobileSize)
    }

    React.useEffect(() => {

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }

    }, []);

    return (
        <div className='body background_black'>
            <div className='header relative '>
                <img src={resma} alt='background' className='absolute width_full' />
                <p className='font_amsi absolute header_text'>ARTIST ALLEY 2020</p>
                <RedesSociales />
            </div>
            <div className='shadow_container'>
                <div className='shadow_child'>
                    <div className={isMobile ? 'flex column justify_around big_artist_container' : 'flex row justify_around big_artist_container'}>
                        <div className='relative'>

                            <div className={isMobile ? 'slide_art_container background_black flex center' : 'slide_art_container'}>
                                <AwesomeSlider
                                    organicArrows={false}
                                    animation="foldOutAnimation"
                                    cssModule={[AwesomeSliderStyles, FoldOutSliderStyles]}
                                    fillParent={true}
                                    mobileTouch={true}
                                >
                                    {
                                        selected.Arts.map((element, index) =>
                                            <div key={`${element.Name}-${index}`} data-src={element} />
                                        )
                                    }
                                </AwesomeSlider>
                            </div>
                        </div>
                    </div>
                    <div className='flex row center wrap font_brandon '>
                        {
                            artists.map(current => {
                                const artistDefaultCss = 'artist_name center pointer';

                                return (
                                    <div key={current.Name} className='slide_container '>
                                        <p onClick={event => handleSelectedArtist(event, current)} className={selected.Id === current.Id ? artistDefaultCss + ' text_white background_red' : artistDefaultCss + ' background_white'}>{current.Name}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className='description_container'>
                        <div className={isMobile ? 'flex column justify_around' : 'flex row justify_between'}>
                            <a href={`https://www.instagram.com/${selected.Handle}/`} className='text_white font_brandon flex center alley_instagram' target='_blank' rel='noopener noreferrer'>
                                {`@${selected.Handle}`}
                            </a>
                            <p className='artist_name center pointer text_white background_red font_brandon' onClick={() => window.open(selected.Store)} >Ir a tienda</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Alley;
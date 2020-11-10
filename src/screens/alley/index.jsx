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
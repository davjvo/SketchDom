import React, { useState } from 'react';
import resma from '../../assets/images/resma.png';
import Steph from '../../assets/images/Steph.jpg';
import Elkys from '../../assets/images/Elkys.jpg';
import Diego from '../../assets/images/Diego.jpg';
import Camila from '../../assets/images/Camila.png';
import Vianca from '../../assets/images/Vianca.png';
import Lydia from '../../assets/images/Lydia.png';
import RedesSociales from '../../components/redes_sociales';
import Camila1 from '../../assets/images/Camila1.jpg';
import Camila2 from '../../assets/images/Camila2.jpg';
import Camila3 from '../../assets/images/Camila3.jpg';
import Camila4 from '../../assets/images/Camila4.jpg';
import Camila5 from '../../assets/images/Camila5.jpg';
import Steph1 from '../../assets/images/Steph1.jpg';
import Steph2 from '../../assets/images/Steph2.jpg';
import Steph3 from '../../assets/images/Steph3.jpg';
import Steph4 from '../../assets/images/Steph4.jpg';
import Steph5 from '../../assets/images/Steph5.jpg';
import Lydia1 from '../../assets/images/Lydia1.jpg';
import Lydia2 from '../../assets/images/Lydia2.jpg';
import Lydia3 from '../../assets/images/Lydia3.jpg';
import Lydia4 from '../../assets/images/Lydia4.jpg';
import Lydia5 from '../../assets/images/Lydia5.jpg';
import Elkys1 from '../../assets/images/Elkys1.jpg';
import Elkys2 from '../../assets/images/Elkys2.jpg';
import Elkys3 from '../../assets/images/Elkys3.jpg';
import Elkys4 from '../../assets/images/Elkys4.jpg';
import Elkys5 from '../../assets/images/Elkys5.jpg';
import Diego1 from '../../assets/images/Diego1.jpg';
import Diego2 from '../../assets/images/Diego2.jpg';
import Diego3 from '../../assets/images/Diego3.jpg';
import Diego4 from '../../assets/images/Diego4.jpg';
import Diego5 from '../../assets/images/Diego5.jpg';
import Vianca1 from '../../assets/images/Vianca1.jpg';
import Vianca2 from '../../assets/images/Vianca2.jpg';
import Vianca3 from '../../assets/images/Vianca3.jpg';
import Vianca4 from '../../assets/images/Vianca4.jpg';
import Vianca5 from '../../assets/images/Vianca5.jpg';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import FoldOutSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import 'react-awesome-slider/dist/styles.css';
import './invitados.css';

const Invited = () => {

    const [selected, setSelected] = useState({ Arts: [] });
    const mobileSize = 768;
    const [width, setWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(width <= mobileSize);

    const createArtist = (id, name, handle, profileImage, arts) => {
        return {
            Id: id,
            Name: name,
            Handle: `${handle}`,
            ProfileImage: profileImage,
            Arts: arts
        };
    }

    const artists = [
        createArtist(3, 'Camila Rodriguez', 'rodistic', Camila, [
            Camila1,
            Camila2,
            Camila3,
            Camila4,
            Camila5,
        ]),
        createArtist(1, 'Stephany Mesa', 'steph.mesa', Steph, [
            Steph1,
            Steph2,
            Steph3,
            Steph4,
            Steph5,
        ]),
        createArtist(2, 'Lydia Pérez', 'lydiaestephania', Lydia, [
            Lydia1,
            Lydia2,
            Lydia3,
            Lydia4,
            Lydia5,
        ]),
        createArtist(4, 'Elkys Nova', 'elkysnovart', Elkys, [
            Elkys1,
            Elkys2,
            Elkys3,
            Elkys4,
            Elkys5,
        ]),
        createArtist(5, 'Diego Colon', 'emerash0', Diego, [
            Diego1,
            Diego2,
            Diego3,
            Diego4,
            Diego5,
        ]),
        createArtist(6, 'Vianca Santos', 'vithcy', Vianca, [
            Vianca1,
            Vianca2,
            Vianca3,
            Vianca4,
            Vianca5,
        ]),
    ];

    const handleSelectedArtist = (event, selectedArtist) => {
        setSelected(selectedArtist);
    }
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
        setIsMobile(window.innerWidth <= mobileSize)
    }

    React.useEffect(() => {
        setSelected(artists[0]);

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (
        <div className='body background_black'>
            <div className='header relative '>
                <img src={resma} alt='background' className='absolute width_full' />
                <p className='font_amsi absolute header_text'>ARTISTAS INVITADOS 2020</p>
                <RedesSociales />
            </div>
            <div className={isMobile ? 'flex column justify_around big_artist_container' : 'flex row justify_around big_artist_container'}>
                <div className='flex column font_brandon '>
                    {
                        artists.map(current => {
                            const artistDefaultCss = 'artist_name center pointer';

                            return (
                                <div key={current.Name} className={current.Id === selected.Id ? 'slide_container translate_artist' : 'slide_container revert_translate_artist'}>
                                    <p onClick={event => handleSelectedArtist(event, current)} className={selected.Id === current.Id ? artistDefaultCss + ' text_white background_red' : artistDefaultCss + ' background_white'}>{current.Name}</p>
                                </div>
                            );
                        })
                    }
                </div>
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
        </div>
    )
};

export default Invited;
import React, { useState } from 'react';
import { Animated } from "react-animated-css";
import resma from '../../assets/images/resma.png';
import Steph from '../../assets/images/Steph.jpg';
import Elkys from '../../assets/images/Elkys.jpg';
import Diego from '../../assets/images/Diego.jpg';
import Camila from '../../assets/images/Camila.png';
import Vianca from '../../assets/images/Vianca.png';
import Lydia from '../../assets/images/Lydia.png';
import RedesSociales from '../../components/redes_sociales';
import './invitados.css';


const Invited = () => {

    const [selected, setSelected] = useState({ Arts: [] });
    const [selectedImage, setSelectedImage] = useState(0);
    const [displayImage, setDisplayImage] = useState(true);
    const [art, setArt] = useState('');
    const animationOutDuration = 650;
    const animationInDuration = 650;
    const [width, setWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(width <= 768);

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
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/119610426_354630855896320_423828484501697743_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=Zt5jROXk65cAX_dTtkg&_nc_tp=19&oh=cca250b318324ab08721e7367d714f8b&oe=5F94EBFF',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/119177631_174808744172391_5994989073682219957_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=AfCJSStDH7QAX9honmi&_nc_tp=18&oh=cbe5a4db8d0174e11e99601d57ef4860&oe=5F93FD47',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/119040738_315514439730625_8549032576849902862_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=D_xLFm31W2kAX-nUguj&_nc_tp=15&oh=8ed422f579a957584b311fe718e731f5&oe=5F9505A0',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/118601477_194415765443415_7993085927400070411_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=iipRksqqoBUAX9WGQvM&_nc_tp=15&oh=d375634044b909275248db3951c9be7a&oe=5F957389',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/118436810_2988861244552183_1155620777636080017_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=uXYI6Blgfq8AX88U46y&_nc_tp=15&oh=e4ed6b48c3f34f76561c0ff5f233aaf8&oe=5F93880D',
        ]),
        createArtist(1, 'Stephany Mesa', 'steph.mesa', Steph, [
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/118652299_918869008644850_7640087564633440761_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=5jKNKHbqnF0AX_HLvVa&oh=ab0a88b407a1582778d098d979de4c69&oe=5F8FFED0',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/119739012_174754894216698_4585680125368205018_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=1yMY_NBrIicAX_NXFik&oh=9c52b92608df3412e06b144043b0d293&oe=5F907416',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/118532084_167816271617772_7235408967700739954_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=AzA2Pq9EgIoAX8Q5W43&oh=ac5316ed5df48b36bb26659b62af4c0b&oe=5F905F8B',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/118292830_644422282886359_2409834850639350324_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=eaLBu3pz2_sAX9sLtRd&oh=de229e79471e51871333fd97ff3035aa&oe=5F906DD5',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/117562599_158272365905929_3778716626019133828_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=7acfsnYvFe4AX9MPHaX&oh=3d76bd297947ea56eb42992bc853b29a&oe=5F90BBEA'
        ]),
        createArtist(2, 'Lydia Pérez', 'lydiaestephania', Lydia, [
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/118682404_116414340180930_6825933244753564043_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=XZC12n6b1pAAX-AfEiL&_nc_tp=18&oh=462c0e7eea579bf57cbe62c986da7042&oe=5F95BFAB',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/118121495_313434719905222_2689424615360729766_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=6L9IHJbKWzQAX-FaeUA&oh=774050e1288baa9e7fd74235f6dcc6ac&oe=5F926AF5',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/117377937_185970862885413_8613430197619266973_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=RLD3I0T86u0AX9SdjAD&oh=740ed792bccbeebd8de6ab919e635f3c&oe=5F93E9CE',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/108558212_276146363670622_8959822490063249322_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=onLRhnozyUIAX8e2oFZ&oh=ca0fa0379ff67f77ff87e85d3c40e4bb&oe=5F9387EB',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/104957634_718790825330569_7287643150444411632_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=reh8xN_f2d8AX_PX53O&oh=3b0667467622e97d2690e4c776bc76a8&oe=5F936E0B',
        ]),
        createArtist(4, 'Elkys Nova', 'elkysnovart', Elkys, [
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/118713070_233899361359247_6097817882522217246_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=ngxV01No0JEAX9zqb82&_nc_tp=15&oh=e8b8ed3abb5c01bd7b0d06d3b15e87ee&oe=5F951F9B',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/116721637_1626297937539153_4240524232562902408_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=0eerGBtALeAAX97OGE7&_nc_tp=18&oh=0fe60a6b2ad23229a44aa6d27f23a175&oe=5F962EC9',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/82045570_593824141455448_2840831466102740888_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=vCnRktuOKS8AX9L2S23&_nc_tp=18&oh=a4704d5d281946fa1a4c4e532602bcc6&oe=5F92E337',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/103937993_2917714918345523_8624579389412061231_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=5RpRQK9a55IAX_DjJfx&_nc_tp=18&oh=e0af56d093622fdcdf7ea00057afe626&oe=5F950715',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/90094151_109791093819488_7702845916330949344_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=cNAGKzKGxGoAX8RsniQ&_nc_tp=18&oh=8605c5e33eeda309f61ab1b91a33c4d1&oe=5F95B460',
        ]),
        createArtist(5, 'Diego Colon', 'emerash0', Diego, [
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/87533254_1039346799769711_2367694346456145789_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=jWo6jCGcl7QAX9x8JG8&_nc_tp=18&oh=ebf126da9cd6295261e66713983ab67a&oe=5F931FAD',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/66224636_122344629030606_3397879922847956174_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=lisw788YoyIAX8D6J0U&_nc_tp=18&oh=4ffa5f120df43bf01f8e5a3f0fe4b27b&oe=5F92F4F1',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/67130464_649034768899358_1360927531361087977_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=1IRVVxPFKpEAX_wgEXE&_nc_tp=18&oh=370d285759e5494af35142dbf673b898&oe=5F939C0A',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/60908271_2251943848457069_3136746247227284837_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=iwiiFOx_J9MAX_eD17y&_nc_tp=18&oh=b4d1c28596b7e2d68afe93e680f37c37&oe=5F9439B0',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/50977130_2322694131339895_5251755830474032695_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=SamyCTtN5yQAX9rCMbe&_nc_tp=18&oh=88fc58b811a2b0be9db03502d24224fd&oe=5F93061F',
        ]),
        createArtist(6, 'Vianca Santos', 'vithcy', Vianca, [
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/119210258_186711089497129_6629515378473723047_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=3SUcxOb3JVkAX_90ooa&_nc_tp=18&oh=b5cf8c74518af2cdc9cd4d7338b2651e&oe=5F94493F',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/118442408_2797231423839159_1053485530224385288_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=BLak2NsfjVUAX-GI806&_nc_tp=18&oh=5a3a4fcbe16b1307d0a3e1fc82c0e614&oe=5F94DB2B',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/116706590_579764552699117_3188007233357512625_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=bRjHolv4C_sAX81oWVh&_nc_tp=18&oh=7b52cc9ca16d2d8d8c7d722aa6c7c921&oe=5F959B26',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/108204245_278528610034933_6637524159988622919_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=6zXo6pnVSP0AX_he1qK&_nc_tp=18&oh=f99ca22d5cd6c321e973db7077122b4d&oe=5F9318BC',
            'https://instagram.fhex3-1.fna.fbcdn.net/v/t51.2885-15/e35/103728127_1521820174665906_9104809739232104600_n.jpg?_nc_ht=instagram.fhex3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8fqKe3KDxUAAX8_eleV&_nc_tp=18&oh=9af4fcbfe93f30d3b3d288445892d7b4&oe=5F9307AF',
        ]),
    ];

    const handleSelectedArtist = (event, selectedArtist) => {
        setDisplayImage(false);
        setSelected(selectedArtist);
        setTimeout(() => {
            setDisplayImage(true);
            setSelectedImage(0);
            setArt(selectedArtist.Arts[0]);
        }, animationOutDuration);
    }

    const handleImageDisplay = (event, index) => {
        if (index === selectedImage)
            return;

        setDisplayImage(false);
        setSelectedImage(index);
        setTimeout(() => {
            setArt(selected.Arts[index]);
        }, animationOutDuration - 100);
        setTimeout(() => {
            setDisplayImage(true);
        }, animationOutDuration);
    }

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    React.useEffect(() => {
        setSelected(artists[0]);
        setArt(artists[0].Arts[0]);

        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            console.log(isMobile);
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
                    <div className={isMobile ? 'slide_art_container background_black' : 'slide_art_container'}>
                        <Animated
                            animationIn='fadeIn'
                            animationOut='fadeOut'
                            animationInDuration={animationInDuration}
                            animationOutDuration={animationOutDuration}
                            isVisible={displayImage}>
                            <div className='slide width_full flex center'>
                                <img
                                    className='art '
                                    src={art}
                                    alt=''
                                />
                            </div>
                        </Animated>

                        <div className='dotContainer absolute'>
                            <div className='flex column center'>
                                {
                                    selected.Arts.reverse().map((element, index) =>
                                        <span key={`${element.Name}-${index}`}
                                            onClick={event => handleImageDisplay(event, index)}
                                            className={selectedImage === index ? 'dot dot_selected pointer' : 'dot pointer'} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Invited;
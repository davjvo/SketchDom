import React, { useState } from 'react';
import RedesSociales from '../../components/redes_sociales';
import hoja from '../../assets/images/hoja.jpg'
import post_stick from '../../assets/images/indice_postick_amarillo.png';
import cinta from '../../assets/images/cinta.png';
import sketch from '../../assets/images/sketch.jpg';
import Footer from '../../components/footer_simple';
import jsonData from '../../data/programa.json';
import './program.css';

const Program = () => {
    const [index, setIndex] = useState(0);
    const [current, setCurrent] = useState({
        title: '',
        activities: [{ start: '', end: '', description: '' }]
    });

    const buildActivity = (time, activity) => {
        const split = time.split("–");
        return {
            start: split[0].trim(),
            end: split[1].trim(),
            description: activity
        }
    }

    const data = [
        {
            title: '16',
            activities: [
                buildActivity('7:00 pm – 8:00 pm', '"Diseño de personaje 2D al mundo 3D" impartido por Yasasu'),
                buildActivity('8:10 pm – 9:10 pm', '"Animación y Arte 3D" impartido por Dan Rojaz'),
            ]
        },
        {
            title: '17',
            activities: [
                buildActivity('7:00 pm – 8:00 pm', '"Character Design" impartido por Jean Sena'),
                buildActivity('8:10 pm – 9:10 pm', '"Cómo vivir de tus ilustraciones" impartido por Jotadé'),
            ]
        },
        {
            title: '18',
            activities: [
                buildActivity('7:00 pm – 8:00 pm', 'WIP "Witchtober" con Elkys Novas &amp; amigos'),
                buildActivity('8:10 pm – 9:10 pm', '"Humor Gráfico en medios de comunicación" por Christian Caricatura'),
                buildActivity('8:10 pm – 9:10 pm', 'Meet and Draw/Drink ft. DJ Espectro con Staff de SketchDom')
            ]
        },
        {
            title: '19',
            activities: [
                buildActivity('7:10 pm – 8:10 pm', '"How to be a productive person" por Katia Khoury'),
                buildActivity('8:15 pm – 9:15 pm', 'WIP Metástasis por Adrián Fulcar'),
            ]
        },
        {
            title: '20',
            activities: [
                buildActivity('5:15 pm – 6:15 pm', '"Animación en RD” por Nicodomo &amp; Brayan Jerez'),
                buildActivity('6:20 pm – 7:20 pm', '"Manejo de clients para Ilustradore" por Leorián Ricardo'),
                buildActivity('7:30 pm – 8:30 pm', 'WIP "Lost in the Dream" por NekoCrocodile'),
                buildActivity('8:45 pm – 9:45 pm', '"Que compone una buena Ilustración Infantil" por Karla Peña'),
            ]
        },
        {
            title: '21',
            activities: [
                buildActivity('8:00 am – 8:30 am', 'Charla matutina y bienvenida al evento'),
                buildActivity('9:00 am – 10:00 am', 'WIP "I can see you" por Pikazart (zoom)'),
                buildActivity('10:00 am – 10:30 am', 'Meet &amp; Greet de Artistas Invitados Nacionales (zoom)'),
                buildActivity('11:00 am – 11:45 am', 'IGTV Entrevista a Miguel Moisés'),
                buildActivity('11:00 am – 12:00 pm', '"Cómo hacer comics y no morir en el intento" por El Dee (zoom)'),
                buildActivity('12:00 pm – 1:00 pm', '"Storyboarding for Animation" por Luz Batista'),
                buildActivity('1:00 pm – 1:45 pm', 'IGTV Entrevista a Naydui'),
                buildActivity('1:10 pm – 2:10 pm', 'WIP "Zoilo" por Jimmy Taveraras (zoom)'),
                buildActivity('3:30 pm – 4:30 pm', '"Del Sketchbooka Animación" por Jonathan Schmidt (zoom)'),
                buildActivity('4:15 pm – 5:00 pm', 'IGTV Entrevista a Enmanuel Evertz'),
                buildActivity('4:45 pm – 5:45 pm', '"De Rafael a Poteleche" por Poteleche (zoom)'),
                buildActivity('5:00 pm – 5:45 pm', 'IGTV Entrevista a Drawsiree'),
                buildActivity('5:50 pm – 6:50 pm', '"Videojuegos y Game Jam" con Marco Almonte (zoom)'),
                buildActivity('7:00 pm – 8:00 pm', '"Sueña en paneles" por Gina Basora (zoom)'),
                buildActivity('8:15 pm – 9:15 pm', 'WIP de Jean Sena (zoom)'),
                buildActivity('8:50 pm – 10:00 pm', 'SketchDom Royal Rumble First Round'),
            ]
        },
        {
            title: '22',
            activities: [
                buildActivity('8:00 am – 8:30 am', 'Charla matutina y bienvenida al evento'),
                buildActivity('9:00 am – 10:00 am', 'WIP "REMIX Una colección, muchas voces" por MuyHumanos (zoom)'),
                buildActivity('10:10 am – 10:50 am', 'Meet & Greet de Artistas Invitados Nacionales (zoom)'),
                buildActivity('11:00 am – 11:45 am', 'IGTV Entrevista a Ivanna Candelier'),
                buildActivity('11:20 am – 12:20 pm', '"De Palma Sola a Japón" por Gabriel Jehu (zoom)'),
                buildActivity('12:00 pm – 12:45 pm', 'IGTV Entrevista a Angélica Lora'),
                buildActivity('12:30 pm – 1:30 pm', 'WIP "Witchpires" por Francisco Luffy (zoom)'),
                buildActivity('1:00 pm – 1:45 pm', 'IGTV Entrevista a Anyo'),
                buildActivity('3:00 pm – 4:00 pm', 'WIP "Nerea" Fabsrosso/Nicodomo/Brayan Jerez (zoom)'),
                buildActivity('4:10 pm – 4:40 pm', 'Votaciones'),
                buildActivity('4:15 pm – 5:00 pm', 'IGTV Entrevista a Edwin Disla'),
                buildActivity('4:15 pm – 5:15 pm', '"Creando personajes y el Mundo de Disney Animation" por Carlos Cabral & Marlon West (zoom)'),
                buildActivity('5:05 pm – 6:05 pm', 'Documental de cómics por Jimmy Taveras'),
                buildActivity('6:10 pm – 7:10 pm', '"Muralismo en siglo XXi" por Eddaviel y Jeremy Klonicki (zoom)'),
                buildActivity('7:20 pm – 8:00 pm', 'SketchDom Royal Rumble Last Round'),
                buildActivity('8:10 pm – 9:10 pm', 'SketchDom Awards'),
            ]
        },
    ];

    const prevDay = () => {
        let currentIndex = index - 1;

        if (currentIndex < 0) return;


        setIndex(currentIndex);
        setCurrent(data[currentIndex]);
    }

    const nextDay = () => {
        let currentIndex = index + 1;

        if (currentIndex > 6) return;

        setIndex(currentIndex);
        setCurrent(data[currentIndex]);
    }

    const arrows = () => {
        return (
            <div className='flex row_reverse'>
                <div className='triangle pointer relative index-1'
                    style={{ visibility: index > 5 ? 'hidden' : null }}
                    onClick={nextDay}>
                    &#9654;
                        </div>
                <div className='triangle pointer relative index-1'
                    style={{ visibility: index < 1 ? 'hidden' : null }}
                    onClick={prevDay}>
                    &#9664;
                        </div>
            </div>
        );
    }

    React.useEffect(() => {
        setCurrent(data[index]);
    }, []);

    return (
        <div className='body background_black'>
            <div className='relative banner '>
                <img src={hoja} alt='hoja' className='hoja' />
                <div className='absolute banner_text_program font_amsi interniliado_container '>
                    <p className='no_margin no_padding'>PRO</p>
                    <p className='no_margin no_padding'>GRA</p>
                    <p className='no_margin no_padding'>MA</p>
                </div>
                <div className='absolute banner_bundle_1'>
                    <div className='flex column'>
                        <img src={cinta} alt="cinta" className='cinta_programa  relative index-1' />
                        <img src={sketch} alt="sketch" className='sketch' />
                        <img src={cinta} alt="cinta" className='cinta_programa cinta_programa_bottom' />
                    </div>
                </div>
                <img src={post_stick} alt='post_stick ' className='absolute img_post_stick  relative index–1' />
                <RedesSociales white={true} />
            </div>
            <div className='program_container '>
                <div className='program background_white font_brandon'>
                    <p className='no_margin no_padding program_dia font_amsi '>Nov {current.title}</p>
                    <div className='marker_black'></div>
                    {arrows()}
                    <div className='program_schedule'>
                        <table cellSpacing={0}>
                            {
                                current.activities.map(activity => {
                                    return (
                                        <tr key={activity.description}>
                                            <td>{activity.start}</td>
                                            <td>–</td>
                                            <td align='right' className='border_td'>{activity.end}</td>
                                            <td>{activity.description}</td>
                                        </tr>
                                    )
                                })
                            }
                        </table>
                    </div>
                    {arrows()}
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Program;
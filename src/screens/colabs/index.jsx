import React from 'react';
import Dav from '../../assets/images/collabs/Dav.jpeg';
import Severo from '../../assets/images/collabs/Severo.jpg';
import Salma from '../../assets/images/collabs/Salma.jpg';
import Fabiola from '../../assets/images/collabs/Fabiola.png';
import Lisbeth from '../../assets/images/collabs/Lisbeth.jpg';
import Shoo from '../../assets/images/collabs/Shoo.jpg';
import Sebastian from '../../assets/images/collabs/Sebastian.jpg';
import Footer from '../../components/footer_simple';
import './collabs.css'

const createPeople = (name, description, image, enlace) => {
    return {
        Name: name,
        Description: description,
        Image: image,
        Enlace: enlace
    }
}

const people = [
    createPeople('Manuel Shoo', 'Graduado de publicidad, ilustrador de profesión. Fundador e idealizador del evento y la comunidad. Y le gusta demasiado la chercha.', Shoo, 'https://www.instagram.com/manuelshoo/'),
    createPeople('Lisbeth Santos', ' Ilustradora y loca por los videojuegos. Encargada en el manejo de redes sociales y la organización en sí del programa a la vez parte esencial en la parte de los patrocinios.', Lisbeth, 'https://www.instagram.com/lsantosart/'),
    createPeople('Fabiola Rosso', 'Animadora e ilustradora. Encargada de verificar y buscar manos amigas que quieran colaborar y/o participar en el evento (tanto de manera de patrocinio como parte del staff). La que grita:¡PENDIENTES o RESUELVEME!', Fabiola, 'https://www.instagram.com/fabsrosso/'),
    createPeople('Davmi Valdez', 'Desarrollador de pagina web, amante del fútbol y de las tardes lluviosas en un coffe store, también el chofer oficial de Fabiola Rosso.', Dav, 'https://www.linkedin.com/in/davmi-jose-valdez-ogando-24875014b/'),
    createPeople('Sebastian Sánchez', 'Fotógrafo entusiasta y colaborador, dispuesto a todo lo que se le ofrezca.', Sebastian, 'https://www.instagram.com/sebastiansanchezs4/'),
    createPeople('Salma Alegre', 'Ilustradorx y diseñadxr gráfico, encargadx de la creación y desenvolvimiento de la línea gráfica de este año.', Salma, 'https://www.instagram.com/darkjellyfish_'),
    createPeople('Giancarlo Rodriguez', 'Ilustrador y animador enamorado de lo que hace, el que le mete piquete y flow al asunto de ayudar.', Severo, 'https://www.instagram.com/severo_sd'),
    createPeople('Adriel Vargas', 'Ingeniero en sonido y diseñador gráfico, le gusta hacer efectos de sonidos y música con un grado de experimentación.', null, null),
]

const Colab = () => {

    return (
        <div className='body background_black'>
            <div className='flex row wrap justify_around collabs'>
                {
                    people.map(p => {
                        return (
                            <div className='flex column center collabs_container'>
                                {p.Image ? <img src={p.Image} alt={p.Name} className='rounded_image pointer' onClick={() => window.open(p.Enlace, '_blank')} /> : null}
                                <p className='no_margin font_amsi collabs_name center text_white'>{p.Name}</p>
                                <p className='no_margin font_brandon collabs_description  text_white'>{p.Description}</p>
                            </div>
                        );
                    })
                }
            </div>
            <Footer />
        </div>
    );
};

export default Colab;
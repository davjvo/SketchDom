import React, { useState } from 'react';
import RedesSociales from '../../components/redes_sociales';
import hoja from '../../assets/images/hoja.jpg'
import post_stick from '../../assets/images/indice_postick_amarillo.png';
import cinta from '../../assets/images/cinta.png';
import sketch from '../../assets/images/sketch.jpg';
import Footer from '../../components/footer_simple';
import data from '../../data/programa.json';
import './program.css';

const Program = () => {
    const [index, setIndex] = useState(0);
    const [current, setCurrent] = useState(data[index]);

    const prevDay = () => {
        let currentIndex = index - 1;

        setIndex(currentIndex);
        setCurrent(data[currentIndex]);
    }
    const nextDay = () => {
        let currentIndex = index + 1;

        if (currentIndex > data.length) return;

        setIndex(currentIndex);
        setCurrent(data[currentIndex]);
    }


    const arrows = () => {
        return (
            <div className='flex row_reverse'>
                <div className='triangle pointer relative index-1'
                    style={{ visibility: index >= data.length - 1 ? 'hidden' : null }}
                    onClick={nextDay}>
                    &#9654;
                </div>
                <div className='triangle pointer relative index-1'
                    style={{ visibility: index <= 0 ? 'hidden' : null }}
                    onClick={prevDay}>
                    &#9664;
                </div>
            </div>
        );
    }

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
                            <tbody>
                                {
                                    current.activities.map(activity => {
                                        return (
                                            <tr key={activity.description}>
                                                <td>{activity.start}</td>
                                                <td width={2}>–</td>
                                                <td align='right' className='border_td'>{activity.end}</td>
                                                <td>{activity.description}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
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
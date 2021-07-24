import React from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Project1 from '../asset/Group 34.png';
import Project2 from '../asset/image 40.png';
import Fade from 'react-reveal/Fade';

const Project = () => {
    return (
        <div>
        <div className="container project-wrapper" id="project">
            <Fade top>
                <h1 className="text-center pt-5 custome-title">PROJECT</h1>
            </Fade>
            <hr />
            <Carousel plugins={['arrows']} animationSpeed={300} draggable>
               <div className="card card-custome p-3">
                   <p className="title-project">BELAJAR SKUY</p>
                   <p>Tempat mencari kursus yang lengkap dengan penyampaian materi yang unik dan seru </p>
                   <div className="row">
                       <div className="col-md-4 col-12">
                            <p>Read Case Study <FontAwesomeIcon icon={faArrowRight} /></p>
                       </div>
                       <div className="col-md-4 col-12">
                            <img src={Project1} className="img-project" alt="" />
                       </div>
                   </div>
               </div>
               <div className="card card-custome-two p-3">
                    <p className="title-project">PILIH JURUSAN</p>
                    <p>Membantu untuk menemukan course yang Course dengan materi yang mudah dipahami dan metode belajar yang kreatif dan inovatif </p>
                   <div className="row">
                       <div className="col-md-4 col-12">
                            <p>Read Case Study <FontAwesomeIcon icon={faArrowRight} /></p>
                       </div>
                       <div className="col-md-4 col-12">
                            <img src={Project2} className="img-project" alt="" />
                       </div>
                   </div>
               </div>
            </Carousel>
        </div>
        </div>
    )
}

export default Project

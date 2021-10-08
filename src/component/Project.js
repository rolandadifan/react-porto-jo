import React from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Project1 from '../asset/Group 34.png';
import Project2 from '../asset/image 40.png';
import Fade from 'react-reveal/Fade';
import Image1 from '../asset/PilihJurusan/1.PNG'
import Image2 from '../asset/PilihJurusan/2.PNG'
import Image3 from '../asset/PilihJurusan/3.PNG'
import Image4 from '../asset/PilihJurusan/4.PNG'
import Image5 from '../asset/PilihJurusan/5.PNG'
import Image6 from '../asset/PilihJurusan/6.PNG'
import Image7 from '../asset/PilihJurusan/7.PNG'
import Image8 from '../asset/PilihJurusan/8.PNG'
import Image9 from '../asset/PilihJurusan/9.PNG'
import Image10 from '../asset/PilihJurusan/10.PNG'
import Image11 from '../asset/PilihJurusan/11.PNG'
import Image12 from '../asset/PilihJurusan/12.PNG'
import Image13 from '../asset/PilihJurusan/13.PNG'

const Project = () => {
    return (
      <div>
        <div className="container project-wrapper" id="project">
          <Fade top>
            <h1 className="text-center pt-5 custome-title">PROJECT</h1>
          </Fade>
          <hr />
          <Carousel plugins={["arrows"]} animationSpeed={300} draggable>
            <div className="card card-custome-two p-3">
              <p className="title-project">PILIH JURUSAN</p>
              <p>
                Membantu untuk menemukan course yang Course dengan materi yang
                mudah dipahami dan metode belajar yang kreatif dan inovatif{" "}
              </p>
              <div className="row">
                <div className="col-md-4 col-12">
                  <button
                    type="button"
                    className="btn"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Read Case Study <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
                <div className="col-md-4 col-12">
                  <img src={Project2} className="img-project" alt="" />
                </div>
              </div>
            </div>
            <div className="card card-custome p-3">
              <p className="title-project">BELAJAR SKUY</p>
              <p>
                Tempat mencari kursus yang lengkap dengan penyampaian materi
                yang unik dan seru{" "}
              </p>
              <div className="row">
                <div className="col-md-4 col-12">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.figma.com/file/Le6mnfmDmzR4DTCD3xknhx/IM_UIUX_%5BJofardho-adlinnas%5D_TugasHarian-13.?node-id=0%3A1"
                    className="project-read-case"
                  >
                    Read Case Study <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
                <div className="col-md-4 col-12">
                  <img src={Project1} className="img-project" alt="" />
                </div>
              </div>
            </div>
          </Carousel>
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <Carousel plugins={["arrows"]}>
                    <img src={Image1} className="image-project-1" />
                    <img src={Image2} className="image-project-1" />
                    <img src={Image3} className="image-project-1" />
                    <img src={Image4} className="image-project-1" />
                    <img src={Image5} className="image-project-1" />
                    <img src={Image6} className="image-project-1" />
                    <img src={Image7} className="image-project-1" />
                    <img src={Image8} className="image-project-1" />
                    <img src={Image9} className="image-project-1" />
                    <img src={Image10} className="image-project-1" />
                    <img src={Image11} className="image-project-1" />
                    <img src={Image12} className="image-project-1" />
                    <img src={Image13} className="image-project-1" />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Project

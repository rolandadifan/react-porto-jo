import React,{useEffect} from 'react'
import ImageP from '../asset/Group 8.png';
import Fade from 'react-reveal/Fade';
import PS from '../asset/image 7.png';
import XD from '../asset/image 8.png';
import FI from '../asset/image 6.png';
import AD from '../asset/image 9.png';


const About = () => {
    return (
        <div className="container about-wrapper" id="about">
            <Fade top>
                <h1 className="text-center mt-5">ABOUT ME</h1>
            </Fade>
            
            <hr />
            <div className="row align-items-center">
                <div className="col-md-6 col-12">
                    <Fade left big>
                        <p className="detail-about">    &nbsp; Hallo saya <b>Jofardho Adlinnas,</b>  saya seorang junior UI UX design. Saya sangat menyukai dunia design dan selalu berinovasi dan berkreasi di bidang design serta tertarik pada hal-hal baru. <br /><br />

                                &nbsp;Saya lulusan dari Telkom University, jurusan s1 Informatika. Saya mulai menyukai UI/UX design setelah saya belajar suatu mata kuliah yaitu Interaksi
                                Manusia dan Komputer, mulai dari itu saya mengikuti beberapa kursus dan
                                mengikuti beberapa seminar tentang dunia UI/UX desiner.  
                        </p>
                    </Fade>
                    <h5 className="text-center">Tools And Skills</h5>
                    <div className="row justify-content-center mt-5">
                        <Fade top big delay={100}>
                            <img src={PS} className="tool-skill mb-2" alt="" />
                        </Fade>
                        <Fade top big delay={200}>
                            <img src={XD} className="ml-2 mb-2 tool-skill" alt="" />
                        </Fade>
                        <Fade top big delay={300}>
                            <img src={FI} className="ml-2 mb-2 tool-skill" alt="" />
                        </Fade>
                        <Fade top big delay={400}>
                            <img src={AD} className="ml-2 mb-2 tool-skill" alt="" />
                        </Fade>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <Fade bottom>
                        <img  src={ImageP}  className="image-about" alt="" />
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default About

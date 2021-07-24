import React from 'react'
import Fade from 'react-reveal/Fade';
import Facebook from '../../src/asset/facebook1.png';
import Gmail from '../../src/asset/gmail.png';
import WA from '../../src/asset/whatsapp.png';
import IG from '../../src/asset/instagram.png';

const Contact = () => {
    return (
        <div className="container contact-wrapper pt-5" id="contact">
            <Fade top>
                <h1 className="text-center pt-5 custome-title">CONTACT</h1>
            </Fade>
            <hr />
            <div className="row justify-content-center mt-5">
                <div className="col-md-6 col-12">
                    <a href="https://www.facebook.com/jofardo.adlinnas" target="_blank">
                    <Fade bottom delay={100}>
                        <div className="d-flex align-items-center">
                            <img src={Facebook} className="img-sosmed" alt="" />
                            <p className="title-sosmed">Jofardho Adlinas</p>
                        </div>
                    </Fade>
                    </a>
                </div>
                <div className="col-md-6 col-12">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jofardo52@gmail.com&su=Subject&body=Body%20Text" target="_blank">
                     <Fade bottom delay={200}>
                        <div className="d-flex align-items-center">
                            <img src={Gmail} className="img-sosmed" alt="" />
                            <p className="title-sosmed">jofardo52@gmail.com</p>
                        </div>
                     </Fade>
                    </a>
                </div>
                
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-6 col-12">
                     <a href="https://api.whatsapp.com/send?phone=6281251237790" target="_blank">
                    <Fade bottom delay={300}>
                           <div className="d-flex align-items-center">
                            <img src={WA} className="img-sosmed" alt="" />
                            <p className="title-sosmed">081251237790</p>
                        </div>
                         
                    </Fade>
                    </a>
                </div>
                <div className="col-md-6 col-12">
                    <a href="https://www.instagram.com/jofardo/" target="_blank">
                    <Fade bottom delay={400}>
                        <div className="d-flex align-items-center">
                            <img src={IG} className="img-sosmed" alt="" />
                            <p className="title-sosmed">Jofardho Adlinas</p>
                        </div>
                        
                    </Fade>
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default Contact

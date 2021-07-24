import React from 'react'
import Sertif1 from '../asset/sertif1.JPG';
import Sertif2 from '../asset/sertif2.JPG';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const Sertificate = () => {
    return (
        <div>
        <div className="container sertif-wrapper pt-5" id="#sertif">
            <Fade top>
                <h1 className="text-center pt-5 custome-title">SERTIFICATE</h1>
            </Fade>
            <hr />
            <div className="row mt-5">
                <div className="col-md-6 col-12">
                    <Bounce bottom delay={100}>
                        <img src={Sertif1} className="img-sertif" alt="" />
                    </Bounce>
                </div>
                <div className="col-md-6 col-12">
                    <Bounce bottom delay={200}>
                        <img src={Sertif2} className="img-sertif" alt="" />
                    </Bounce>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default Sertificate

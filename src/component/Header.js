import React from 'react'
import Typed from 'react-typed';
import Slide from 'react-reveal/Slide';


const Header = () => {
    return (
        <div>
        <div className="header-wrapper">
            <div className="main-info">
                <Slide bottom>
                    <h1>Hi, Saya Jofardho Adlinnas </h1>
                </Slide>
                <Typed className="typed-text"
                 strings={["UI DESIGN", "UX DESIGN","WEB DESIGN"]}
                 typeSpeed={70}
                 backSpeed={60}
                 loop
                 />
                 <div className="row button-head-wrap mt-5">
                     <div className="col">
                         <a href="#" className="btn-main-offer">CONTACT</a>
                     </div>
                     <div className="col">
                         <a href="" className="btn-main-offer">Unduh CV</a>
                     </div>
                 </div>
                 
            </div>
            
        </div>
        </div>
    )
}

export default Header

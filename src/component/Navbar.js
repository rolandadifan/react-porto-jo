import React from 'react'
import MyPhoto from '../asset/name.png'

const Navbar = () => {
    return (
        <div>
         <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
             <div className="container">
                 <a className="navbar-brand" href="/">
                    <div className="row align-items-center">
                        <div className="col">
                             <img src={MyPhoto} className="rounded-circle" alt="" />
                        </div>
                        <div className="col">
                            <h3 className="name-header text-light">Jofardo Adlinas</h3>
                        </div>
                    </div>
                   
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link text-light" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#about">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#project">PROJECT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#sertif">SERTIFICATE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
             </div>
            </nav>
        </div>
     
    )
}

export default Navbar

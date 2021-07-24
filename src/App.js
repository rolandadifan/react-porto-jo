import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './component/Navbar';
import Header from './component/Header';
import Particles from "react-particles-js";
import About from './component/About';
import Project from './component/Project';
import Sertificate from './component/Sertificate';
import Contact from './component/Contact';

function App() {
  return (
    <div>
      <Particles 
            params={{ 
                particles:{
                    number:{
                        value: 30,
                        density:{
                            enable:true,
                            value_area:900
                        }
                    },
                    shape:{
                      type: 'circle',
                      stroke:{
                        width: 6,
                        color: "#f9ab00"
                      }
                    }
                }
             }}
        />
      <Navbar/>
      <Header/>
      <About/>
      <Project/>
      <Sertificate/>
      <Contact/>
    </div>
  );
}

export default App;

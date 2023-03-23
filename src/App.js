import { useState } from "react";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';

import { CV } from "./CV/CV";
import Hero from "./components/Hero/Hero";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact/Contact";

import imageHeader from "./assets/animacion-desarrolladora.gif"
import imgClip from "./assets/clip.svg"

import { FaUserAstronaut } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaGrinWink } from "react-icons/fa";


function App() {

  const { hero, education, technologies, experience, contact} = CV;
  

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img className= {"imgNav"} src={imageHeader} alt="" /> 
          <div>
            <h2 className= {"tittleHome"}>{hero.name} {hero.adress}</h2>
            <p className= {"subTittleHome"}>{hero.title}</p>
          </div>
            <div className= {"navButtons"}> 
              <Link to="/"><button className= {"navBtn"}><FaGrinWink/> Sobre mí</button></Link>
              <Link to="/formacion"><button className= {"navBtn"}><FaUserGraduate/> Formación</button></Link>
              <Link to="/experiencia"><button className= {"navBtn"}><FaUserAstronaut/> Experiencia</button></Link>
              <Link to="/tecnologias"><button className= {"navBtn"}><FaLaptop/> Tecnologías</button></Link>
              <Link to="/contacto"><button className= {"navBtn"}><FaComments/> Contacto</button></Link>
            </div>
        </header>
        <main className="App-main">
          <img className="clip" src={imgClip} alt="" /> 
           <Routes>
            <Route exact path="/" element={<Hero hero={hero}></Hero>}></Route>
            <Route exact path="/formacion" element={<Education education={education}></Education>}></Route>
            <Route exact path="/experiencia" element={<Experience experience={experience}></Experience>}></Route>
            <Route exact path="/tecnologias" element={<Technologies technologies={technologies}></Technologies>}></Route>
            <Route exact path="/contacto" element={<Contact contact={contact}></Contact>}></Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

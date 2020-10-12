import React from 'react'
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import '../styles/pages/landing.css';

import logoImg from '../images/logo.svg';

export default function Landing() {
  return (
    
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Logo Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Uberlândia</strong>
          <span>Minas Gerais</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={36} strokeWidth={2.5} className="arrow-icon"/>
        </Link>
        
      </div>
    </div>
  )
}

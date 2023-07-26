import React from 'react'
import FaqCompetitive from '../../components/FaqCompetitive/FaqCompetitive'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../container/Footer/Footer'
import SoccerCalendar from '../../components/Calendar/SoccerCalendar'
import './Resources.css'
import { images } from "../../constants";
import { useState } from "react";

const Resources = () => {
  const [faqC, setFaqC] = useState([
    {
      id: 1,
      question: 'Lorem ipsum dolor sit amet?',
      answer: 'Lorem, ipsum.',
      open: false,
    },
    {
      id:2,
      question: 'Lorem, ipsum dolor sit amet consectetur adipisicing?',
      answer: 'Lorem, ipsum consectetur.',
      open: false,
    },
    {
      id:3,
      question: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit?',
      answer: 'Lorem, ipsum sit amet.',
      open: false,
    },
  ]);


  const toggleFaq = index => {
    setFaqC(faqC.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="app__resources" id="resources">
      <Navbar />
      <div className="app__resources-title flex__center section_padding">
        <h1 className="headtext__playfair text__resources">Resources</h1>
      </div >
      <div className="flex__center">
      <SoccerCalendar />
      </div>
      <div className="app__resources-content section__padding" >
        <div className="app__resources-competitive ">
          <h2 className="app__resources-title">Competitive FAQ</h2>
          <img src={images.pitch} alt="about_pitch" className="pitch__img"/>
        </div>
        <div className="app__resources-faq app__faq ">
          {faqC.map((faq, i) => (
            <FaqCompetitive faq={faq} index={i} toggleFaq={toggleFaq} />))}
        </div>
      </div>
      <div className="app__resources-content section__padding" >
        <div className="app__resources-competitive ">
          <h2 className="app__resources-title"> Recreation FAQ</h2>
          <img src={images.pitch} alt="about_pitch" className="pitch__img"/>
        </div>
        <div className="app__resources-faq app__faq ">
          {faqC.map((faq, i) => (
            <FaqCompetitive faq={faq} index={i} toggleFaq={toggleFaq} />))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>


  )
}

export default Resources
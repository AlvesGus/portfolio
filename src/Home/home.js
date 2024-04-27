import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import api from '../api'

import './home.css'
import Marquee from 'react-fast-marquee'
import User from '../assets/Gutavo.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
  const [dataProject, setDataProject] = useState([])
  const url = 'https://www.npoint.io'
  const endpoint = ''
  const key = 'a9d3c736c1a7e9428203'

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://api.npoint.io/5160182c2cee838465d7`)
        .then(response => response.json())
        .then(data => setDataProject(data.project))
        .catch(error => console.log(error))
    }
    getData()
  }, [])

  console.log(dataProject)
  console.log(typeof dataProject)

  const about = [
    {
      id: 1,
      name: 'Visão',
      icon: <i className="fa-solid fa-binoculars"></i>,
      description: 'De olho no futuro, analise crítica e trabalho em equipe'
    },
    {
      id: 2,
      name: 'Missão',
      icon: <i className="fa-solid fa-bullseye"></i>,
      description: 'Inovação, resolução de problemas e tornar a vida mais fácil'
    },
    {
      id: 3,
      name: 'Comprometimento',
      icon: <i className="fa-solid fa-handshake"></i>,
      description: 'Comprometido com o futuro e aprendizado continuo'
    }
  ]

  return (
    <div>
      <section id="home">
        <div className="home">
          <div className="home-text">
            <h2>Olá, sou o</h2>
            <h1>Gustavo Alves</h1>
            <span>
              <i className="fa-solid fa-chevron-right"></i>Dev Frontend e
              Pescador Esportivo
            </span>
            <Marquee pauseOnHover={true} speed={80} className="slide">
              <i className="fa-brands fa-html5"></i>
              <i className="fa-brands fa-react"></i>
              <i className="fa-brands fa-css3-alt"></i>
              <i className="fa-brands fa-js"></i>
            </Marquee>
          </div>

          <div className="home-img">
            <img src={User} alt="user photo" />
          </div>
        </div>
      </section>
      <section id="about">
        <div className="about-content">
          <h2 className="about-title">Sobre</h2>
          <span className="about-subtitle">
            Sou Gustavo Alves, mais conhecido por Gu, sou natural de Taubaté/SP
            onde resido até hoje, sou estudande de Análise e Desenvolvimento de
            Sistemas na Universidade de Taubaté (UNITAU), apaixonado por
            tecnologias de frontend e estou à procura de migrar de área e ocupar
            meu tão sonhado espaço no mundo dos Dev's, pegue seu café e fique a
            vontade para ver meu portifólio.
          </span>
          <div className="card-about">
            {about.map(item => (
              <div className="about-item" key={item.id}>
                <div className="about-text">
                  <h2>{item.name}</h2>
                  <i>{item.icon}</i>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="project">
        <h2 className="project-title">Projetos</h2>
        <p className="project-subtitle">
          Confira um pouco dos meus últimos projetos.
        </p>
        <Marquee pauseOnHover={true} speed={50} className="project-card">
          {dataProject.map(item => (
            <div key={item.id} className="project-item">
              <Link className="link-cta" to={`/project/${item.id}`}>
                <img src={item.img[0].img_home}></img>

                <div className="project-card-title">
                  <button className="link-btn">
                    <h2>{item.title}</h2>
                  </button>
                </div>
              </Link>
              <div className="button">
                <a className="github" target="_blank" href={item.github}>
                  Veja no Github
                </a>
                <a className="web" target="_blank" href={item.web}>
                  Veja no Deploy
                </a>
              </div>
            </div>
          ))}
        </Marquee>
      </section>
    </div>
  )
}

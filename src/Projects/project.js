import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import './project.css'

export default function Project() {
  const { id } = useParams()
  const [project, setProject] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `https://api.npoint.io/5160182c2cee838465d7/project/${id}`
        )
        const data = await response.json()
        setProject(data)
      } catch (error) {
        console.error('Erro ao buscar projeto:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [id])

  // Verifica se ainda está carregando os dados
  if (loading) {
    return (
      <div className="content">
        <div className="spin"></div>
      </div>
    )
  }

  const imgSrc =
    project.img && project.img.length > 0 ? project.img[0].img_home : ''
  const imgSrcSupp =
    project.img && project.img.length > 0 ? project.img[0].img_support : ''
  const imgSrcSupp2 =
    project.img && project.img.length > 0 ? project.img[0].img_supp_2 : ''

  const stacksDev =
    project.stacks && project.stacks.length > 0
      ? project.stacks[0].linguagem
      : ''

  const stacksDevStyle =
    project.stacks && project.stacks.length > 0 ? project.stacks[0].style : ''

  const stacksDevApi =
    project.stacks && project.stacks.length > 0 ? project.stacks[0].apis : ''

  return (
    <>
      <section className="project">
        <div className="project-container">
          <div className="project-title">
            <h2>{project.title}</h2>
            <span>{project.tag}</span>
          </div>
          <div className="project-slider">
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              autoplay={{
                delay: 2500,
                disableOnInteraction: true
              }}
            >
              {imgSrc && imgSrcSupp && imgSrcSupp2 && (
                <div>
                  <SwiperSlide className="img-slider">
                    <img src={imgSrc} alt={project.title} />
                  </SwiperSlide>
                  <SwiperSlide className="img-slider">
                    <img src={imgSrcSupp} alt={project.title} />
                  </SwiperSlide>
                  <SwiperSlide className="img-slider">
                    <img
                      className="mobile"
                      src={imgSrcSupp2}
                      alt={project.title}
                    />
                  </SwiperSlide>
                </div>
              )}
            </Swiper>
          </div>
          <div className="project-description">
            <div className="project-stack">
              <h3>Stack:</h3>
              {stacksDev && <p>{stacksDev}</p>}
              {stacksDevStyle && <p>{stacksDevStyle}</p>}
              {stacksDevApi && <p>{stacksDevApi}</p>}
            </div>
          </div>
          <div className="history-project">
            <p>{project.description}</p>
            <a target="_blank" href={project.web} rel="noopener noreferrer">
              Veja no Site
            </a>
            <a target="_blank" href={project.github} rel="noopener noreferrer">
              Veja no Github
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

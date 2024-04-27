import { useState } from 'react'
import './header.css'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Navigate } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function toggleModal(e) {
    e.preventDefault()
    setIsOpen(!isOpen)
  }
  function menuBars(e) {
    e.preventDefault()
    setMobileOpen(!mobileOpen)
  }

  function sendEmail(e) {
    e.preventDefault()

    if (name === '' || email === '' || message === '') {
      toast.error('Preencha todos os campos...', {
        position: 'top-center',
        theme: 'dark'
      })
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs
      .send(
        'service_vn16ace',
        'template_b6n6a2f',
        templateParams,
        'OwrilOPnan27zdId4'
      )
      .then(response => {
        toast.success('Email enviado com sucesso!', {
          position: 'top-center',
          theme: 'dark'
        })
        setEmail('')
        setName('')
        setMessage('')
        setIsOpen(!isOpen)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <header>
      <div className="header-content">
        <div>
          <a href="/">
            <svg
              width="45"
              height="50"
              viewBox="0 0 45 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 25.6876C0.524243 13.2807 10.4265 4.48514 16.4261 0C25.1634 13.1059 8.21306 11.708 9.78577 28.1341C10.5052 35.6481 20.7948 44.9679 26.0371 49.1036C6.98983 50.152 -3.88504e-06 36.1724 0 25.6876Z"
                fill="white"
              />
              <path
                d="M21.4937 31.2796L15.0281 24.6392L34.5996 4.89294C47.5308 17.4746 43.8611 31.2796 43.8611 31.2796C43.8611 31.2796 41.9389 37.2209 34.5996 44.2107L28.6582 37.9199C34.8386 31.3448 36.8585 27.0434 34.5996 18.1736L21.4937 31.2796Z"
                fill="#FCFF51"
              />
            </svg>
          </a>
        </div>
        <div className="cta-header">
          <ul>
            <li>
              <a href="/">&lt;Home /&gt;</a>
            </li>
            <li>
              <a href="/#about">&lt;Sobre /&gt;</a>
            </li>
            <li>
              <a href="/#project">&lt;Projetos /&gt;</a>
            </li>
            <button onClick={toggleModal}>Contatos</button>
          </ul>
        </div>
      </div>

      <div className="mobile-menu">
        {mobileOpen === false ? (
          <div className="menu-mobile">
            <a href="/">
              <svg
                width="45"
                height="50"
                viewBox="0 0 45 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 25.6876C0.524243 13.2807 10.4265 4.48514 16.4261 0C25.1634 13.1059 8.21306 11.708 9.78577 28.1341C10.5052 35.6481 20.7948 44.9679 26.0371 49.1036C6.98983 50.152 -3.88504e-06 36.1724 0 25.6876Z"
                  fill="white"
                />
                <path
                  d="M21.4937 31.2796L15.0281 24.6392L34.5996 4.89294C47.5308 17.4746 43.8611 31.2796 43.8611 31.2796C43.8611 31.2796 41.9389 37.2209 34.5996 44.2107L28.6582 37.9199C34.8386 31.3448 36.8585 27.0434 34.5996 18.1736L21.4937 31.2796Z"
                  fill="#FCFF51"
                />
              </svg>
            </a>
            <i onClick={menuBars} className="fa-solid fa-bars"></i>
          </div>
        ) : (
          <div className="cta-header-mobile">
            <i onClick={menuBars} className="fa-solid fa-xmark"></i>
            <div className="list-mobile">
              <ul>
                <li>
                  <a onClick={() => setMobileOpen(!mobileOpen)} href="/">
                    &lt;Home /&gt;
                  </a>
                </li>
                <li>
                  <a onClick={() => setMobileOpen(!mobileOpen)} href="/#about">
                    &lt;Sobre /&gt;
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => setMobileOpen(!mobileOpen)}
                    href="/#project"
                  >
                    &lt;Projetos /&gt;
                  </a>
                </li>
                <button className="mobile-button" onClick={toggleModal}>
                  Contatos
                </button>
              </ul>
            </div>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-title">
              <h2>Envie-me um email</h2>

              <i
                onClick={() => setIsOpen(!isOpen)}
                className="fa-solid fa-xmark"
              ></i>
            </div>
            <div className="inputs">
              <label>Nome</label>
              <input
                type="text"
                name="name"
                placeholder="Gustavo Alves"
                onChange={e => setName(e.target.value)}
                value={name}
              ></input>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="contato@contato.com"
                onChange={e => setEmail(e.target.value)}
                value={email}
              ></input>
              <label>Digite sua mensagem</label>
              <textarea
                type="text"
                name="email"
                placeholder="Digite sua mensagem..."
                onChange={e => setMessage(e.target.value)}
                value={message}
              ></textarea>

              <div className="buttons">
                <button className="close" onClick={() => setIsOpen(!isOpen)}>
                  Cancelar
                </button>
                <button onClick={sendEmail} className="env">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

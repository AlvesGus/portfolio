import './footer.css'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer">
        <div className="footer-content">
          <div className="footer-content-link">
            <a target="_blank" href="https://github.com/AlvesGus">
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/gustavo-alves-dos-santos-1263b72a8/"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div>
            <i class="fa-regular fa-copyright"></i> Todos os direitos reservados
            - 2024
          </div>
        </div>
      </div>
    </footer>
  )
}

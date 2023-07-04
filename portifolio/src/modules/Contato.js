import { FaInstagram, FaLinkedin } from "react-icons/fa"
import { SiGithub } from "react-icons/si"

function Contato() {
  return (
    <div>
      <footer id="sectionContact">
        <div className="leftFooter" id="contactSection">
          <p className="contact">Quer falar comigo?</p>
          <p className="subText"></p>
          <div className="icons">
            <a href="https://www.instagram.com/jionaz.zano/">
              <FaInstagram className="ig" />
            </a>
            <a href="https://www.linkedin.com/in/jionaz-pagliari-487371248/">
              <FaLinkedin className="li" />
            </a>
            <a href="https://github.com/Jionaz/">
              <SiGithub className="gh" />
            </a>
          </div>
          <p className="bottomText">
            Copyright &copy; 2023 desenvolvido por Jionaz Pagliari Jr.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Contato

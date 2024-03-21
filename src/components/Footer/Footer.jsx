import "../Footer/Footer.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <div className="footer">
            <div className='social-media'>
                <span className="contact">Contact</span>
                <ul className='list-social-media'>
                    <li><a href="mailto:camille5607@hotmail.fr" rel="noreferrer" target="_blank" id="mail" className="a-social-media"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                    <li><a href="https://github.com/Aby-Camille" rel="noreferrer" target="_blank" id="github" className="a-social-media"><FontAwesomeIcon icon={faGithub} /></a></li>
                    <li><a href="https://www.linkedin.com/in/camille-lavenant/" target="_blank" rel="noreferrer" id="linkedin" className="a-social-media"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
            </div>
        </div>
    )
}
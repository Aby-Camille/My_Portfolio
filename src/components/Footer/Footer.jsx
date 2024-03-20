import "../Footer/Footer.scss";
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className='social-media'>
                <span className="contact">Contact</span>
                <ul className='list-social-media'>
                    <li><a href="mail" rel="noreferrer" target="_blank" id="mail" className="a-social-media"><i className="fa-brands fa-mail"></i></a></li>
                    <li><a href="https://github.com/Aby-Camille" rel="noreferrer" target="_blank" id="github" className="a-social-media"><i className="fa-brands fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" id="linkedin" className="a-social-media"><i className="fa-brands fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    )
}
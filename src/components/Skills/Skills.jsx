import '../Skills/Skills.scss';
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import react from "../../assets/react.svg";
import mongodb from "../../assets/mongodb.svg";
import javascript from "../../assets/js.svg";
import nodejs from "../../assets/nodejs.svg";
import expressjs from "../../assets/expressjs.svg";
import sass from "../../assets/sass.svg";
import lighthouse from "../../assets/lighthouse.svg";
import wave from "../../assets/wave.svg";


export default function Skills() {

    return <section className='skills-main' id='skills'>
        <h2>Compétences</h2>

        <div className="skills-content">
            <div className='card-skills'>
                <h3>Compétences Front-end</h3>
                <div className='img-skills'>
                    <img src={html} alt="html-logo" className='icon' />
                    <img src={css} alt="css-logo" className='icon' />
                    <img src={sass} alt="sass-logo" className='icon' />
                    <img src={react} alt="react-logo" className='icon' />
                    <img src={javascript} alt="js-logo" className='icon' />
                </div>
        </div>
        <div className='card-skills'>
                <h3>Compétences Back-end</h3>
                <div className='img-skills'>
                    <img src={mongodb} alt="mongodb-logo"className='icon' />
                    <img src={nodejs} alt="nodejs-logo"className='icon' />
                    <img src={expressjs} alt="expressjs-logo" className='icon' />
                    <div className='overlay'>
                        <div class="text">Hello World</div>
                    </div>
                </div>
        </div>
        <div className='card-skills'>
                <h3>Compétences SEO</h3>
                <div className='img-skills'>
                    <img src={lighthouse} alt="lighthouse-logo" className='icon' />
                    <img src={wave} alt="wave-logo" className='icon' />
                </div>
        </div>
    </div>

    </section>
}
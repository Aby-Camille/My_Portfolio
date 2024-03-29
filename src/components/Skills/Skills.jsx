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
import { useTranslation } from 'react-i18next';


export default function Skills() {
    const { t } = useTranslation();

    return <section className='skills-main' id='my-skills'>
        <h2>{ t('my-skills.title') }</h2>

        <div className="skills-content">
            <div className='card-skills'>
                <h3>{ t('my-skills.1') }</h3>
                <div className='img-skills'>
                    <img src={html} alt="html-logo" className='icon' />
                    <img src={css} alt="css-logo" className='icon' />
                    <img src={sass} alt="sass-logo" className='icon' />
                    <img src={react} alt="react-logo" className='icon' />
                    <img src={javascript} alt="js-logo" className='icon' />
                    <div className='overlay'>
                        <div className="text">
                            <p>{ t('my-skills.p1') }</p>
                            <p>{ t('my-skills.p2') }</p>
                            <p>{ t('my-skills.p3') }</p>
                        </div>
                    </div>
                </div>
        </div>
        <div className='card-skills'>
                <h3>{ t('my-skills.2') }</h3>
                <div className='img-skills'>
                    <img src={mongodb} alt="mongodb-logo"className='icon' />
                    <img src={nodejs} alt="nodejs-logo"className='icon' />
                    <img src={expressjs} alt="expressjs-logo" className='icon' />
                    <div className='overlay'>
                        <div className="text">
                        <p>MongoDB Atlas</p>
                        <p>Mongoose</p>
                        <p>{ t('my-skills.p4') }</p>
                        </div>
                    </div>
                </div>
        </div>
        <div className='card-skills'>
                <h3>{ t('my-skills.3') }</h3>
                <div className='img-skills'>
                    <img src={lighthouse} alt="lighthouse-logo" className='icon' />
                    <img src={wave} alt="wave-logo" className='icon' />
                    <div className='overlay'>
                        <div className="text">
                        <p>{ t('my-skills.p5') }</p>
                        <p>{ t('my-skills.p6') }</p>
                        <p>{ t('my-skills.p7') }</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    </section>
}
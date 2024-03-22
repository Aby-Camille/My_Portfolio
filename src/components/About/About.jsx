import '../About/About.scss';
import { useTranslation } from 'react-i18next'

export default function About() {
    const { t } = useTranslation();
    const cvLink = "/CV_Camille_Lavenant_2024.pdf";

    return (
        <section className='about-me-main'id='about'>
            <div className='about-me'>
                <h2>
                    <span>{ t('about.title') }</span>
                    <br />
                    <span>{ t('about.subtitle') }</span>
                </h2>
                <p className='about-content'>
                    <span>{ t('about.1') }</span>
                    <br />
                    <span>{ t('about.2') }</span>
                    <br />
                    <span>{ t('about.3') }</span>
                    <br />
                    <span>{ t('about.4') }</span>
                    <br />
                </p>
                <div className='content-link'>
                    <a href={cvLink} download="CV_Camille_Lavenant_2024.pdf" className='a-link' >Télécharger mon CV</a>
                </div>
            </div>
        </section>
    )
}
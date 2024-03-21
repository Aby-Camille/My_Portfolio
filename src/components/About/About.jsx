import '../About/About.scss';
import { useTranslation } from 'react-i18next'

export default function About() {
    const { t } = useTranslation();

    return (
        <div className='about-me-main'id='about'>
            <div className='about-me'>
                <h2>
                    <span>{ t('about.title') }</span>
                    <br />
                    <span>{ t('about.subtitle') }</span>
                </h2>
                <p>
                    <span>{ t('about.1') }</span>
                    <br />
                    <span>{ t('about.2') }</span>
                    <br />
                    <span>{ t('about.3') }</span>
                    <br />
                    <span>{ t('about.4') }</span>
                </p>
            </div>

        </div>
    )
}
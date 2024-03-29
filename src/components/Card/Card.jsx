import '../Card/Card.scss';
import { useTranslation } from 'react-i18next'

export default function Card({project}) {
  const { t } = useTranslation();


    return <div className="card">
      <h2>{t(project.title)}</h2>
      <img src={project.images} alt={project.imageAlt} loading="lazy" />
      <p className='card-content'>{t(project.content)}</p>
      <p className='card-info'>{t(project.info)}</p>
      <a
        href={project.sourceCode}
        className="tag"
        target="blank"
        rel="noopener noreferrer"
        >
        {" "}
        <div className='span-content'>
          <span className='a-link'>{t('projects.github')}</span>
        </div>
      </a>
    </div>
};
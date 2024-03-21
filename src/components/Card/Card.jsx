import '../Card/Card.scss';
import { useTranslation } from 'react-i18next'

export default function Card({project}) {
  const { t } = useTranslation();


    return <div className="card">
      <h2>{t(project.title)}</h2>
      <img src={project.images} alt={project.imageAlt} />
      <p>{t(project.content)}</p>
      <a
        href={project.sourceCode}
        className="tag"
        target="blank"
        rel="noopener noreferrer"
        >
        {" "}
        <span className='span-link'>{t('projects.github')}</span>
      </a>
    </div>
};
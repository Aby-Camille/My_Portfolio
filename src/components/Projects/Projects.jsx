import '../Projects/Projects.scss';
import Card from '../Card/Card';
import projects from '../../data/projects.json';
import { useTranslation } from 'react-i18next';


export default function Projects() {
    const { t } = useTranslation();

    return <section className='projects-main' id='my-projects'>
        <h2>{ t('my-projects.title') }</h2>
        <div className="flex">
            {
                projects.map((project) => {
                    return <Card key={project.title} project={project}/>;
                })
            }
        </div>;
    </section>
};
import '../Projects/Projects.scss';
import Card from '../Card/Card';
import projects from '../../data/projects.json';



export default function Projects() {

    return <div className='projects-main' id='projects'>
        <div className="flex">
            {
                projects.map((project) => {
                    return <Card key={project.id} project={project}/>;
                })
            }
    </div>;
    </div>
};
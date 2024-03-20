import '../Card/Card.scss';

export default function Card({project}) {

    return <div className="card">
      <h2>{project.title}</h2>
      <img src={project.images} alt={project.imageAlt} />
      <p>{project.content}</p>
      <a
        href={project.sourceCode}
        className="tag"
        target="blank"
        rel="noopener noreferrer"
        >
        {" "}
        <span className='span-link'>Repo Github</span>
      </a>
    </div>
};
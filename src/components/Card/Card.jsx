import '../Card/Card.scss';

export default function Card(props) {

    return <div className="card">
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt={props.imageAlt} />
      <p>{props.content}</p>
    </div>
};
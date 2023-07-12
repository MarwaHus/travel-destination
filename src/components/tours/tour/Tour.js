import { Link } from "react-router-dom";

function Tour(props) {
  return (
    <>
      <Link to={`/city/${props.id}`}>
        <div className="tour">
        <h2>{props.name}</h2>
        <img src={props.image} alt={props.id} />
        </div>
      </Link>
    </>
  );
}
export default Tour;
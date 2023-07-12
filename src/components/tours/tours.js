import "./tours.css"
import Tour from "./tour/Tour";

function Tours(props){
    return(
<div className="div3">
  
        <div className="tour1">
          <Tour name={props.name} image={props.image} id ={props.id}/>
           </div>

</div>
    );

}
export default Tours;
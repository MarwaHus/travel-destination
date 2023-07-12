import "./tours.css"

function Tours(props){
    return(
<div className="div3">
    {props.db.map((obj,i)=>(
        <div key={i} className="tour1">
           <h2>{obj.name}</h2>
           <img src={obj.image} alt={obj.id}/> 
           </div>
    ))}
</div>
    );

}
export default Tours;
//import Navbar from './components/Navbar/Navbar'
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../data/db.json";
import Navbar from "../Navbar/Navbar";

function TourDetails(props) {
  const { id } = useParams();
  const [seeMore, setSeeMore] = useState(false);

  function handleSeeMore() {
    setSeeMore(!seeMore);
 
  }

  const tour = db.filter((element) => element.id === id);
  const { image, name, price, info } = tour[0];
  const preview = info.split(".").slice(0, 2).join(".") + ".";

  return (
    <div className="info">
      <Navbar />
        <img src={image} alt={name} style={{ width: "350px",height:"350px" }} />
        <h2>{name}</h2>
          <p>{seeMore ? info : preview}</p>
          <button onClick={handleSeeMore} id="bnt">
            {seeMore ? "See Less" : "See More"}
          </button>
        <h3>{price}</h3>
      </div>
   
  );
};

export default TourDetails;

import Header from "../header/header";
import Tours from "../tours/tours";
import Footer from "../footer/footer";
import db from "../../data/db.json"

const Home = () => {
    console.log(db);
    return (
      <>
        <Header  />
        {db.map((tour) => <Tours key={tour.id} id={tour.id} name={tour.name} image={tour.image} />
        )}
        <Footer/>
      </>
    );
}

export default Home;
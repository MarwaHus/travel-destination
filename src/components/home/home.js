
import Header from "../header/header";
import Tours from "../tours/tours";
import db from '../../data/db.json';
import Footer from "../footer/footer";


function Home(){
    return(
<div>
    <Header/>
   {
db.map((obj,i)=>(
    <Tours name={obj.name} image={obj.image}/>
))
    }
     <Footer/>
</div>
    );

}
export default Home;
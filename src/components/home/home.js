
import Header from "../header/header";
import Tours from "../tours/tours";
import Footer from "../footer/footer";


function Home(props){
    return(
<div>
    <Header/>
    <Tours db={props.db}/>
    <Footer/>
</div>
    );

}
export default Home;
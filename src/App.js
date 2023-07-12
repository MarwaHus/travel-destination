import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from  './components/home/home'
//import db from './data/db.json';
import TourDetails from './components/TourDetails/TourDetails';
//import Header from './components/header/header';
//import Footer from './components/footer/footer';

function App() {
 
  return (
    <div className="App">
      
      <nav>
         <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/city/:id" element={<TourDetails />} />
         </Routes>
     </nav>

    </div>
  );
}

export default App;

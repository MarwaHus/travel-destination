import './App.css';
import Home from  './components/home/home'
import db from './data/db.json';

function App() {
 
  return (
    <div className="App">
         <Home db={db}/>

    </div>
  );
}

export default App;

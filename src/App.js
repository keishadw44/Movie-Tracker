import 'bootstrap/dist/css/bootstrap.min.css';
import './components/assets/styles/baselayout.css';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Navbar from './components/layout/Navbar';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';


function App() {
  return <>
    <Router>
      <Navbar />
      
     <div className='app app-div' >
      <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/Favorites' element={ <Favorites />} />
      </Routes>
     </div> 
    </Router>
    
  
   <Favorites />
   
  
    </>
}

export default App;

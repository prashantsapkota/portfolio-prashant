
import About from './About';
import './App.css';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
// import Service from './Service';
import { ToastContainer } from 'react-toastify';


// import Service from './Service';
import Project from './Project';
// import {BrowserRouter as Router ,Switch } from 'react-router-dom';







function App() {
  return ( 
     
   
    <div className="App">
     <Home />
     <About />
     {/* <Service /> */}
     <Project />
     <Contact />
     <Footer />

 
    






    
    
     
<ToastContainer/> 
    </div> 
  );
}

export default App;

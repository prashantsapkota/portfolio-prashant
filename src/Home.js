import React from 'react';
import './Home.css';

// import logo from "./img/logo.png";

function Home() {
    
  return (
    <div className="home">
        <div className="home__bg">  
        <div className="header d_flex align_items_center pxy_30">
            <div className="logo"> 
                {/* <img src={logo} alt=""/> */}
            </div>
            {/* <div className="navigation pxy_30 ">
                <ul className="navbar d__flex">
                    <a href="#Home"><li className="nav__items mx__15">Home</li></a>
                    <a href="#About Me"><li className="nav__items mx__15">About Me</li></a>
                    <a href="#My Projects"><li className="nav__items mx__15">My Projects</li></a>
                    <a href="#Contact ME"><li className="nav__items mx__15">Contact Me</li></a>
                   
                
                    
                </ul> */}
            {/* </div>  */}
        </div> 
        {/*Home Content  */}
        <div className="container">
        <div className="home_content">

        <div className='home__meta'>
        <h1 className='home__Text pz__10'>
            Welcome To My Portfolio Website
        </h1>
        <h2 className='home__Text pz__10'>
            Hi , I am Prashant Sapkota 
        </h2>

        <h3 className='home__Text sweet pz__10'>
         FrontEnd Developer ,
        </h3>

        <h4 className='home__Text pz__10'>
            based in Nepal.
        </h4>

        






        </div>

 

        </div>
        </div>
        </div>
        </div>

    
  )
}

export default Home;

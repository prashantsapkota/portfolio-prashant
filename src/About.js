import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
          <div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h1 class="animate-charcter">About Me</h1>
    </div>
  </div>
</div>
            <div className="about__meta">
              <p className="about__text p__color">

                I am Prashant Sapkota from the Himalayas Country Nepal.
                I have been working as a Junior Frontend Developer 
                at Cliffbyte ,Kathmandu.


              </p>
              <p className="about__text p__color">
                Quest to work and learn in a real professional and vying
                ambience that enables me to cope with the emerging as well as
                latest technology and scope for widening the spectrum of my
                knowledge. I have currently completed my BSC hons computing from 
                The British College , Kathmandu. It
                encourages me to develop extensive knowledge of computer
                programming. I have developed my skills by designing and building in
                a major final-year web app development project.
              </p>
              <p className="about__text p__color">
                Excellent capability to explore, learn and understand newer
                business domains and technology Involved in Waterfall and Agile
                methodologies of Software Development in my college project
                during the different phases like gathering the requirements,
                design, development and testing phases.
              </p>
              <div className="about__button d__flex align__items__center">
              
              <a href="https://drive.google.com/file/d/1IsDwmy_pLgrKTstmNpjjnnEZc0DZhs-0/view?usp=sharing" target="_blank">
               <button className="about btn pointer">Download Cv </button>
               </a>
                  

                

          
                
                
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import "./Project.css";
import Project1 from "./img/portfolio-2.jpg";
import Project2 from "./img/portfolio-2.jpg";
import Project3 from "./img/portfolio-2.jpg";
import Project4 from "./img/portfolio-2.jpg";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        
        <div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter">My Latest Projects</h3>
    </div>
  </div>
</div>
      


      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">

          
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">React , Laravel</h5>
                <h4 className="project__text">
                   SoftExpo  : A Software Exposure MarketPlace
                </h4>
                <a href="https://github.com/prashantsapkota/softexpo"target="_blank" className="project__btn">
                  View Repository
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Laravel</h5>
                <h4 className="project__text">
                  Made Crud Functionality Todos app 
                </h4>
                <a href="#" className="project__btn">
                  View Repository
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Java , Android Studio</h5>
                <h4 className="project__text">
                  Getting tickets to the big show
                </h4>
                <a href="#" className="project__btn">
                  View Repository
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Php , MySql</h5>
                <h4 className="project__text">
                  Ecommerce Website for Online Store
                </h4>
                <a href="#" className="project__btn">
                  View Repository
                </a>
              </div>
            </div>
          </div>


          <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <button className="view__more pointer btn">View more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

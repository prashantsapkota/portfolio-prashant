import React from "react";
import "./Service.css";

function className() {
  return (
    <div className="service component__space">

      <div className="heading">
        <h1 className="heading">My Services </h1>
        <p className="heading p__color">
          Hello I am providing various services to my client.
        </p>
        <p className="heading p__color">See my works here .</p>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
                <div className="service__meta"></div>
                    <h1 className="service__text">
                        Website Development
                    </h1>

                    <p className="p service__text p__color">
                        I makes web App using Robust FrontEnd framework React.
                       </p>

                    </div>
                    </div>
                     </div>
              </div>
            </div>
          </div>
          
          
       
  );
}

export default className;

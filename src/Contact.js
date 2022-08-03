import emailjs from "@emailjs/browser";
import React from 'react';
import './Contact.css';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import contactImg from "./img/about-9.jpg"
const Contact =() =>{

    const diffToast =() =>{
        toast("Thankyou for your message");
    }



    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_uw6l0pg', 'template_qc5yfhf', document.querySelector("#__form"), 'lzCrGjGnA-8XOz2i3')
      .then((result) => {
          console.log(result.text);  
          diffToast();
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    } 

   
    return (
       
                
            <div className="row">
                <div className="col__2"> 
                    <div className="contact__box">
                        <div className="contact__meta">
                       
        
                          
                            <div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <h3 class="animate-charcter">Contact Me</h3>
    </div>
  </div>
</div>

                        </div>
                        <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+977 9862103826</strong> or email <strong>saprashant123@gmail.com</strong></p>
            
                        <form className="contact component__space" id="__form" onSubmit={sendEmail}>
                        
                    
                        <div className="input__box " >
                           <input type="text" name="user_name" className="contact name" placeholder="Your name *" />
                           <input type="text" name="email_id" className="contact email" placeholder="Your Email *" />
                           
                           <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                        
                        </div>
                        </form>
                      
                    </div>
                </div>
                
                <div className="col__2">
                    {/* <img src={contactImg} alt="" className="contact__img" /> */}
                </div>
               
        
            {/* <ToastContainer /> */}
          </div> // End of row div. 
        
    )
}


export default Contact
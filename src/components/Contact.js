import React from "react";

function Contact() {
  return (
    <>
      <div className="w3l-innerblock"></div>
      <section className="w3l-contact-2 py-5" id="contact">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="title-content text-center">
            <h6 className="title-subhny text-center">Contact Us</h6>
            <h3 className="title-w3l mb-sm-5 mb-4 pb-sm-o pb-2 text-center">
              Send a Message
            </h3>
          </div>
          <div className="contact-grids d-grid">
            <div className="contact-left-img">
              <div className="cont-details">
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-map-marker"></span>
                  </div>
                  <div className="cont-right">
                    <h6>Visit Us</h6>
                    <p>
                      Estates Housing Company, 343 marketing, #2214 cravel
                      street, NY - 62617.
                    </p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-phone"></span>
                  </div>
                  <div className="cont-right">
                    <h6>Call Us</h6>
                    <p>+1(21) 234 557 4567</p>
                    <p>+1(21) 234 557 4568</p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-envelope-o"></span>
                  </div>
                  <div className="cont-right">
                    <h6>Email Us</h6>
                    <p className="mail">support@mail.com</p>
                    <p className="mail">contact@mail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-right">
              <form method="post" className="signin-form">
                <div className="input-grids">
                  <input
                    type="text"
                    name="w3lName"
                    id="w3lName"
                    placeholder="Your Name*"
                    className="contact-input"
                    required=""
                  />
                  <input
                    type="email"
                    name="w3lSender"
                    id="w3lSender"
                    placeholder="Your Email*"
                    className="contact-input"
                    required=""
                  />
                  <input
                    type="text"
                    name="w3lSubect"
                    id="w3lSubect"
                    placeholder="Subject*"
                    className="contact-input"
                    required=""
                  />
                  <input
                    type="text"
                    name="w3lWebsite"
                    id="w3lWebsite"
                    placeholder="Website URL*"
                    className="contact-input"
                    required=""
                  />
                </div>
                <div className="form-input">
                  <textarea
                    name="w3lMessage"
                    id="w3lMessage"
                    placeholder="Type your message here*"
                    required=""
                  ></textarea>
                </div>
                <div className="form-buttonhny text-lg-right">
                  <button className="btn btn-style btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="map-iframe mt-5 mb-lg-5 pb-lg-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
          width="100%" height="400" frameborder="0" style={{border: "0px"}} allowfullscreen=""></iframe>
      </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
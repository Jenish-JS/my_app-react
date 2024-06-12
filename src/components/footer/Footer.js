import React from "react";
import '../Style.css';


function Footer() {
    return (
        <>
         <section className="footer-17">
          <div className="footer17_sur py-5">
            <div className="container py-lg-5 py-md-4">
              <div className="footer17-top">
                <div className="footer17-top-left1_sur pr-lg-4">
                  <h6>Contact Us</h6>
                  <p>Lorem ipsum dolor sit amet elit. Velit beatae ullam dolore.</p>
                  <ul>
                    <li><p>+(91) 9900779900</p></li>
                  </ul>
                  <ul className="footers-17_social">
                    <li><p className="twitter"><span className="fa fa-twitter"></span></p></li>
                    <li><p className="facebook"><span className="fa fa-facebook"></span></p></li>
                    <li><p className="linkedin"><span className="fa fa-linkedin"></span></p></li>
                    <li><p className="instagram"><span className="fa fa-instagram"></span></p></li>
                  </ul>
                </div>
                <div className="footer17-top-left2_sur">
                  <h6>Popular Searches</h6>
                  <ul>
                    <li><p>Features</p></li>
                    <li><p>Offices for Rent</p></li>
                    <li><p>Latest News</p></li>
                    <li><p>Offices for Buy</p></li>
                    <li><p>Support</p></li>
                  </ul>
                </div>
                <div className="footer17-top-left3_sur">
                  <h6>Quick links</h6>
                  <ul>
                    <li><p>About Us</p></li>
                    <li><p>Join our team</p></li>
                    <li><p>Contact us</p></li>
                    <li><p>Press release</p></li>
                    <li><p>Careers</p></li>
                  </ul>
                </div>
                <div className="footer17-top-left4_sur">
                  <h6>Subscribe To Our Newsletter</h6>
                  <p>Enter your email and receive the latest news from us.</p>
                  <div className="w3l-footer-subscribe mt-4">
                    <form action="#" className="subscribe" method="post">
                      <input type="email" name="email" placeholder="Your Email Address" required=""/>
                      <button><span className="fa fa-paper-plane-o pr-1"></span></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright text-center">
              <div className="container">
                <p className="copy-footer-29">&copy; 2024 Estates. All rights reserved | Designed by My App</p>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
export default Footer;
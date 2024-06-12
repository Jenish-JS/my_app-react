import React from "react";
import "./Style.css";
import image1 from "./assets/images/1.png";
import image3 from "./assets/images/home/3.png";
import g2 from "./assets/images/home/g2.jpg";
import g3 from "./assets/images/home/g3.jpg";
import g4 from "./assets/images/home/g4.jpg";
import g5 from "./assets/images/home/g5.jpg";
import image9 from "./assets/images/home/9.png";
import g1 from "./assets/images/home/g1.jpg";




function Home(){
    return(
    <>
        <section className="w3l-banner py-5" id="banner">
          <div className="midd-w3 py-lg-5 py-md-4">
            <div className="container py-lg-2">
              <div className="row">
                <div className="col-lg-6 banner-content align-self pr-lg-5">
                  <h5 className="title-subhny mb-2">A Higher Quality of Living</h5>
                  <h3 className="">The ideal space to balance life, work and play.</h3>
                <p className="mt-3">Semper at. Lorem ipsum dolor sit amet elit
                  elit. Non quae, ad esse et.</p>
                  <a href="#btn" className="btn btn-style btn-primary mt-lg-5 mt-4 mr-2">Get Started <span
                      className="fa fa-arrow-right  ml-3"/></a>
                  <a href="#btn" className="btn btn-style btn-outline-dark mt-lg-5 mt-4">Contact Us <span
                      className="fa fa-arrow-right  ml-3"/></a>
                </div>
                <div className="col-lg-6 text-center mt-lg-0 mt-md-5 mt-4">
                  <div className="image-block position-relative">
                    <img src={image1} alt="" className="img-fluid mt-lg-0 mt-4"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    
        <section className="w3l-bottom-grids-6 py-5" id="services">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="title-content text-center">
              <h6 className="title-subhny text-center">Our Services</h6>
              <h3 className="title-w3l mb-sm-5 mb-4 pb-sm-o pb-2 text-center">We provide great services</h3>
            </div>
            <div className="grids-area-hny main-cont-wthree-fea row">
              <div className="col-lg-4 col-md-6 grids-feature">
                <div className="area-box icon-blue">
                  <span className="fa fa-rebel"></span>
                  <h4><p className="title-head">Design</p></h4>
                  <p>Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed et dolor
                    amet.</p>
      
                </div>
              </div>
              <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
                <div className="area-box icon-pink">
                  <span className="fa fa-line-chart"></span>
                  <h4><p className="title-head">Strategy</p></h4>
                  <p>Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed dolor et
                    amet.</p>
      
                </div>
              </div>
              <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
                <div className="area-box icon-yellow">
                  <span className="fa fa-rocket"></span>
                  <h4><p className="title-head">Marketing</p></h4>
                  <p>Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non. Duis sed dolor et
                    amet.</p>
      
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <div className="w3l-agent-block py-5" id="why">
          <div className="container py-lg-4">
            <div className="row align-items-center mt-5">
              <div className="col-lg-6">
                <div className="agent-block-image px-lg-5">
                  <img src={image3} className="img-fluid" alt="this img"/>
                </div>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-5 pl-lg-5">
                <h6 className="title-subhny">Explore</h6>
                <h3 className="title-w3l">
                  Explore
                  by Property Type</h3>
                <p className="my-3"> Vestibulum ante ipsum primis in faucibus orci luctus
                  turpis sodales quis. Integer sit amet mattis quam.Vivamus a ligula quam tesque et libero ut justo ultrices
                  in.</p>
      
                <div className="subscribe-cat">
                  <div className="subscribe-cat-gd">
                    <p className="subscribe-cat-link">Office</p>
                    <p className="mt-2">Lorem ipsum viverra feugiat. Pellen tesque libero justo.</p>
                  </div>
                  <div className="subscribe-cat-gd">
                    <p className="subscribe-cat-link">House</p>
                    <p className="mt-2">Lorem ipsum viverra feugiat. Pellen tesque libero justo.</p>
                  </div>
                  <div className="subscribe-cat-gd">
                    <p className="subscribe-cat-link">Villa</p>
                    <p className="mt-2">Lorem ipsum viverra feugiat. Pellen tesque libero justo.</p>
                  </div>
                  <div className="subscribe-cat-gd">
                    <p className="subscribe-cat-link">Apportment</p>
                    <p className="mt-2">Lorem ipsum viverra feugiat. Pellen tesque libero justo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="fact-section" id="stats">
          <div className="container">
            <div className="justify-content-center row">
              <div className="col-lg-3 col-6 mt-lg-0 mt-4">
                <div className="single-fact">
                  <h3 className="counter-text">3450+</h3>
                  <p className="mb-0">Total Properties</p>
                </div>
              </div>
              <div className="col-lg-3 col-6 mt-lg-0 mt-4">
                <div className="single-fact">
                  <h3 className="counter-text">
                    1700+
                  </h3>
                  <p className="mb-0">Trusted Agencies
      
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-6 mt-lg-0 mt-4">
                <div className="single-fact">
                  <h3 className="counter-text">
                    2200+
                  </h3>
                  <p className="mb-0">Happy Buyers</p>
                </div>
              </div>
              <div className="col-lg-3 col-6 mt-lg-0 mt-4">
                <div className="single-fact">
                  <h3 className="counter-text">
                    3270+
                  </h3>
                  <p className="mb-0">Total Agents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <section className="w3l-agent-block py-5" id="news">
          <div className="container py-lg-5 py-md-5 py-2">
            <div className="row">
              <div className="col-lg-4 news-left">
                <h6 className="title-subhny">Explore</h6>
                <h3 className="title-w3l">
                  Blog Posts</h3>
                <p className="my-3"> Vestibulum ante ipsum primis in faucibus orci luctus
                  turpis sodales quis. Integer sit amet mattis quam.Vivamus a ligula quam tesque et libero ut justo ultrices
                  in.</p>
                <div className="w3l-news-gd mt-5">
                     <p><img src={g2} alt="" className="radius-image img-fluid"/></p>
                  <div className="w3l-news-gd-inf mt-4">
                    <h6 className="date">Dec 30, 2020
      
                    </h6>
                    <h4>
                      <a href="#" className="news-link">What you need to know when choosing balcony</a>
                    </h4>
                    <p className="">Lorem ipsum viverra feugiat. Pellen tesque libero justo.</p>
                  </div>
                </div>
      
              </div>
              <div className="col-lg-8 news-left mt-lg-0 mt-5 pl-lg-5">
                <div className="row ">
                  <div className="col-md-6 news-gd-1 mt-lg-5 pt-lg-5 px-lg-4">
                    <div className="w3l-news-gd mb-5">
                      <p><img src={g3} alt="" className="radius-image img-fluid"/></p>
                      <div className="w3l-news-gd-inf mt-4">
                        <h6 className="date">Dec 31, 2020
      
                        </h6>
                        <h4>
                          <p className="news-link">The ultimate guide to find a flat in your area</p>
                        </h4>
                        <p className="">Lorem ipsum viverra feugiat. Pellen tesque libero justo.</p>
                      </div>
                    </div>
                    <div className="w3l-news-gd mb-5">
                      <img src={g4} alt="" className="radius-image img-fluid"/>
                      <div className="w3l-news-gd-inf mt-4">
                        <h6 className="date">Dec 31, 2020
      
                        </h6>
                        <h4>
                          <p className="news-link">The ultimate guide to find a flat in your area</p>
                        </h4>
                        <p className="">Lorem ipsum viverra feugiat. Pellen tesque libero justo.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 news-gd-1 px-lg-4">
                    <div className="w3l-news-gd mb-5">
                      <p><img src={g5} alt="" className="radius-image img-fluid"/></p>
                      <div className="w3l-news-gd-inf mt-4">
                        <h6 className="date">Dec 31, 2020
      
                        </h6>
                        <h4>
                          <p className="news-link">The ultimate guide to find a flat in your area</p>
                        </h4>
                        <p className="">Lorem ipsum viverra feugiat. Pellen tesque libero justo.</p>
                      </div>
                    </div>
                    <div className="w3l-news-gd mb-5">
                      <p><img src={g1} alt="" className="radius-image img-fluid"/></p>
                      <div className="w3l-news-gd-inf mt-4">
                        <h6 className="date">Dec 31, 2020
      
                        </h6>
                        <h4>
                          <p className="news-link">The ultimate guide to find a flat in your area</p>
                        </h4>
                        <p className="">Lorem ipsum viverra feugiat. Pellen tesque libero justo.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w3l-content-4 py-5" id="features">
          <div className="content-4-main py-lg-5 py-md-4">
            <div className="container">
              <div className="title-content text-center">
                <h3 className="title-subhny"> Why choose us</h3>
                <h3 className="title-w3l">We have the most listings <br/>& constant updates.</h3>
              </div>
              <div className="content-info-in row pt-lg-5">
                <div className="content-left col-lg-4 mt-lg-0 mt-md-5 mt-3">
                  <div className="content-4-main-gd">
                    <div className="row content4-right-grids">
                      <div className="col-sm-3 content4-right-icon">
                        <div className="content4-icon icon-clr1">
                          <span className="fa fa-briefcase"></span>
                        </div>
                      </div>
                      <div className="col-sm-9 content4-right-info pl-4">
                        <h6><p>Buy a new home</p></h6>
                        <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-left col-lg-4 mt-lg-0 mt-md-5 mt-3">
                  <div className="content-4-main-gd">
                    <div className="row content4-right-grids">
                      <div className="col-sm-3 content4-right-icon">
                        <div className="content4-icon icon-clr2">
                          <span className="fa fa-eye"></span>
                        </div>
                      </div>
                      <div className="col-sm-9 content4-right-info pl-4">
                        <h6><p>See a home</p></h6>
                        <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-left col-lg-4 mt-lg-0 mt-md-5mt-3">
                  <div className="content-4-main-gd">
                    <div className="row content4-right-grids">
                      <div className="col-sm-3 content4-right-icon">
                        <div className="content4-icon icon-clr3">
                          <span className="fa fa-renren"></span>
                        </div>
                      </div>
                      <div className="col-sm-9 content4-right-info pl-4">
                        <h6>Rent a home</h6>
                        <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere .</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       
        <div className="w3l-faq-block py-5" id="faq">
          <div className="container py-lg-4">
            <div className="row mt-5">
              <div className="col-lg-6">
                <div className="faq-image">
                  <img src={image9} className="img-fluid" alt=""/>
                </div>
              </div>
              <div className="col-lg-6 mt-lg-0 mt-5 pl-lg-5">
                <h6 className="title-subhny">FaQs</h6>
                <h3 className="title-w3l">
                  Experts with experience </h3>
                <p className="my-3"> Vestibulum ante ipsum primis in faucibus orci luctus
                  turpis sodales quis. Integer sit amet mattis quam.</p>
                <section className="w3l-faq mt-5" id="faq">
                  <div className="faq-page">
                    <ul>
                      <li>
                        <input type="checkbox" checked/>
                        <i></i>
                        <h4>Sed ut perspiciatis unde omnis?</h4>
                        <p>Sit amet consectetur adipisicing elit. Voluptates amet earum velit nobis aliquam
                          laboriosam nihil debitis animi vitae eos nisi laudantium. Tempore reiciendis ipsam
                          culpa, qui
                          voluptates eveniet, incidunt officiis eaque iste minima autem.</p>
                      </li>
                      <li>
                        <input type="checkbox" checked/>
                        <i></i>
                        <h4>At vero eos iusto odio ducimus qui?</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates amet earum velit
                          nobis aliquam
                          laboriosam nihil quasi fuga, ad corrupti libero omnis sapiente
                          non assumenda excepturi aperiam animi vitae eos nisi laudantium. Tempore reiciendis
                          ipsam culpa, qui
                          voluptates eveniet, incidunt officiis eaque iste minima autem.</p>
                      </li>
                      <li>
                        <input type="checkbox" checked/>
                        <i></i>
                        <h4>We denounce with righteous?</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates amet earum velit
                          nobis aliquam
                          laboriosam nihil debitis facere voluptatibus consectetur quae quasi fuga, ad corrupti
                          libero omnis
                          sapiente
                          non assumenda excepturi aperiam iste minima autem.</p>
                      </li>
      
      
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
      
        </div>
       
        <section className="w3l-clients w3l-agency-test" id="testimonials">
          <div className="midd-w3 py-5">
            <div className="container py-lg-5 py-md-3">
              <div id="owl-agency" className="owl-carousel owl-theme py-2 mb-4 text-center">
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <a className="comment-img" href="#url"><img src="assets/images/team1.jpg" className="img-responsive"
                          alt="placeholder image"/></a>
                      <blockquote>
                        <q>OMG! I cannot believe. It's Awesome</q>
                      </blockquote>
                      <p>My new site is so much faster and easier to work with than my old site. They are here to
                        help the customers to get their success. Nemo sit eos, quod minus eius illo labore.
                        Pellen tesque libero ut justo, ultrices in ligula.</p>
                      <div className="text-center mt-4">
                        <div className="people-info align-self">
                          <h3>Johnson william</h3>
                          <p className="indentity text-center">Web Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <a className="comment-img" href="#url"><img src="assets/images/team2.jpg" className="img-responsive"
                          alt="placeholder image"/></a>
                      <blockquote>
                        <q>Simply the best. Better than all the rest.</q>
                      </blockquote>
                      <p>My new site is so much faster and easier to work with than my old site. They are here to
                        help the customers to get their success. Nemo sit eos, quod minus eius illo labore.
                        Pellen tesque libero ut justo, ultrices in ligula.</p>
                      <div className="text-center mt-4">
                        <div className="people-info align-self">
                          <h3>Alexander sakura</h3>
                          <p className="indentity text-center">Digital Marketer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <a className="comment-img" href="#url"><img src="assets/images/team3.jpg" className="img-responsive"
                          alt="placeholder image"/></a>
                      <blockquote>
                        <q>OMG! I cannot believe. It's Awesome</q>
                      </blockquote>
                      <p>My new site is so much faster and easier to work with than my old site. They are here to
                        help the customers to get their success. Nemo sit eos, quod minus eius illo labore.
                        Pellen tesque libero ut justo, ultrices in ligula.</p>
                      <div className="text-center mt-4">
                        <div className="people-info align-self">
                          <h3>John wilson</h3>
                          <p className="indentity text-center">Web Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <div className="testimonial">
                      <a className="comment-img" href="#url"><img src="assets/images/team4.jpg" className="img-responsive"
                          alt="placeholder image"/></a>
                      <blockquote>
                        <q>OMG! I cannot believe. It's Awesome</q>
                      </blockquote>
                      <p>My new site is so much faster and easier to work with than my old site. They are here to
                        help the customers to get their success. Nemo sit eos, quod minus eius illo labore.
                        Pellen tesque libero ut justo, ultrices in ligula.</p>
                      <div className="text-center mt-4">
                        <div className="people-info align-self">
                          <h3>Julia sakura</h3>
                          <p className="indentity text-center">Digital Marketer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        <section className="w3l-project py-5">
          <div className="container py-md-5 py-sm-4 py-2">
            <div className="row">
              <div className="col-lg-8">
                <div className="bottom-info">
                  <div className="header-section">
                    <h3 className="title-w3l two">Become a Real Estate Agent</h3>
                    <p className="mt-3 pr-lg-5">We only work with the best companies around the globe.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 align-self text-lg-right">
                <a href="#get" className="btn btn-style btn-primary mt-lg-0 mt-md-5 mt-4">Join Now <span
                    className="fa fa-arrow-right ml-3"></span></a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Template JavaScript --> 
        <script src="assets/js/jquery-3.3.1.min.js"></script>
      
        <script src="assets/js/theme-change.js"></script>
        {/* <!-- owlcarousel --> 
        <script src="assets/js/owl.carousel.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>*/}
        </>)
}
export default Home;
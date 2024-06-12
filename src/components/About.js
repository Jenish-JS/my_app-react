import React from "react";
import "./Style.css";
import { useParams } from "react-router-dom";
import image4 from "./assets/images/about/4.png";
import team1 from "./assets/images/about/team1.jpg";
import team2 from "./assets/images/about/team2.jpg";
import team3 from "./assets/images/about/team3.jpg";
import team4 from "./assets/images/about/team4.jpg";

function About() {

  let pathParam = useParams()
  console.log("path parameter == ", pathParam);

  return (
    <>
      <div className="w3l-innerblock"></div>
      <section className="w3l-content-4 py-5" id="ab">
        <div className="content-4-main py-lg-5 py-md-4">
          <div className="container">
            <div className="ab-info-in row">
              <div className="ab-min-left col-lg-5">
                <div className="title-content text-left">
                  <h3 className="title-subhny">Our Story</h3>
                  <h3 className="title-w3l pr-lg-5">
                    We believe in design as a powerful force for good.
                  </h3>
                </div>
              </div>
              <div className="ab-min-right col-lg-7 pl-lg-5">
                <p className="my-3">
                  {" "}
                  Vestibulum ante ipsum primis in faucibus orci luctus turpis
                  sodales quis. Integer sit amet mattis quam.Vivamus a ligula
                  quam tesque et libero ut justo ultrices in.Integer sit amet
                  mattis quam.{" "}
                </p>
                <p className="">
                  {" "}
                  Vestibulum ante ipsum primis in faucibus orci luctus turpis
                  sodales quis. Integer sit amet mattis quam.Vivamus a ligula
                  quam tesque et libero ut justo ultrices in.Integer sit amet
                  mattis quam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w3l-agent-block py-5" id="why">
        <div className="container py-lg-4">
          <div className="row align-items-center mt-lg-5">
            <div className="col-lg-6">
              <div className="agent-block-image px-lg-5">
                <img src={image4} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-5 pl-lg-5">
              <h6 className="title-subhny">Leadership</h6>
              <h3 className="title-w3l">Our Team Work</h3>
              <p className="my-3">
                {" "}
                Vestibulum ante ipsum primis in faucibus orci luctus turpis
                sodales quis. Integer sit amet mattis quam.Vivamus a ligula quam
                tesque et libero ut justo ultrices in.
              </p>
              <p className="">
                {" "}
                Vestibulum ante ipsum primis in faucibus orci luctus turpis
                sodales quis. Integer sit amet mattis quam.Vivamus a ligula quam
                tesque et libero ut justo ultrices in.
              </p>
              <p className="btn btn-style btn-primary mt-md-5 mt-4">
                Read More <span className="fa fa-arrow-right ml-3"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="w3l-content-4 py-5" id="features">
        <div className="content-4-main py-lg-5 py-md-4">
          <div className="container">
            <div className="title-content text-center">
              <h3 className="title-subhny"> Why choose us</h3>
              <h3 className="title-w3l">
                We believe in design as a powerful force for good.
              </h3>
            </div>
            <div className="content-info-in row pt-5">
              <div className="content-left col-lg-4 mt-lg-0 mt-md-5mt-3">
                <div className="content-4-main-gd">
                  <div className="row content4-right-grids">
                    <div className="col-sm-3 content4-right-icon">
                      <div className="content4-icon icon-clr1">
                        <span className="fa fa-briefcase"></span>
                      </div>
                    </div>
                    <div className="col-sm-9 content4-right-info pl-4">
                      <h6>
                        <p>Property Management</p>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet,Ea consequuntur illum facere.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-left col-lg-4 mt-lg-0 mt-md-5mt-3">
                <div className="content-4-main-gd">
                  <div className="row content4-right-grids">
                    <div className="col-sm-3 content4-right-icon">
                      <div className="content4-icon icon-clr2">
                        <span className="fa fa-eye"></span>
                      </div>
                    </div>
                    <div className="col-sm-9 content4-right-info pl-4">
                      <h6>
                        <p>Mortgage Service</p>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet,Ea consequuntur illum facere.
                      </p>
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
                      <h6>
                        <p>Consulting Service</p>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet,Ea consequuntur illum facere
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-team">
        <div className="team py-5">
          <div className="container py-md-5 py-3">
            <div className="title-content text-center">
              <h6 className="title-subhny text-center">Leading Team</h6>
              <h3 className="title-w3l mb-sm-5 mb-4 pb-sm-o pb-2 text-center">
                Meet Our Team
              </h3>
            </div>
            <div className="row team-row pt-3 mt-5">
              <div className="col-lg-3 col-sm-6 team-wrap">
                <div className="team-info">
                  <div className="column position-relative img-circle">
                    <p>
                      <img
                        src={team1}
                        alt=""
                        className="img-fluid"
                      />
                    </p>
                  </div>
                  <div className="column-btm">
                    <h3 className="name-pos">
                      <p>Max Stoiber</p>
                    </h3>
                    <p>Chief Executive</p>
                    <div className="social">
                      <p className="facebook">
                        <span className="fa fa-facebook" aria-hidden="true"></span>
                      </p>
                      <p className="twitter">
                        <span className="fa fa-twitter" aria-hidden="true"></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 team-wrap mt-sm-0 pt-sm-0 mt-4 pt-2">
              <div className="team-info">
                <div className="column position-relative img-circle">
                  <p>
                    <img
                      src={team2}
                      alt=""
                      className="img-fluid"
                    />
                  </p>
                </div>
                <div className="column-btm">
                  <h3 className="name-pos">
                    <p>Dhony Abraham</p>
                  </h3>
                  <p>Managing Director</p>
                  <div className="social">
                    <p className="facebook">
                      <span className="fa fa-facebook" aria-hidden="true"></span>
                    </p>
                    <p className="twitter">
                      <span className="fa fa-twitter" aria-hidden="true"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 team-wrap mt-lg-0 pt-lg-0 mt-4 pt-2">
              <div className="team-info">
                <div className="column position-relative img-circle">
                  <p>
                    <img
                      src={team3}
                      alt=""
                      className="img-fluid"
                    />
                  </p>
                </div>
                <div className="column-btm">
                  <h3 className="name-pos">
                    <p>Marko Dugonji</p>
                  </h3>
                  <p>HR Officer</p>
                  <div className="social">
                    <p className="facebook">
                      <span className="fa fa-facebook" aria-hidden="true"></span>
                    </p>
                    <p className="twitter">
                      <span className="fa fa-twitter" aria-hidden="true"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 team-wrap mt-lg-0 pt-lg-0 mt-4 pt-2">
              <div className="team-info">
                <div className="column position-relative img-circle">
                  <p>
                    <img
                      src={team4}
                      alt=""
                      className="img-fluid"
                    />
                  </p>
                </div>
                <div className="column-btm">
                  <h3 className="name-pos">
                    <p>Rhoda Byrd</p>
                  </h3>
                  <p>Worker</p>
                  <div className="social">
                    <p className="facebook">
                      <span className="fa fa-facebook" aria-hidden="true"></span>
                    </p>
                    <p className="twitter">
                      <span className="fa fa-twitter" aria-hidden="true"></span>
                    </p>
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
                  <p className="mt-3 pr-lg-5">
                    We only work with the best companies around the globe.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-self text-lg-right">
              <p
                className="btn btn-style btn-primary mt-lg-0 mt-md-5 mt-4"
              >
                Join Now <span className="fa fa-arrow-right ml-3"></span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
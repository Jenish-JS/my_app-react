import React from "react";
import g5 from "./assets/images/services/g5.jpg";
import g1 from "./assets/images/services/g1.jpg";
import g2 from "./assets/images/services/g2.jpg";
import g3 from "./assets/images/services/g3.jpg";
import g4 from "./assets/images/services/g4.jpg";
import g6 from "./assets/images/services/g6.jpg";
import image2 from "./assets/images/services/2.png";


function Services() {
  return (
    <>
      <div class="w3l-innerblock"></div>

      <section class="w3l-index3" id="about">
        <div class="midd-w3 py-5">
          <div class="container py-lg-5 py-md-3 py-2">
            <h3 class="title-subhny"> Services We Offer</h3>
            <h3 class="title-w3l mx-0 mb-md-5 mb-4">
              We Provide Comprehensive Services
              <br /> To Property Investors.
            </h3>
            <div class="row">
              <div class="col-lg-5 mb-lg-0 mb-md-5 mb-4 align-self pr-lg-5">
                <img
                  src={g4}
                  alt=""
                  class="radius-image img-fluid"
                />
              </div>
              <div class="col-lg-7">
                <div class="row position-relative">
                  <div class="col-md-6 col-7">
                    <img
                      src={g5}
                      alt=""
                      class="radius-image img-fluid"
                    />
                  </div>
                  <div class="col-md-5 col-5 pl-lg-5 pl-0 mt-lg-5">
                    <img
                      src={g6}
                      alt=""
                      class="radius-image img-fluid"
                    />
                  </div>
                </div>
                <p class="mt-md-5 mt-3">
                  Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
                  ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor
                  sit amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor
                  sit amet. Lorem ipsum init dolor sit, amet elit. Dolor ipsum
                  non velit, culpa!
                </p>
                <p class="btn btn-style btn-primary mt-md-5 mt-4">
                  Read More <span class="fa fa-arrow-right ml-3"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="w3l-portfolio-8 py-5">
        <div class="portfolio-main py-lg-5 py-md-4 py-2">
          <div class="container">
            <div class="title-content text-center">
              <h3 class="title-subhny">Services</h3>
              <h3 class="title-w3l">Featured Services</h3>
            </div>
            <div class="row galler-top mx-lg-5 mt-5">
              <div class="col-lg-6 col-md-6">
                <div class="protfolio-item hover14 pr-lg-2">
                  <p
                    data-lightbox="example-set"
                    data-title="Affordable Urban House"
                  >
                    <figure>
                      <img
                        src={g1}
                        alt="product"
                        class="img-fluid radius-image"
                      />
                      <div class="p-4">
                        <p>Services 1</p>
                        <p class="mb-5 img-title">Affordable Urban House</p>
                      </div>
                    </figure>
                  </p>
                </div>
                <div class="protfolio-item hover14 mt-4 pl-lg-2">
                  <p
                    data-lightbox="example-set"
                    data-title="Villa on Hollywood Boulevard"
                  >
                    <figure>
                      <img
                        src={g2}
                        alt="product"
                        class="img-fluid radius-image"
                      />
                      <div class="p-4">
                        <p>Services 2</p>
                        <p class="mb-5 img-title">
                          Villa on Hollywood Boulevard
                        </p>
                      </div>
                    </figure>
                  </p>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 mt-lg-0 mt-4">
                <div class="protfolio-item hover14 pr-lg-2">
                  <p
                    data-lightbox="example-set"
                    data-title="Home in Metric Way"
                  >
                    <figure>
                      <img
                        src={g4}
                        alt="product"
                        class="img-fluid radius-image"
                      />
                      <div class="p-4">
                        <p>Services 3</p>
                        <p class="mb-5 img-title">Home in Metric Way</p>
                      </div>
                    </figure>
                  </p>
                </div>
                <div class="protfolio-item hover14 mt-4 pl-lg-2">
                  <p
                    data-lightbox="example-set"
                    data-title="Luxurious Apartments"
                  >
                    <figure>
                      <img
                        src={g3}
                        alt="product"
                        class="img-fluid radius-image"
                      />
                      <div class="p-4">
                        <p>Services 4</p>
                        <p class="mb-5 img-title">Luxurious Apartments</p>
                      </div>
                    </figure>
                  </p>
                </div>
              </div>
            </div>
            <div class="text-center">
              <p class="btn btn-style btn-primary mt-md-5 mt-4">
                See all works <span class="fa fa-arrow-right ml-3"></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="w3l-content-4 py-5" id="features">
        <div class="content-4-main py-lg-5 py-md-4">
          <div class="container">
            <div class="title-content text-center">
              <h3 class="title-subhny"> Why choose us</h3>
              <h3 class="title-w3l">
                We have the most listings <br />& constant updates.
              </h3>
            </div>
            <div class="content-info-in row pt-5">
              <div class="content-left col-lg-4 mt-lg-0 mt-md-5 mt-3">
                <div class="content-4-main-gd">
                  <div class="row content4-right-grids">
                    <div class="col-sm-3 content4-right-icon">
                      <div class="content4-icon icon-clr1">
                        <span class="fa fa-briefcase"></span>
                      </div>
                    </div>
                    <div class="col-sm-9 content4-right-info pl-4">
                      <h6>Buy a new home</h6>
                      <p>
                        Lorem ipsum dolor sit amet,Ea consequuntur illum facere.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="content-left col-lg-4 mt-lg-0 mt-md-5 mt-3">
                <div class="content-4-main-gd">
                  <div class="row content4-right-grids">
                    <div class="col-sm-3 content4-right-icon">
                      <div class="content4-icon icon-clr2">
                        <span class="fa fa-eye"></span>
                      </div>
                    </div>
                    <div class="col-sm-9 content4-right-info pl-4">
                      <h6>
                        <p>See a home</p>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet,Ea consequuntur illum facere.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="content-left col-lg-4 mt-lg-0 mt-md-5mt-3">
                <div class="content-4-main-gd">
                  <div class="row content4-right-grids">
                    <div class="col-sm-3 content4-right-icon">
                      <div class="content4-icon icon-clr3">
                        <span class="fa fa-renren"></span>
                      </div>
                    </div>
                    <div class="col-sm-9 content4-right-info pl-4">
                      <h6>
                        <p>Rent a home</p>
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

      <div class="w3l-agent-block py-5" id="why">
        <div class="container py-lg-4">
          <div class="row align-items-center mt-5">
            <div class="col-lg-6">
              <div class="agent-block-image px-lg-5">
                <img src={image2} class="img-fluid" alt="" />
              </div>
            </div>
            <div class="col-lg-6 mt-lg-0 mt-5 pl-lg-5">
              <h6 class="title-subhny">What We Offer</h6>
              <h3 class="title-w3l">Explore by Property Type</h3>
              <p class="my-3">
                {" "}
                Vestibulum ante ipsum primis in faucibus orci luctus turpis
                sodales quis. Integer sit amet mattis quam.Vivamus a ligula quam
                tesque et libero ut justo ultrices in.
              </p>

              <div class="subscribe-cat">
                <div class="subscribe-cat-gd">
                  <p class="subscribe-cat-link">Office</p>
                  <p class="mt-2">
                    Lorem ipsum viverra feugiat. Pellen tesque libero justo.
                  </p>
                </div>
                <div class="subscribe-cat-gd">
                  <p class="subscribe-cat-link">House</p>
                  <p class="mt-2">
                    Lorem ipsum viverra feugiat. Pellen tesque libero justo.
                  </p>
                </div>
                <div class="subscribe-cat-gd">
                  <p class="subscribe-cat-link">Villa</p>
                  <p class="mt-2">
                    Lorem ipsum viverra feugiat. Pellen tesque libero justo.
                  </p>
                </div>
                <div class="subscribe-cat-gd">
                  <p class="subscribe-cat-link">Apportment</p>
                  <p class="mt-2">
                    Lorem ipsum viverra feugiat. Pellen tesque libero justo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="w3l-project py-5">
        <div class="container py-md-5 py-sm-4 py-2">
          <div class="row">
            <div class="col-lg-8">
              <div class="bottom-info">
                <div class="header-section">
                  <h3 class="title-w3l two">Become a Real Estate Agent</h3>
                  <p class="mt-3 pr-lg-5">
                    We only work with the best companies around the globe.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 align-self text-lg-right">
              <p class="btn btn-style btn-primary mt-lg-0 mt-md-5 mt-4">
                Join Now <span class="fa fa-arrow-right ml-3"></span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;

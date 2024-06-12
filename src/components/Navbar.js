import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import logo from"./assets/images/Navbar/logo.png";

export default function Navbar(props) {
  return (
    <>
    <div className="header-w3l">
  
    <header id="site-header" className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg stroke">
          <p
           className="navbar-brand pr-lg-5">
            <img src={logo} alt="" className="img-fluid"/>My App
          </p>
          <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-lg-auto">
            <li className="nav-item">
              <p className="nav-link active">
                <NavLink
                  style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "gray" : "red",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                  to={"/signUp"}
                >
                  SignUp
                </NavLink>
                {/* <Link to={"/signUp"} >SignUp</Link> */}
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link active">
                <NavLink
                  style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "gray" : "red",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                  to={"/logIn"}
                >
                  SignIn
                </NavLink>
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link active">
                <NavLink
                  style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "gray" : "red",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                  to={"/home"}
                >
                  Home
                </NavLink>
                {/* <Link to={"/signUp"} >SignUp</Link> */}
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link active">
                <NavLink
                  style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      // fontWeight: isActive ? "bold" : "",
                      color: isActive ? "gray" : "red",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                  to={"/about"}
                >
                  About
                </NavLink>
                {/* <Link to={"/signUp"} >SignUp</Link> */}
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link active">
                <NavLink
                  style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "gray" : "red",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                  to={"/services"}
                >
                  Services
                </NavLink>
                {/* <Link to={"/signUp"} >SignUp</Link> */}
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link active">
                <NavLink
                  style={({ isActive, isPending, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "gray" : "red",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                  to={"/contact"}
                >
                  Contact
                </NavLink>
                {/* <Link to={"/signUp"} >SignUp</Link> */}
              </p>
            </li>
  
              <li className="search-bar ml-lg-4 mt-lg-0 mt-4">
                {/* <!--/search-right--> */}
                <form className="search position-relative">
                  <input type="search" className="search__input" name="search" placeholder="Search here.." required=""/>
                  <span className="fa fa-search search__icon"></span>
                </form>

                {/* <!--//search-right--> */}
              </li>

            </ul>
            <ul className="navbar-nav search-right mt-lg-0 mt-2">
              <li className="mx-3">
                <p className="btn btn-style btn-primary">Enquire Here</p>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    </header>
    {/* <!-- //header --> */}
  </div>
  </>
  );
}

Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string };
Navbar.defaultProps = {
  title: " My App ",
  about: " about text here",
};

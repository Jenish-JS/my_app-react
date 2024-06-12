import React from "react";
import './Signup.css';
import { useNavigate } from "react-router-dom";

function Signup(props){

    let navigator = useNavigate()

    return(
    <>
    <section className="w3l-workinghny-form">
   
    <div className="workinghny-form-grid">
        <div className="wrapper">
            <div className="logo">
                <h1><a className="brand-logo">Sign Up MyApp</a></h1>
                  
            </div>
            <div className="workinghny-block-grid">
                <div className="form-right-inf">
                    <h2>Sign Up </h2>
                    {/* <div className="social-media">
                        <a href="#facebook" className="fb"><span className="fab fa-facebook" aria-hidden="true"></span> Login with facebok</a>
                        <a href="#twitter" className="tw"><span className="fab fa-twitter" aria-hidden="true"></span> Login with twitter</a>
                    </div> */}
                    <div className="login-form-content">
                        {/* <h2>Sign Up with email</h2> */}
                        <form action="#" className="signin-form" method="#">
                            <div className="one-frm">
                                <input type="email" name="Email" placeholder="Email" required="" autoFocus/>
                            </div>
                            <div className="one-frm">
                                <input type="password" name="Password" placeholder="Password" required=""/>
                            </div>
                            <button className="btn btn-style mt-3" onClick={(e) => {
                                e.preventDefault()

                                navigator("/Login")
                            }}>Sign In </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="copyright text-center">
        <div className="wrapper">
            <p className="copy-footer-29">&copy; 2024 My App Sugn Up form. All rights reserved | Design by <a
                    href="#">My App</a></p>
        </div>
    </div>
</section>
    </>
)
}
export default Signup;
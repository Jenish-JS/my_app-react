import React from 'react'
import "./Error.css";
import error from "./assets/images/error/error.jpg";
import {Link } from 'react-router-dom';

function Error() {
  return (
    <>
     <section class="forms-24">
		<div class="form-25-mian">
			<div class="wrapper">
			<div>
			<h4 class="page-head">Travel Error Page</h4>
			</div>
				<div class="form-inner-cont">
					<div class="forms-25-info">
						<div class="column form-bottom-img">
								<img src={error} alt="img" class="img-responsive"/>
						</div>
						<div class="column">
							<h3>404</h3>
							<p>Page Not Found</p>
							<p>The page you requested could not found</p>	<Link to={"/Home"} class="actionbg">Back To Home</Link>
						</div>
					</div>
				</div>
				<div class="copyright">&copy; 2024 <span class="web-text">Travel Error Page</span>. All rights reserved | Design by	<p class="company">My App</p>
				</div>
			</div>
		</div>
	</section> 
    </>
  )
}
export default Error;
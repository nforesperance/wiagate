import React, { Component } from 'react';
import AuthParent from './Auth_Parent'

class Services extends Component {
    render() {
   
      return( 
      <>
        <AuthParent></AuthParent>

		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
			<ol class="carousel-indicators">
			  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
			  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner" role="listbox" style={{width:"100%", height: "500px"}}>
			  <div class="carousel-item active">
				  <img src="assets/user/images/Socials.jpg" style={{ height: "700px"}} class="d-block w-100" alt="..."/>
			  </div>
			  <div class="carousel-item">
				  <img src="assets/user/images/students.jpg" style={{ height: "800px"}} class="d-block w-100" alt="..."/>
			  </div>
			  <div class="carousel-item">
				  <img src="assets/user/images/social.jpg" style={{ height: "700px"}} class="d-block w-100" alt="..."/>
			  </div>
			</div>
			<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
			  <span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			  <span class="carousel-control-next-icon" aria-hidden="true"></span>
			  <span class="sr-only">Next</span>
			</a>
		  </div>

			<div id="wrapper">
				
					<div id="main">
						<div class="inner">
							<header>
								<h2>Choisir un service<br /></h2>
							</header>
							<section class="tiles">
							    <article class="style1">
									<span class="image">
										<img src="assets/user/images/pic01.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Service1</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>																				
									</a>
								</article>
								<article class="style2">
									<span class="image">
										<img src="assets/user/images/pic02.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Service2</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style3">
									<span class="image">
										<img src="assets/user/images/pic03.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Service3</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style4">
									<span class="image">
										<img src="assets/user/images/pic04.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>service4</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style5">
									<span class="image">
										<img src="assets/user/images/pic05.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>service5</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style6">
									<span class="image">
										<img src="assets/user/images/pic06.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>service6</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style2">
									<span class="image">
										<img src="assets/user/images/pic07.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>service7</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style3">
									<span class="image">
										<img src="images/pic08.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>service8</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style1">
									<span class="image">
										<img src="assets/user/images/pic09.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>service9</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style5">
									<span class="image">
										<img src="assets/user/images/pic10.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Service10</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style6">
									<span class="image">
										<img src="assets/user/images/pic11.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>service11</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
								<article class="style4">
									<span class="image">
										<img src="assets/user/images/pic12.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>service12</h2>
										<div class="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article>
							</section>
						</div>
					</div>

				
			</div>
      </>
      
        ) ;
    }
}
export default Services;
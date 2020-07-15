import React, {Component} from 'react';
import AuthParent from './Auth_Parent'

class  Forfaits extends React.Component{
    render(){
        return(
            <>
            <div className="is-preload">          
                <AuthParent></AuthParent>

                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox"style={{ width:"100% ", height: "500px"}} >
                        <div className="carousel-item active">
                            <img src="assets/user/images/ForfaitsLanding.gif"  class="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/user/images/Forfaits.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="assets/user/images/social.jpg" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div id="wrapper">

                        <div id="main">
                            <div className="inner">
                                <header>
                                    <h2>Choisir un forfait<br /></h2>
                                </header>
                                <section className="tiles">

                                    <article className="style5">
                                        <span className="image">
                                            <img src="assets/user/images/pic05.jpg" alt="" />
                                        </span>
                                        <a href="generic.html">
                                            <h2>forfait1</h2>
                                            <div className="content">
                                                <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                                            </div>
                                        </a>
                                    </article>
                                    <article className="style6">
                                        <span className="image">
                                            <img src="assets/user/images/pic06.jpg" alt="" />
                                        </span>
                                        <a href="generic.html">
                                            <h2>forfait2</h2>
                                            <div className="content">
                                                <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                                            </div>
                                        </a>
                                    </article>
                                    <article className="style2">
                                        <span className="image">
                                            <img src="assets/user/images/pic07.jpg" alt="" />
                                        </span>
                                        <a href="generic.html">
                                            <h2>forfait3</h2>
                                            <div className="content">
                                                <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                                            </div>
                                        </a>
                                    </article>
                                    <article className="style3">
                                        <span className="image">
                                            <img src="assets/user/images/pic08.jpg" alt="" />
                                        </span>
                                        <a href="generic.html">
                                            <h2>forfait4</h2>
                                            <div className="content">
                                                <p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
                                            </div>
                                        </a>
                                    </article>
                                    
                                </section>
                            </div>
                        </div>

                    
                    </div>
                </div>            
                
            </>
        )
    }
}
export default Forfaits;
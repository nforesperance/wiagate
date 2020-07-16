import React, {Component} from 'react';
import AuthParent from './Auth_Parent'

class  Forfaits extends React.Component{
    render(){
        return(
            <>
            <div className="is-preload">          
                <AuthParent></AuthParent>

                <div className="landindForfaits">
                    <img src="assets/user/images/ForfaitsLanding.gif" style={{height : "600px"}}   class="d-block w-100" alt="..."/>
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
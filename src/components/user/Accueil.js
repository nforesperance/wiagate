import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import AuthParent from './Auth_Parent';
import host from './../../config'

class  Accueil extends React.Component{
    

    state={
        username: '',
        pass: '',
        test: false,
        redirect: '/Auth_Parent'
    }
    handleChangeU= event => {
        this.setState({username: event.target.value});
    }
    handleChangeP= event => {
        this.setState({pass: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post(`http://`+host+`/api/user/login/`, {username: this.state.username,
        password: this.state.pass})
        .then(res => {
            this.setState({test: true})   

        }).catch(error =>{
            console.log("there was an error")
        })
    }
    
    render(){
        if (this.state.test) {
            return <Redirect to={this.state.redirect} />
        }
          

        return(
        <> 

        <AuthParent></AuthParent>

        <div className="backgroundAccueil">
                <div className="limiter">
                    <font face="Times New Roman" style={{ fontSize:"500%" , color:"rgb(253, 253, 253)", marginLeft:"1%" , marginTop: "1%" }} > WIAGATE</font>
                </div>
                <div className="conteneurAccueil" style={{opacity: "0.95"}}>
                    <div className= "accueilItemLeft" style= {{alignContent: "center"}}>
                        <div className="conteneurLeft" >
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner" role="listbox"style={{ width:"100% ", height: "590px"}} >
                                    <div className="carousel-item active">
                                        <img src="assets/user/images/social.jpg" class="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/user/images/Socials.jpg" className="d-block w-100" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src="assets/user/images/students.jpg" className="d-block w-100" alt="..."/>
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
                        </div>
                    </div>
                    <div className= "accueilItemRight" >
                        <div className="container-login100"  >			
                            <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33" style={{opacity: "0.97"}}>          
                                <form onSubmit={this.handleSubmit} className="login100-form validate-form flex-sb flex-w">          
                                    <span className="login100-form-title p-b-53">
                                        Login page
                                    </span>

                                    <div className="p-t-31 p-b-9">
                                        <span className="txt1">
                                            Username
                                        </span>
                                    </div>
                                    <div className="wrap-input100 validate-input" data-validate = "Username is required">
                                        <input className="input100" type="text" name="username" onChange={this.handleChangeU} />
                                        <span className="focus-input100"></span>
                                    </div>
                                    
                                    <div className="p-t-13 p-b-9">
                                        <span className="txt1">
                                            Password
                                        </span>

                                        <a href="/null" className="txt2 bo1 m-l-5">
                                            Forgot?
                                        </a>
                                    </div>
                                    <div className="wrap-input100 validate-input" data-validate = "Password is required">
                                        <input className="input100" type="password" name="pass" onChange={this.handleChangeP}/>
                                        <span className="focus-input100"></span>
                                    </div>
                                    <div className="container-login100-form-btn m-t-17">
                                        <button className="login100-form-btn" type="submit">
                                            Sign In
                                        </button>
                                    </div>
                                    <div className="w-full text-center p-t-55">
                                        <span className="txt2">
                                            Not a member?
                                        </span>

                                        <a href="/SignIn" className="txt2 bo1">
                                            Sign Up now
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/*  */}
        </div>

        </>
		
        )
        }
    }
    export default Accueil;
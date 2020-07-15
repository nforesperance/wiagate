import React, { Component } from 'react';
import axios from 'axios';

class SignIn extends Component {
    state={
        username: '',
        pass: '',
        test: false,
    }
    handleChangeU= event => {
        this.setState({username: event.target.value});
    }
    handleChangeP= event => {
        this.setState({pass: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        // const user = {
        //     username: this.state.username,
        //     password: this.state.pass
            
        // };

        axios.post(`http://192.168.43.161:8000/api/user/login/`, {username: this.state.username,
        password: this.state.pass})
        .then(res => {
            this.setState({test: true})   

        }).catch(error =>{
            console.log("there was an error")
        })
    }

    render() {
   
      return( 
        <>
        <div className="backgroundSignIn">
        <div className="limiter">
			<div>
					<font face="Times New Roman" style={{ fontSize: "500%" , color:"rgb(253, 253, 253)", marginLeft:"1%" , marginTop: "1%" }}> WIAGATE</font>
			</div>
            <div className="container-login100" >
                <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                    <form className="login100-form validate-form flex-sb flex-w">
                        <a href="/Accueil"> <img src="assets/user/images/icons/leftArrow.png" alt="back left arrow" style={{textAlign: "left"}}/> </a> 
                        <span className="login100-form-title p-b-53">
                            Register Page
                        </span>
                        
                        <div className="p-t-31 p-b-9">
                            <span className="txt1">
                                Name
                            </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate = "Username is required">
                            <input className="input100" type="text" name="username" onChange={this.handleChange} />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="p-t-31 p-b-9">
                            <span className="txt1">
                                Username
                            </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate = "Username is required">
                            <input className="input100" type="text" name="username" onChange={this.handleChange}/>
                            <span className="focus-input100"></span>
                        </div>
                        
                        <div className="p-t-13 p-b-9">
                            <span className="txt1">
                                Password
                            </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate = "Password is required">
                            <input className="input100" type="password" name="pass" onChange={this.handleChange}/>
                            <span className="focus-input100"></span>
                        </div>

                        <div className="p-t-13 p-b-9">
                            <span className="txt1">
                                Confirm Password
                            </span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate = "Password is required">
                            <input className="input100" type="password" name="pass" onChange={this.handleChange} />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="container-login100-form-btn m-t-17">
                            <button className="login100-form-btn" type="submit" onChange={this.handleChange}>
                                Save
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
	    </div>
        </div>
            
        </>
      
      ) ;
  }
}
export default SignIn;
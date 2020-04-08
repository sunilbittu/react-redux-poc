import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import GoogleLogin from "react-google-login";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
class GoogleSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      authError: false,
      isLoading: false
    };
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/locationidentify" />;
    }
  };
  render() {
    const responseGoogle = response => {
      console.log(response);
      if (response !== undefined && response.googleId > 0) {
        localStorage.setItem("token", response.tokenId);
        this.setState({ redirect: true, isLoading: false });
        localStorage.setItem("isLoggedIn", true);
      }
    };
    return (
      <section>
        {this.renderRedirect()}
        

<GoogleLogin
    clientId="166179037804-jbkujf15339pguh7c7oucl6vramugeo9.apps.googleusercontent.com"
    render={renderProps => (
      <Button block className="btn-lg" onClick={renderProps.onClick} variant="outline-secondary">Connect with  <Image src="svg/Google.svg" />
      </Button>
      
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  /> 
      </section>
    );
  }
}
export default GoogleSignIn;

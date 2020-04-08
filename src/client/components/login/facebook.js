import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

class FacebookSignIn extends Component {
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
    const responseFacebook = response => {
      if (response !== undefined && response.id > 0) {
        localStorage.setItem("token", response.tokenId);
        this.setState({ redirect: true, isLoading: false });
        localStorage.setItem("isLoggedIn", true);
      }
    };
    return (
      <section>
        {this.renderRedirect()}
        <FacebookLogin
          appId="188053382414879"
          fields="name,email,picture"
          callback={responseFacebook}
          render={renderProps => ( 
            <Button block className="btn-lg" onClick={renderProps.onClick}  variant="outline-secondary">Connect with <Image src="svg/Facebook.svg" /></Button>
          )}
        />
      </section>
    );
  }
}

export default FacebookSignIn;

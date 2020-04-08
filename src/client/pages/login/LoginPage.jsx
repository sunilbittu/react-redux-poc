import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
// import { withTranslation } from 'react-i18next';
import { Link, Redirect } from "react-router-dom";
import FacebookSignIn from "../../components/login/facebook";
import GoogleSignIn from "../../components/login/google";
import { connect } from 'react-redux';
import { loginUserAction } from '../../../actions/authenticationActions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      roleName: "",
      deviceToken: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
      showUserName: false,
      showPassword: false,
      resoureceNotFound: false,
      redirect: false,
      authError: false,
      isLoading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  loginUser = (event) => {
    event.preventDefault();
    const data = {
      email: this.state.email,
            roleName: "customer",
            deviceToken: this.state.deviceToken,
            password:this.state.password,
            deviceId:"1223",
            OSVersion:"asdff"
    };

    this.props.dispatch(loginUserAction(data));
  }

  /* async loginUser(event) {

    try {
        event.preventDefault();
        this.setState({ loading: true });

        const obj = {
            email: this.state.email,
            roleName: "customer",
            deviceToken: this.state.deviceToken,
            password:this.state.password,
            deviceId:"1223",
            OSVersion:"asdff"
        };
        this.props.dispatch(loginUserAction(obj));

        const retriveLoginUserResponse = await retriveLoginUser(obj);
        const {
            status,
            data
        } = retriveLoginUserResponse || {};
        if (status === 200) {
            console.log("success::::::::::::::" + JSON.stringify(data))
            this.props.history.push('/accessdenied');
        } else {
            console.log("failed::::::::::::::")
            this.props.history.push('/accessdenied');
        }
    } catch (err) {
        console.log('' + err);
    }
}; */

  render() {
    console.log(`props`, JSON.stringify(this.props))
 //   const { t } = this.props;
    let isSuccess;
    if (this.props.login.response) {
      console.log(this.props.login.response)
      isSuccess = this.props.login.response.success;
      if(isSuccess) {
        this.props.history.push('/locationIdentify');
      }
    }
    return (
      <Container className="loginPage" fluid="sm">
        <Row className="headerPrimary">
          <Col xs={2}><Link className="d-block small" to={"/"}>
            <Image src="svg/BackArrow.svg" />
          </Link></Col>
          <Col xs={8} className="text-center">{'Sign In'}</Col>
          <Col xs={2}></Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Figure>
              <Figure.Image
                alt="Skype"
                src="svg/PrimarylogoWhite.svg"
              />
            </Figure>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={this.loginUser}>
              <Form.Group>

                <Form.Control type="email" className={
                  (this.state.authError ? "is-invalid" : "")
                }
                  id="inputEmail"
                  name="email"
                  onChange={this.handleChange}
                  placeholder="Email"
                  required />
                  <Form.Label>Email</Form.Label>
              </Form.Group>

              <Form.Group>
                <Form.Control type="password"
                  className={
                    (this.state.authError ? "is-invalid" : "")
                  }
                  id="inputPassword"
                  name="password"
                  onChange={this.handleChange}
                  placeholder="Password"
                  required />
                  <Form.Label>Password</Form.Label>
              </Form.Group>

              <Row>
                <Col className="text-right"><Link className="d-inline-block small mb-3" to={"/changePassword"}>
                  Forgot Password?
          </Link></Col>
              </Row>
              <Row>
                <Col className="text-right"><Link className="d-inline-block small mb-3" to={"/signup"}>
                  Signup?
          </Link></Col>
              </Row>
              <Button
                className="btn btn-primary btn-block btn-lg mb-4"
                type="submit"
                disabled={this.state.isLoading ? true : false}
              >
                {'Sign In'}
                {isSuccess ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                    <span></span>
                  )}
              </Button>

            </Form>

            <GoogleSignIn />
            <br />
            <FacebookSignIn /></Col>
        </Row>
      </Container>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {login: state.login}
}
/* const mapStateToProps = (state) => ({
  login: state.login
}) */
export default connect(mapStateToProps)(LoginPage);

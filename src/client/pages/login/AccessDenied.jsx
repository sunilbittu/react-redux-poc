
import Footer from "../common/Footer";
import Header from "../common/Header";
import React, { Component } from "react";

class AccessDenied extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="denied cont-Box">
          Successfully Login...
        </section>
        <Footer />
      </>
    );
  }
}

export default AccessDenied;

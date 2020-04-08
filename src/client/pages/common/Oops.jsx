import React, { Component } from 'react'
import Icon from 'Components/Icon.js';

class Oops extends Component {

    render() {
        return (
            <div className="main-Container pagenotfound">
               <p> <Icon color="#F4675F" size={40} icon="warning" />
                   <strong className="secondary-cr d-b mt-10">Opps, Something went wrong.</strong>
                 Please try again.</p>
            </div>
        )
    }
}

export default Oops
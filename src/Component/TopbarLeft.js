import React, { Component } from 'react'

export default class TopbarLeft extends Component {
    render() {
        return (
            <div className="col-lg-4 col-md-4 col-sm-4 topbar-left">
            <a href="https://www.google.com"><i className="fa fa-phone"
            ></i> +1800 000-688</a>
    
            <a href="mailto:contact@alanc.com"><i className="fa fa-envelope-o"
                    ></i>contact@alanc.com</a>
        </div>
        )
    }
}

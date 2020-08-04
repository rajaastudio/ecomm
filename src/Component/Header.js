import React, { Component } from 'react'
import Topbar from "./Topbar";
import Navigation from "./Navigation";
export default class Header extends Component {
    render() {
        return (
            <div>
                 <Topbar />
                 <Navigation />
            </div>
        )
    }
}

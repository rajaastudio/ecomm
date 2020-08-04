import React, { Component } from 'react'
import TopbarLeft from "./TopbarLeft";
import TopbarCenter from "./TopbarCenter";
import TopbarRight from "./TopbarRight";
export default class Topbar extends Component {
    render() {
        return (
            <div className="topbar">
            <div className="container-fluid">
                <div className="row">
                  <TopbarLeft />
                  <TopbarCenter />
                   <TopbarRight />
                </div>
            </div>
        </div>
        )
    }
}

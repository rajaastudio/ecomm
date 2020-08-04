import React, { Component } from 'react'

export default class TopbarRight extends Component {
    render() {
        return (
            <div className="col-lg-2 col-md-2 col-sm-2 topbar-right">
            <select>
                <option>ENGLISH</option>
                <option>HINDI</option>
            </select>
            <select>
                <option>USD</option>
                <option>EURO</option>
            </select>
        </div>
        )
    }
}

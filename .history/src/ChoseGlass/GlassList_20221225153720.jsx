import React, { Component } from 'react'

export default class GlassList extends Component {
    render() {
        return (
            <div className="row">
                {this.renderListGlass()}
            </div>
        )
    }
}

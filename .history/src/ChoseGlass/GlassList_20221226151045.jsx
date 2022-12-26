import React, { Component } from 'react'

export default class GlassList extends Component {


    renderListGlass = () => {
        return this.props.listGlass.map(glass => {
            return (
                <div className="col-2 glassItem" key={glass.id} >
                    <img onClick={() => {
                        this.props.getGlass(glass)
                    }} style={{ width: '100%' }} src={glass.url} alt="" />
                </div>
            )
        })
    }

    render() {
        return (
            <div className="row py-3 glassList">
                {this.renderListGlass()}
            </div>
        )
    }
}

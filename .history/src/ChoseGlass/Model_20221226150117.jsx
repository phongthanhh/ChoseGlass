import React, { Component } from 'react'

export default class Model extends Component {

    render() {
        console.log(this.props)
        return (
            <div className="col-12 ">
                {/* <div className="model m-auto" style={{ backgroundImage: `url(img/model.jpg)` }}>
                    <div className="model__overlay">
                        <div className="model__overlay__img">
                            <img alt="Glass" src={this.props.url} style={{ width: 220, opacity: 0.8 }} />
                        </div>
                        <div className="model__overlay__content">
                            <p className="glass-name">{this.props.name}</p>
                            <span className="glass-price">{this.props.price}$</span>
                            <p className="glass-desc">{this.props.desc}</p>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Model extends Component {
    render() {
        return (
            <div className="col-12 ">
                <div className="model m-auto" style={{ backgroundImage: `url(img/model.jpg)` }}>
                    <div className="model__overlay">
                        <div className="model__overlay__img">
                            <img alt="Glass" src={this.state.url} style={{ width: 220, opacity: 0.8 }} />
                        </div>
                        <div className="model__overlay__content">
                            <p className="glass-name">{this.state.name}</p>
                            <span className="glass-price">{this.state.price}$</span>
                            <p className="glass-desc">{this.state.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

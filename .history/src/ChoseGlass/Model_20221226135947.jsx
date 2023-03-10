import React, { Component } from 'react'

export default class Model extends Component {
    render() {
        return (
            <div className="col-md-6 p-0">
                <div className="model" style={{ backgroundImage: `url(${model})` }}>
                    <div className="model__overlay">
                        <div className="model__overlay__img">
                            <img alt="Glass" src={url} style={{ width: 330, opacity: 0.8 }} />
                        </div>
                        <div className="model__overlay__content">
                            <p className="glass-name">{name}</p>
                            <span className="glass-price">{price}$</span>
                            <p className="glass-desc">{desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

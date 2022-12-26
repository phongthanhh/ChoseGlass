import React, { Component } from 'react';
import GlassList from './GlassList';

class BTGlass extends Component {

    listGlass = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./img/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }

    render() {
        return (
            <div>
                <section className='main'>
                    <h2 className='alert alert-info py-3'>TRY GLASSES APP ONLINE</h2>
                    <div className="item container">
                        <div className="row py-5">
                            <div className="col-12 m-auto">
                                <div className="model" style={{ backgroundImage: `url(img/model.jpg)` }}>
                                    <div className="model__overlay">
                                        <div className="model__overlay__img">
                                            <img alt="Glass" src='./img/v1.png' style={{ width: 220, opacity: 0.8 }} />
                                        </div>
                                        <div className="model__overlay__content">
                                            <p className="glass-name">GUCCI G8850U</p>
                                            <span className="glass-price">30$</span>
                                            <p className="glass-desc">Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <GlassList listGlass={this.listGlass} />
                    </div>
                </section>
            </div>
        );
    }
}

export default BTGlass;

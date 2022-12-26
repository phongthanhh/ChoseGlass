import React, { Component } from "react";
import "./style.css";
import Glasses from "../Glasses";
import Model from "../Modell";

class ChooseGlasses extends Component {
  dataGlasses = [
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
    selectedGlasses: this.dataGlasses[0],
  };
  getGlasses = (glasses) => {
    this.setState({
      selectedGlasses: glasses,
    });
  };
  render() {
    return (
      <div>
        <section className="main">
          <div className="container mt-4">
            <h2 className="display-3 text-center mb-3">
              Try glasses app online
            </h2>
            <hr />
            <div className="row mt-3">
              <Glasses data={this.dataGlasses} getGlasses={this.getGlasses} />
              <Model selectedGlasses={this.state.selectedGlasses} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ChooseGlasses;

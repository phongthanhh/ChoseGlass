import React, { Component } from "react";
import "./style.css";

class ChooseGlasses extes Component {
  dataGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: ,
      desc: "Mắc lắm đừng mua",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: ,
      desc: "Cute lắm đó",
    },

    {
      id: 3,
      price: 99,
      name: "DIOR D6700HQ",
      url: ,
      desc: "Cái này cũng mắc lắm",
    },

    {
      id: 4,
      price: 200,
      name: "DIOR D6005U",
      url: ,
      desc: "Cái này vip lắm",
    },

    {
      id: 5,
      price: 300,
      name: "PRADA P8750",
      url: ,
      desc: "New product in 2020",
    },

    {
      id: 6,
      price: 70,
      name: "PRADA P9700",
      url: ,
      desc: "cùi bắp",
    },

    {
      id: 7,
      price: 750,
      name: "FENDI F8750",
      url: ,
      desc: "cùi bắp 2",
    },

    {
      id: 8,
      price: 350,
      name: "FENDI F8500",
      url: ,
      desc: "cùi bắp 3",
    },

    {
      id: 9,
      price: 99,
      name: "FENDI F4300",
      url: ,
      desc: "cùi bắp 4",
    },
  ];
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

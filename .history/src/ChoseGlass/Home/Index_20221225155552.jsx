import React, { Component } from "react";
import "./style.css";
import Glasses from "../Glasses";
import Model from "../Modell";

class ChooseGlasses extends Component {
  dataGlasses = import G1 from "../../assets/img/v1.png";
import G2 from "../../assets/img/v2.png";
import G3 from "../../assets/img/v3.png";
import G4 from "../../assets/img/v4.png";
import G5 from "../../assets/img/v5.png";
import G6 from "../../assets/img/v6.png";
import G7 from "../../assets/img/v7.png";
import G8 from "../../assets/img/v8.png";
import G9 from "../../assets/img/v9.png";
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

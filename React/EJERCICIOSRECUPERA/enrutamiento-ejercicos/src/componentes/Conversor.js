import React from "react";
import { Button } from "reactstrap";
class Conversor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      euros: 0,
      factorCambio: 1.1,
    };
  }
  subir() {
    let aux = this.state.euros + 1;
    this.setState({ euros: aux });
  }
  bajar() {
    let aux = this.state.euros - 1;
    this.setState({ euros: aux });
  }

  render() {
    return (
      <div className="App">
        <br />
        <br />
        <h1>Conversor</h1>
        {this.state.euros} equivalen a{" "}
        {this.state.euros * this.state.factorCambio}
        <br />
        <br />
        
        <Button onClick={() => this.bajar()} color="danger" outline>
          Disminuir
        </Button>
        <Button onClick={() => this.subir()} color="info" outline>
          Aumentar
        </Button>
      </div>
    );
  }
}

export default Conversor;

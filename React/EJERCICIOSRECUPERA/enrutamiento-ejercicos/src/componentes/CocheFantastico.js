import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { Component } from "react";
class CocheFantastico extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colores: [
        "secondary",
        "secondary",
        "secondary",
        "secondary",
        "secondary",
      ],
      n: 0,
      dir: "R",
    };
  }
  kit() {
    console.log("tahtiroriiiiiii");
    let newn = this.state.n;
    let newdir = this.state.dir;
    let c = this.state.colores;
    if (newdir === "R") {
      newn++;
      if (newn == this.state.colores.length) {
        newn--;
        newdir = "L";
      }
    } else {
      newn--;
      if (newn < 0) {
        newn++;
        newdir = "R";
      }
    }
    c = this.state.colores.map((e, i) => (i === newn ? "danger" : "secondary"));
    this.setState({ n: newn, dir: newdir, colores: c });
  }
  componentDidMount() {
    setInterval(() => this.kit(), 500);
  }
  render() {
    //setInterval(()=>this.kit(),1000)
    return (
      <div className="coche">
        <h3 className="fantastico">Donde vamos Michael</h3>
        <header className="fanta">
          <Botoncillo col={this.state.colores[0]} />{" "}
          <Botoncillo col={this.state.colores[1]} />{" "}
          <Botoncillo col={this.state.colores[2]} />{" "}
          <Botoncillo col={this.state.colores[3]} />{" "}
          <Botoncillo col={this.state.colores[4]} />
        </header>
      </div>
    );
  }
}
function Botoncillo(props) {
  return (
    <Button color={props.col} onClick={() => props.click()}>
      {props.valorNum}{" "}
    </Button>
  );
}

export default CocheFantastico;

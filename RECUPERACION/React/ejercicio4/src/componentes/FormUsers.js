import { Component } from "react";

class FormUsers extends Component {
  render() {
    return (
      <form onSubmit={this.props.anadir}>
        <input type="text" placeholder="Nombre" name="nombre"></input>
        <input type="text" placeholder="Email" name="email"></input>
        <input type="submit" value="guardar"></input>
      </form>
    );
  }
}
export default FormUsers;

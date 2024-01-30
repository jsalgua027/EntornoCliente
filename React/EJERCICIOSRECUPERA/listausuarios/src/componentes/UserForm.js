import React, {Component} from "react";
class UserForm extends Component {
   
    render() { 
        return (
            <form onSubmit={this.props.onAddUser}> {/** onAddUser es como llamo al props del renderizado de la App del padre */}
            <input type="text" placeholder="Nombre" name="name" />
            <input type="email" placeholder="Email" name="email" />
            <input type="submit" value="Guardar" />
            </form>
            );
    }
}
 
export default UserForm;
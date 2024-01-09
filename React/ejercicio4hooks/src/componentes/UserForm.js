import React, { Component,useState } from "react";



 const UserForm = () => {
  return (
    <form >
    <input type="text" placeholder="Nombre" name="name" />
    <input type="email" placeholder="Email" name="email" />
    <input type="submit" value="Guardar" />
  </form>
  )
}
export default UserForm;
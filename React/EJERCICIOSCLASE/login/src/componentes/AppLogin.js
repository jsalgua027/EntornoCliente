import React, { useState } from 'react';
import { Row, Col, Card, CardTitle, CardText, Form, FormGroup, Button, Label, Input } from 'reactstrap';

function AppLogin(props) {
    //hooks para recibir los datos que introducimos en los imputs
    const [password,setPassword]=useState('');
    const [telefono,setTelefono]=useState('');
    const [info,setInfo]=useState('');
    const handleChange =(event)=>{
        setInfo('')
        if(event.target.name==="telefono"){
            setTelefono(event.target.value)
        }
        if(event.target.name==="password"){
            setPassword(event.target.value)
        }
        console.log(event.target.value);
      

    }
    //controlo los campos vacios cuando le doy al boton de loggin
    const clicar=()=>{
        if(password==''||telefono==''){
            setInfo("Rellena todos los datos")
        }else if(password!='admin'||telefono!='1234'){
            setInfo("LOS DATOS INTRODUCIDOS NO SON CORRECTOS")
        }else{
            props.userLogin(telefono,password)

        }
    }
    return (
        <Row>
            <Col sm="4"></Col>
            <Col sm="4">
                <Card body>
                    <CardTitle className="text-center" tag="h4">
                        Log in
                    </CardTitle>
                    <Form inline>
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Label className="me-sm-2" for="exampleEmail">User id</Label>
                            <Input
                                id="Telefono"
                                name="telefono"
                                placeholder="type your user id"
                                type="email"
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Label className="me-sm-2" for="examplePassword">Password</Label>
                            <Input
                                id="Password"
                                name="password"
                                type="password"
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <br />
                        <Button color="primary" size="lg" block  onClick={clicar}>
                            <strong>Log in</strong>
                        </Button>
                        <CardText className="text-danger">{info}</CardText>

                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default AppLogin;



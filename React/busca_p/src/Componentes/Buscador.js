import React, { useState } from 'react';
import { Row, Col, Card, CardTitle, CardText, Form, FormGroup, Button, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pueblos } from './Pueblos';


function Buscador() {
    const [receptorInput, setReceptorInput]=useState('')
    const handleReceporInput=(event)=>{
        const inputmp= event.target;
        setReceptorInput(inputmp.value.toUpperCase())
        console.log(inputmp)
    };

    function filtro(){
        if(receptorInput!=""){
          return(Pueblos.filter(f=>f.nombre.search(receptorInput)>=0).map(p=><option>{p.nombre}</option>))  
        }



    }


    return (
        <Row>
            <Col sm="4"></Col>
            <Col sm="4">
                <Card body>
                    <CardTitle className="text-center" tag="h4">
                        BUSCADOR
                    </CardTitle>
                    <Form inline>
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                          
                            <Input
                                id="Telefono"
                                name="telefono"
                                placeholder="Indica el nombre del pueblo"
                                type="email"
                                onChange={handleReceporInput}
                            />
                        </FormGroup>
                      {filtro()}
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default Buscador ; 
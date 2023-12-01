import React from "react";
import { Button } from "reactstrap";

const Jugar = (props) => {
  return (
    <div>
      <Button color="primary" onClick={()=>props.jugar()}outline>
        JUGAR
      </Button>
    </div>
  );
};
export default Jugar;

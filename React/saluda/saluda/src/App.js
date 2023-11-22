
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Spinner } from 'reactstrap';
import { ReactDOM } from 'react';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        {<h1>Traductor</h1>}
        <Spinner color="primary">
          Loading...
        </Spinner>
        <Button color="success">
          Ingles
        </Button>
        {' '}
        <Button color="primary">
          Aleman
        </Button>
        {' '}
        <Button >
          sueco
        </Button>
        {' '}

        <Button color="danger">
          Español
        </Button>
        {' '}

      </div>
    );

  }

}

export default App;

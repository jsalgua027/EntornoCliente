import React, {useState} from 'react';
import './App.css';
import pueblosData from './Componentes/PueblosData';

const AppLogin = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    props.onSearch(term);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ingrese un nombre de pueblo"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (term) => {
    const results = pueblosData.pueblos.filter(
      (pueblo) => pueblo.nombre.toLowerCase().startsWith(term.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="App">
      <h1>Buscar Pueblo</h1>
      <AppLogin onSearch={handleSearch} />
      <h2>Resultados:</h2>
      <ul>
        {searchResults.map((pueblo) => (
          <li key={pueblo.id}>{pueblo.nombre} - {pueblo.provincia}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

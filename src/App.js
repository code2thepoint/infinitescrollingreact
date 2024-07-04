import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from "./components/List"
import Nav from "./components/Nav";



function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);  

  const baseUrl = "https://pokeapi.co/api/v2/pokemon";

 

  return (
  
    <div>
      <div className="App">
        <Nav />
        <List pokemon={pokemon}  />
        <div className="infinite-scroll-trigger" style={{ marginTop: '20px', textAlign: 'center' }}>
          {loading && <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
}

export default App;

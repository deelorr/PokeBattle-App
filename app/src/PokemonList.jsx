import { useState, useEffect } from 'react';
import axios from 'axios';

function PokemonList () {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => {
                setPokemon(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            })
    }, []);

    return (
        <div>
            <h1>Pokemon List</h1>
            <ul>
                {pokemon.map(p => (
                    <li key={p.name}>{p.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default PokemonList;

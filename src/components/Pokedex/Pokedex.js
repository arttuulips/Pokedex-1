import "./Pokedex.css";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(24);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=120&offset=0."
        ); // Fetching data from PokeAPI
        const data = await response.json();
        const pokemons = data.results; // Extracting the array of Pokemon ojects 
        setPokemonList(pokemons); // Setting the lists state with fetheced data
        setLoading(false);
      } catch (err) {
        console.log(err); // error handling
      }
    };
    fetchPokemons();// Call the function when compoonent mounts
  }, []); // run only when the component is first displayed on the screen

  // Function to get the current list of pokemons
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemonList.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  // Handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <h2>Loading...</h2>; //Loading message while loading
  }

  return (
    <section className="home" id="home">
      <div className="pokedex">
         <h1 className="pokedex-header">Choose your Pokemon!</h1> 
        <div className="pokemon-container">
          {currentPokemons.map((pokemon, index) => (
            <Link
              className="pokemon-card"
              key={index}
              to={`/pokemon/${pokemon.name}`}
              style={{ textDecoration: "none" }}
            >
              <div className="pokemon-img-container">
                <img
                  className="pokemon-img"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                    pokemon.url.split("/")[6]
                  }.png`}
                  title={pokemon.name}
                  alt=""
                />
              </div>

              <p className="pokemon-name">{pokemon.name}</p>
              
            </Link>
          ))}
        </div>

        <div className="pagination">
          <Pagination
            pokemonsPerPage={pokemonsPerPage}
            totalPokemons={pokemonList.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </section>
  );
};

export default Pokedex;

import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React
import { useParams } from "react-router-dom"; // Importing useParams hook from React Router DOM
import { Link } from "react-router-dom"; // Importing Link component from React Router DOM
import "./PokemonCard.css"; // Importing custom CSS for PokemonCard component

// PokemonCard component definition
const PokemonCard = () => {
  const { name } = useParams(); // Getting the "name" parameter from the URL
  const [pokemonData, setPokemonData] = useState(null); // State to store Pokemon data

    // useEffect hook to fetch specific Pokemon data when the "name" parameter changes
  useEffect(() => {
    const fetchSpecificPokemonData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        ); // Fetching data from PokeAPI based on the provided Pokemon name
        const data = await response.json();
        setPokemonData(data);
      } catch (err) {
        console.error("Error fetching Pokemon data:", err); 
      }
    };

    fetchSpecificPokemonData(); // Calling the fetch function
  }, [name]); // Dependency array ensures effect runs when "name" changes

  // Conditional rendering while data is being fetched
  if (!pokemonData) {
    return <h2>Loading...</h2>;
  }

  // Function to generate Pokemon card JSX
  const generateCard = () => {
    if (!pokemonData) return null; // Returning null if data is not available yet


    const { stats, sprites, name: pokeName} = pokemonData; // Destructuring required data from Pokemon object
    const hp = stats[0].base_stat;
    const imgSrc = sprites.other.dream_world.front_default; // Pokemon image source
    const statAttack = stats[1].base_stat; // Attack stat
    const statDefense = stats[2].base_stat; // Defense stat
    const statSpeed = stats[5].base_stat; // Speed stat
  
// JSX for the main card containing Pokemon information
    return (
      <div
        id="main-card">
        <p className="hp">
          <span>HP </span>
          {hp}
        </p>
        <img className="pokemon-image" src={imgSrc} alt={pokeName} />
        <h2 className="poke-name">{pokeName}</h2>
        <div className="stats">
          <div>
            <h3>{statAttack}</h3>
            <p>Attack</p>
          </div>
          <div>
            <h3>{statDefense}</h3>
            <p>Defense</p>
          </div>
          <div>
            <h3>{statSpeed}</h3>
            <p>Speed</p>
          </div>
        </div>
      </div>
    );
  };

// Returning JSX for the PokemonCard component
  return (
    <div className="card-container">
      <div className="pk-card">{generateCard()}</div>
      <Link to="/" className="back-button">Choose another Pokemon</Link>
    </div>
  );
};

export default PokemonCard;

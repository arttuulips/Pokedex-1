import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Pokedex from "./components/Pokedex/Pokedex";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import "./App.css";
import PokemonCard from "./components/PokemonCard/PokemonCard";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <div className="routes"> {/* Div for rendering routes*/}
          <Routes>
             <Route path="/" element={<Pokedex />} /> {/* Route for rendering pokedex component */}
            <Route path="/pokemon/:name" element={<PokemonCard />} /> {/* Route for rendering pokemoncard component */}
            <Route path="/about" element={<About />} />{/* Route for rendering about component*/}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;


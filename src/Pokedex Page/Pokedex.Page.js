import React, { Component } from 'react';
import './Pokedex.Page.css';

function Pokedex() {
  return (
      <main className="App">
        <header>
          <nav>
            <ul id="nav">
            <li><a href="https://amanda-mccabe.github.io/PokeGo_Helper/src/App/">Home</a></li>
            <li><a href="https://amanda-mccabe.github.io/PokeGo_Helper/src/PokedexPage/">Pokedex</a></li>
            <li><a href="https://amanda-mccabe.github.io/PokeGo_Helper/src/SearchStrings/">Search Strings</a></li>
            <li><a href="https://amanda-mccabe.github.io/PokeGo_Helper/src/RaidTeams">Raid Teams</a></li>
            <li><a href="https://amanda-mccabe.github.io/PokeGo_Helper/src/LogOut/">Log Out</a></li>
            </ul>
          </nav>
        </header>
        <section className="Pokedex">
          <h3>image here depending on which team you chose.</h3>
          <h1>Welcome to the Pokedex!</h1>
          <p>It's time to add in your pokedex information.</p>
          <p>All you have to do is click on the options for each pokemon so we can add what you have currently.</p>
          <h2>This is where I will create a form with the Gen 1 pokemon options.</h2>
        </section>
      </main> 

      <footer>
        &copy;AMANDA MCCABE GOTTA CATCH'EM ALL!!!!
      </footer>
  );
}

export default App;
import React, { Component } from "react";
import "./App.css";
 

function App() {
  return (
    <main className="App">
      <header>
        <nav>
          <ul id="nav">
            <li><a href="https://amanda-mccabe.github.io/PokeGo_Helper/src/App/">Home</a></li>
            <li><a href="https://amanda-mccabe.github.io/PokeGo_Helper/src/PokedexPage/">Pokedex</a></li>
            <li><a href="https://amanda-mccabe.github.io/PokeGo_Helper/src/SearchStrings/">Search Strings</a></li>
            <li> <a href="https://amanda-mccabe.github.io/PokeGo_Helper/src/RaidTeams">Raid Teams</a></li>
            <li><a href="https://amanda-mccabe.github.io/PokeGo_Helper/src/LogOut/">Log Out</a></li>
          </ul>
        </nav>
      </header>
      <section id="welcome">
        <h3>Image here depending on which team you chose.</h3>
        <h1>Welcome Home</h1>
        <p>This is your PokeGo Helper!</p>
        <p>Here you will see a list of things you have done recently!</p>
      </section>

      <footer>&copy;AMANDA MCCABE GOTTA CATCH'EM ALL!!!!</footer>
    </main>
  );
}

export default App;

import React from "react";
import ContactSearch from "./components/ContactSearch"; // Ensure the path is correct
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Choose a contact</h1>
      </header>
      <main>
        <ContactSearch />
      </main>
    </div>
  );
};

export default App;

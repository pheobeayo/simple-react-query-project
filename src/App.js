import React from "react";
import { useQuery } from "react-query";
import "./App.css";
import axios from "axios";

// const response = await axios("http://swapi.dev/api/planets/");

// This is a typical component with an Asynchronus data fetch
// We are using Axios here, but can use standard js fetch command.
function App() {
  const { isLoading, error, data } = useQuery("swapiAPI", async () => {
    const { data } = await axios("https://swapi.dev/api/planets/");
    return data;
  });

  if (isLoading) {
    return <div style={{ textAlign: "center" }}>Loading ...</div>;
  }

  if (error) {
    return <div>Something went wrong ...</div>;
  }

  return (
    <div className="App">
      <h1>Starwars Planets</h1>

      <div>
        {JSON.stringify(data) !== "{}" &&
          data.results.map((planet, index) => <p key={index}>{planet.name}</p>)}
      </div>
    </div>
  );
}
export default App;

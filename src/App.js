import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  // fetch data from https:localhost:5000/data using useEffect hook
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const [data, setData] = useState([]);
  console.log(data);
  return (
    <div className="App">
      <section className="cards">
        {data.map((card) => (
          <Card
            key={card.name}
            name={card.place_name}
            attractions={card.attractions.length}
            description={card.description}
            img={card.attractions[0].url}
          />
        ))}
      </section>
    </div>
  );
}

export default App;

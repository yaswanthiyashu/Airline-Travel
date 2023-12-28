import React, { useEffect, useState } from "react";
import Card from "./Card"
// import flightData from "../../pages/flight.json";
// import FlightList from "./FlightList";

const Home2 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getCards();
  }, [posts]);

  async function getCards() {
    let res = await fetch("https://freetestapi.com/api/v1/airlines");

    let cardlist = await res.json();
    setPosts(cardlist);

    console.log(cardlist);
  }

  // if (posts.length == 0) {
  //   return(
  //     <h1>Fetch data</h1>
  //   )
  // }

  //   const flights = flightData.flights;
  //   const cheapestFlight = flightData.cheapest_flight;
  //   const bestFlight = flightData.best_flight;
  //   const quickestFlight = flightData.quickest_flight;

  return posts.map((p) => <Card {...p} key={p.id}></Card>);

  //  <FlightList
  //       flights={flights}
  //        cheapest={cheapestFlight}
  //        best={bestFlight}
  //       quickest={quickestFlight}/>
};

export default Home2;

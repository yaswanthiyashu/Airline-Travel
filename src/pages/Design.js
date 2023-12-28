import axios from "axios";
import Home2 from "../components/Container/Home2";
import MainHeader from "../components/Header/MainHeader";
import SideBar from "../components/sidebar/SideBar";
import { useEffect, useState } from "react";
import SidePannel from "../components/Container/SidePannel";
import flightData from "./flight.json";
import FlightList from "../components/Container/FlightList";

const Design = () => {
  const flights = flightData.flights;
  const cheapestFlight = flightData.cheapest_flight;
  const bestFlight = flightData.best_flight;
  const quickestFlight = flightData.quickest_flight;

  const [coutrieslist, setCountriesList] = useState(null);
  const countries = coutrieslist?.data;
  const data = countries?.map((item) => item.name);

  const [show, setShow] = useState(false);
  console.log(show);

  useEffect(() => {
    const apiUrl = "https://countriesnow.space/api/v0.1/countries/positions";

    axios
      .get(apiUrl)
      .then((response) => {
        setCountriesList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="text-left w-full text-sm text-gray-200 font-segoe-ui">
      <div className="">
        <MainHeader data={data} setShow={setShow} />
      </div>
      {show && (
        <p
          className="font-semibold relative left-8"
          onClick={() => setShow(false)}
        >
          CloseX
        </p>
      )}

      <div className="flex justify-around mr-20">
        {/* <SelectCountry data={data} /> */}

        <div className="hidden sm:block">
          <SidePannel />
          <div>
            <SideBar />
          </div>
        </div>
        {false && (
          <div className="absolute z-40">
            <div className="sm:hidden block relative right-4">
              <div className="relative bottom-24 right-2">
                <SideBar />
              </div>
              <div className="relative right-28 ">
                <SidePannel />
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-col relative sm:left-0 left-24 justify-center">
          <div className="grid sm:grid-cols-2 gap-3 flex justify-center">
            <Home2 />
          </div>
          <div className="sm:ml-0 ml-24">
            <FlightList
              flights={flights}
              cheapest={cheapestFlight}
              best={bestFlight}
              quickest={quickestFlight}
            />
          </div>
        </div>
        {/* <div></div> */}
      </div>
      <div className="hidden sm:block">
        <SideBar />
      </div>
    </div>
  );
};

export default Design;

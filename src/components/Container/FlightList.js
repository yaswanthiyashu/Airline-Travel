import React, { useEffect, useState } from "react";

const FlightList = ({ flights, cheapest, best, quickest }) => {
  const [filteredFlights, setFilteredFlights] = useState(flights);
  const [activeFilter, setActiveFilter] = useState(null);

  const handleFilter = (filterType) => {
    let filteredList = [];

    switch (filterType) {
      case "cheapest":
        filteredList = cheapest;
        break;
      case "best":
        filteredList = best;
        break;
      case "quickest":
        filteredList = quickest;
        break;
      default:
        filteredList = flights;
    }

    setFilteredFlights(filteredList);
    setActiveFilter(filterType);
  };

  const handleBest = () => {
    handleFilter("best");
  };

  useEffect(() => {
    handleBest();
  }, []);

  return (
    <div className="sm:mt-4 mt-24">
      <div className="flex shadow-md  justify-center space-x-12 px-4 h-24 items-center mt-4 border-gainsboro border-[1px] rounded-lg bg-whitesmoke-300 border-2 divide-x">
        <div className="sm:mt-2">
          <div
            className={`  font-bold px-4 rounded mr-2 text-black cursor-pointer`}
            onClick={() => handleFilter("cheapest")}
          >
            Cheapest
          </div>
          <p className="relative bottom-2">
            127,591{"\u20B9"} <strong>-</strong> 46h 32m{" "}
          </p>
          <div
            className={`${
              activeFilter === "cheapest" ? "w-24 h-1 bg-blue-500" : ""
            } `}
          ></div>
        </div>
        <div>
          <div
            className={`  font-bold py-2 px-4 rounded mr-2 text-black cursor-pointer`}
            onClick={handleBest}
          >
            Best
          </div>
          <p className="relative bottom-3">
            127,591{"\u20B9"} <strong>-</strong> 46h 32m{" "}
          </p>
          <div
            className={`${
              activeFilter === "best" ? "w-24 h-1 bg-blue-500 " : ""
            } `}
          >
            {""}
          </div>
        </div>
        <div>
          <div
            className={`  font-bold py-2 px-4 rounded mr-2 text-black cursor-pointer`}
            onClick={() => handleFilter("quickest")}
          >
            Quickest
          </div>
          <p className="relative bottom-3">
            127,591{"\u20B9"} <strong>-</strong> 46h 32m{" "}
          </p>
          <div
            className={`${
              activeFilter === "quickest" ? "w-24 h-1 bg-blue-500" : ""
            } `}
          >
            {""}
          </div>
        </div>
      </div>

      <div className="mt-8">
        {filteredFlights.map((flight) => (
          <div className="flex justify-between">
            <div
              key={flight.flight_id}
              className="border sm:w-[420px] w-[350px] p-4 mb-4 flex border-solid border-1 border-[#808080] rounded-md shadow-md justify-between"
            >
              {/* <h2 className="text-xl font-bold">{flight.airline}</h2> */}

              <div className="flex">
                <div className="">
                  <img src="assests/Wings.png" width={25} height={25} />
                </div>
                <div className="relative bottom-3">
                  <p className="font-bold">
                    Departure: {flight.departure_time} - Arrival:{" "}
                    {flight.arrival_time}
                  </p>
                  <p>
                    Start Destination: {flight.start_destination} - End
                    Destination: {flight.end_destination}
                  </p>
                </div>
              </div>
              <div>
                <p className="font-bold w-16">{flight.total_journey}</p>
              </div>
            </div>
            <div className="w-32 h-[110px] border border-solid border-1 border-[#808080] rounded-md mr-12">
              <div className="relative bottom-2">
                <p className="pl-2">
                  {" "}
                  Total Fare: <strong>${flight.fare}</strong>
                </p>
                <p className="relative bottom-3 px-2 font-semibold">
                  Economy EaseMyTrip
                </p>
              </div>
              <div className="font-bold rounded-md bg-[#FFD600] text-center w-24 py-2 relative bottom-7 left-4">
                View Deal
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightList;

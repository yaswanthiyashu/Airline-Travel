import React, { useState } from "react";

function MainHeader({ data, setShow }) {
  const [login, setLogin] = useState(false);

  const handleClickSinUp = () => {
    setLogin(true);
  };

  const handleShow = () => {
    setShow(true);
  };
  return (
    <div className="sm:w-full w-[590px] sm:h-20 h-48  bg-gold  box-border h-20 text-sm-3 border-b-[1px] border-solid border-gainsboro">
      <div className="flex justify-between">
        <div className="flex ">
          <div className="hidden sm:block ">
            <img src="assests\threeBar.png" width={100} height={80} />
          </div>
          <div onClick={handleShow} className="sm:hidden block">
            <img src="assests\threeBar.png" width={100} height={80} />
          </div>
          <div className="mt-4 hidden sm:block ">
            <img src="assests/cheapFlight.png" width="80%" height={50} />
          </div>
          <div className="mt-4 sm:hidden block absolute right-24 top-3">
            <img src="assests/cheapFlight.png" width={200} height={30} />
          </div>
        </div>
        <div className="sm:flex space-x-3 border-1px  border-black mt-2 relative right-6 ml-8">
          <p className="border-gainsboro w-24 relative sm:top-0 top-12 right-10 border-[1px] rounded-lg bg-whitesmoke-300 box-border border-solid border-black-100 h-8 px-4 flex items-center">
            return
          </p>
          <div>
            <p className="border-gainsboro border-[1px] relative sm:left-0 left-24 rounded-lg bg-whitesmoke-300 box-border border-solid border-black-100 h-8 px-4 flex items-center">
              <p className="border-gainsboro border-[1px] rounded-lg bg-whitesmoke-300 box-border border-solid border-black-100 h-8 px-4 flex items-center">
                <div className="flex space-x-2">
                  <div className="flex">
                    <div className="mt-3 mr-1">
                      <select className="w-28">
                        <option>Start Destination</option>
                        {data?.map((li) => (
                          <option>{li}</option>
                        ))}
                      </select>
                    </div>
                    <p className=" relative top-0.5   w-2 flex justify-center h-2 items-center   ">
                      x
                    </p>
                  </div>
                  <div className="mt-2">
                    <img src="assests/swap.png" width={25} height={25} />
                  </div>
                  <div className="flex">
                    <div className="mt-3">
                      <select className="w-28">
                        <option>End Destination</option>
                        {data?.map((li) => (
                          <option>{li}</option>
                        ))}
                      </select>
                    </div>
                    <p className="  relative top-0.5 left-1  w-2 flex justify-center h-2 items-center  ">
                      x
                    </p>
                  </div>
                </div>
              </p>
            </p>
          </div>
          <p className="border-gainsboro border-1 w-48 relative sm:right-0 right-16 rounded-lg bg-whitesmoke-300 box-border border-solid border-black-100 h-8 px-4 flex items-center">
            <span className="whitespace-nowrap mr-4">sat 23/12</span>
            <span className="text-xl">&lt;</span>
            <span className="mx-2">&gt;</span>
            <span>24/12</span>
          </p>

          <div className="relative bottom-0 bottom-14 sm:left-0 left-36 inline-block mt-3">
            <select className="border-gainsboro border-[1px] rounded-lg bg-whitesmoke-300 box-border border-solid border-black-100 h-8 px-4 flex items-center">
              {[1, 2, 3, 4, 5, 6, 7].map((value) => (
                <option key={value} value={value}>
                  {value} adult{value !== 1 ? "s" : ""}, Economy
                </option>
              ))}
            </select>
          </div>
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center mt-3 relative sm:bottom-0 sm:left-0 left-[340px] bottom-24">
            <img src="assests/Img.png" width={25} height={25} />
          </div>
        </div>
        <div
          className=" mr-2 relative right-4 cursor-pointer flex justify-between mt-1.5 "
          onClick={handleClickSinUp}
        >
          {/* <img src="assests/singUp.png" width={124} height={50}/> */}
          <img src="assests/signup.png" className="w-5 h-6 mt-4 mr-2" />
          <h3 className="text-bold">Signup</h3>
        </div>

        {/* Login Model */}
        {login && (
          <div className="absolute top-[10%] left-[12%] z-20 w-[80%] rounded-md">
            <div className="flex justify-center bg-white z-20  shadow-xl rounded-md">
              <div className=" rounded w-72 h-96 rounded-md">
                <p
                  className="relative left-[500px] font-bold text-[#FF0020] cursor-pointer"
                  onClick={() => setLogin(false)}
                >
                  X
                </p>
                <h2 className="text-2xl font-semibold mb-6">Login</h2>
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="username"
                      className="block text-gray-600 text-sm font-medium mb-2"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-gray-600 text-sm font-medium mb-2"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#FFD600] font-semibold flex justify-center ml-4 py-2 px-4 rounded cursor-pointer"
                    onClick={() => setLogin(false)}
                  >
                    Log In
                  </button>
                  <div className="flex justify-between">
                    <p className="hover:text-blue-500 cursor-pointer">
                      New User
                    </p>
                    <p className="hover:text-blue-500 cursor-pointer">
                      Forget password ?
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainHeader;

import React, {useState, useEffect} from 'react';




function SidePannel(props) {
  // const [isHidden, setIsHidden] = useState(true);
  

  // useEffect(() => {
  //   const handleResize = () => {
  //     // Check the current width of the viewport
  //     const windowWidth = window.innerWidth;

  //     // Update the state to hide the component on smaller screens
  //     setIsHidden(windowWidth <= 900); // Adjust the threshold as needed
      
  //   };

  //   // Initial check
  //   handleResize();

  //   // Add a resize event listener
  //   window.addEventListener('resize', handleResize);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // if (isHidden) {
  //   return null;
  // }
  
  
    return (
      <>
       
        <div className='hidden'>
          <img src='assests/threeBar.png' className='ml-3 w-20'/>
        </div>
    
      
        <div>
             <div className="bg-white p-1 rounded-md shadow-md mt-4 ml-10 px-4">
                <h3 className="text-lg font-bold">Our advice</h3>
                <p className="text-gray-600">We're still gathering data for<br /> this route</p>
                <div className="border-b border-gray-300 mb-2"></div>
                <hr className='border-b border-gray-400' />
                <div>
                  <h3 className="text-lg font-bold">Track prices</h3>
                </div>
              </div>
                <p className='font-bold ml-10'>224 of <span>279 flights</span></p>
                <hr className='border-b border-gray-400 w-[197px] mr-3' />
                <div>
                  <h3 className='font-bold ml-10'>Stops</h3>
                  <div className='flex justify-between'>
                    <ul className='list-none'>
                      <li>
                        <input type="checkbox" />
                        <label className='ml-2'>Direct</label>
                      </li>
                      <li className='mt-2'>
                        <input type="checkbox" />
                        <label className='ml-2'>1 stop</label>
                      </li>
                      <li className='mt-2'>
                        <input type="checkbox" />
                        <label className='ml-2'>2+ stops</label>
                      </li>
                    </ul>
                    
                      <div className=' mt-6'>
                        <p>134,012{"\u20B9"}</p>
                        <p>127,591{"\u20B9"}</p>
                      </div>   
                
                  </div>
                </div>
                <hr className='border-b border-gray-400 w-[197px] mr-3' />
                <div className='flex justify-evenly mr-9 '>
                  <h3 className='font-bold'>Fare assistant</h3>
                  <img src="assests\info.png" className='w-5 h-5 mt-5 '/>
                  {/* <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg> */}
                </div>
                <div className='flex justify-evenly -mt-4 '>
                <img src="assests\download.png" className='w-5 h-5 mt-5 '/>
                  {/* <svg class="w-5 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                  </svg> */}
                  <h3 className='font-bold mr-6 mb-6'>payment method</h3>
                </div>  
                <select className='w-40 border-b shadow-md ml-10'>
                    <option value="option1">3 Options</option>
                    <option value="option2">2 Options</option>
                    <option value="option3">1 Option</option>
                </select>
        </div>
      
        </>
    );
}

export default SidePannel;
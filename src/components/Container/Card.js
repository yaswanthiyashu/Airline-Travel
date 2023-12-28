import React from 'react'

const Product = ({name, country, destinations = [], fleet_size, website}) => {
    const firstDestination = destinations.length > 0 ? destinations[0] : null
  return (
    
    <div className="flex flex-col   shadow-md justify-center space-x-12 px-4 mt-4 border-gainsboro border-[1px] rounded-lg bg-whitesmoke-300 border-2 ">
        
            <div className='ml-12'>
                <h4>Name : {name}</h4>
            </div>
            <div className='-mt-7'>
                <h4>Country : {country}</h4>
            </div>
            <div className="flex items-center -mt-7">
                <h4 className="mr-2">Destination :</h4>
                {firstDestination && <h4>{firstDestination.name}</h4>}
            </div>

            <div className='-mt-7'>
                <h4>Fleet Size : {fleet_size}</h4>
            </div>
            <div className='-mt-7'>
                <h4>Website :  <a href={website} target="_blank" rel="noopener noreferrer">{website}</a></h4>
            </div>
    </div>

  )
}

export default Product;
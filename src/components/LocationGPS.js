import React from 'react'
import { useEffect } from 'react'

const LocationGPS = ({}) => {

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }

          
  }, [])

  function showPosition(position) {
    document.querySelector("#location").textContent = "Your coordinates are : Latitude: " + position.coords.latitude + 
    " Longitude: " + position.coords.longitude;
  }



  return (
      <div id="location">
        <p  className='textClassic' > Your coordinates are unknown </p>
    </div>
  )
}

export default LocationGPS
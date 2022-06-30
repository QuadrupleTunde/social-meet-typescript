import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function LocationsList() {
    const [locationData, setLocationData] = useState([])
    
    // GET ALL LOCATIONS
    useEffect(() => {
        fetch(`https://social-meet-up-api.herokuapp.com/locations`)
            .then(res => res.json())
            .then(data => {
                setLocationData(data)
            })
    }, []);

    // Input data into DOM elements
    let locationsList = locationData.map((item:any, index) => {
        // Set link route
        let showLocation = `/locations/${item.location_name}`

        return<li key={index} className="location-card">
            <Link to={showLocation} className="text-2xl px-2 py-2 hover:bg-yellow-300 font-bold border-2 border-stone-600 rounded-lg bg-yellow-200">{item.location_name}</Link>
            <p>{item.location_state}, {item.location_city}</p>
            <p>{item.location_address}</p>
            <img src={item.location_img_url} alt={item.location_name}/>
            </li>
    })

    return(
        <ul className="locations-list">
            {locationsList}
        </ul>
    )
}
import React, { useState, useEffect } from 'react';

export default function EventLocationDropDown() {
    const [locationData, setLocationData] = useState([])

    // GET ALL LOCATIONS
    useEffect(() => {
        fetch('https://social-meet-up-api.herokuapp.com/locations')
            .then(res => res.json())
            .then(data => {
                setLocationData(data)
            })
    }, []);

    let locationList = locationData.map((item:any, index) => {
        return<option value={item.location_id} key={index}>{item.location_name}</option>
    })
    
    return(
        <datalist id="event-location-list">
            {locationList}
        </datalist>
    )
}
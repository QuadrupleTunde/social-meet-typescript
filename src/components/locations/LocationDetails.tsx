import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function LocationDetails() {
    const { name } = useParams();
    const [locationData, setLocationData] = useState<any>([]);
    const [locationEvents, setLocationEvents] = useState<any>([]);

    // GET SPECIFIED LOCATION
    useEffect(() => {
        fetch(`https://social-meet-up-api.herokuapp.com/locations/${name}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // console.log(data.events)
                setLocationData(data)
                if(data.events) {
                    setLocationEvents(data.events)
                } else {
                    setLocationEvents({
                        message: "no events have been held at this location."
                    })
                }
            })
    }, []);

    // Function to map location events and return HTML elements
    function LocationEvents () {
        if (locationEvents.length > 0) {
            let locationEventsList = locationEvents.map((item:any, index:any) => {
                return<div key={index}>
                <p>{item.event_name}</p>
                <p>{item.event_start_date}</p>
                <p>{item.event_end_date}</p>
                <p>{item.event_description}</p>
                </div>
            })
            return(
                locationEventsList
            )
        } else {
            return(
                <p>No events for this location yet.</p>
            )
        }
    }
    
    return(
        <div>
            <header>
                <h1>{name}</h1>
            </header>
            <div className="content-container">
                <div className="location-details">
                    <img
                    src={locationData.location_img_url}
                    alt={`image of ${name}`}
                    />
                    <p>{locationData.location_city}, {locationData.location_state}</p>
                    <p>{locationData.location_address}</p>
                </div>
                <div className="location-events">
                    <h2>Events held at this location: </h2>
                    {LocationEvents()}
                </div>
            </div>
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function EventList() {
    const [eventData, setEventData] = useState([])
    
    // GET ALL LOCATIONS
    useEffect(() => {
        fetch(`https://social-meet-up-api.herokuapp.com/events`)
            .then(res => res.json())
            .then(data => {
                setEventData(data)
                console.log(data)
            })
    }, []);

    // Input data into DOM elements
    let eventsList = eventData.map((item: any, index) => {
        

        return<li key={index} className="w-9/12 ml-auto mr-auto bg-blue-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mt-3">
            <Link to={`${item.event_name}`}
            className="text-amber-200 text-2xl hover:underline underline-offset-1"
            >
                {item.event_name}
            </Link>
            <p>Start Date: {item.event_start_date}</p>
            <p>End Date: {item.event_end_date}</p>
            <p>"{item.event_description}"</p>       
            </li>
    })

    return(
        <ul className="events-list">
            {eventsList}
        </ul>
    )
}
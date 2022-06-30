import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"

export default function EventDetails() {
    const { name } = useParams();
    const [eventData, setEventData] = useState<any>([]);
    const [hobbyData, setHobbyData] = useState<any>([]);
    const [locationData, setLocationData] = useState<any>([]);

    // GET SPECIFIED EVENT
    useEffect(() => {
        fetch(`https://social-meet-up-api.herokuapp.com/events/${name}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setEventData(data)
                setLocationData(data.locations)
                setHobbyData(data.hobbies)
            })
    }, []);
    
    const deleteOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const deleteData = () => {
        fetch(`https://social-meet-up-api.herokuapp.com/events/${name}`, deleteOptions)
            .then(res => res.json())        
    }

    return (
        <div>
            <header className="my-3">
                <h1 className="text-3xl font-bold text-stone-900">{name}</h1>
            </header>
            <div className="content-container flex border-4 border-blue-200 rounded-lg">
                <div className="location-details px-5 flex-auto w-64">
                    <h3 className="py-3 text-2xl text-center">Event Location</h3>
                    <img
                    className="rounded-lg border-2 border-stone-600"
                    src={`${locationData.location_img_url}`}
                    alt={`picture of ${locationData.location_name}`}
                    />
                    <p className="pt-2 text-center">{locationData.location_name}</p>
                    <p className="pt-2 text-center">{locationData.location_city}, {locationData.location_state}</p>
                    <p className="py-2 text-center">{locationData.location_address}</p>
                </div>
                <div className="event-details flex-auto w-32">
                    <h3 className="py-3 text-2xl text-center underline">Event Details</h3>
                    <div className="details-container border-2 border-stone-600 rounded-lg">
                        <p className="text-center">Related Hobby: {hobbyData.hobby_name}</p>
                        <p className="pt-2 px-2">Event Starts On: {eventData.event_start_date}</p>
                        <p className="pt-2 px-2">Event Ends On: {eventData.event_end_date} </p>
                        <p className="py-2 px-2">Event Description: {eventData.event_description}</p>
                    </div>
                </div>
            </div>
            <div className="event-editor">
                <button
                className="hover:bg-green-400 mx-4 my-4 inline-flex items-center justify-center p-2 bg-green-300 rounded-md shadow-lg">
                    <Link to={`edit`}>Edit Event
                    </Link>
                </button>
                <button
                className="hover:bg-red-500 mx-4 my-4 inline-flex items-center justify-center p-2 bg-red-400 rounded-md shadow-lg" 
                onClick={deleteData}>
                    <Link to="/events">Delete Event
                    </Link>
                </button>
            </div>
        </div>
    )
}
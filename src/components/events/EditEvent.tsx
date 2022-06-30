import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import EventHobbyDropDown from './EventHobbyDropDown';
import EventLocationDropDown from './EventLocationDropDown';

export default function EditEvent() {
    const { name } = useParams();

    // State variable to store data for initial fetch
    const [eventData, setEventData] = useState<any>([]);

    // State variables for edit event form
    const [eventName, setEventName] = useState <string>('');
    const [eventStartDate, setEventStartDate] = useState <string| null>(null);
    const [eventEndDate, setEventEndDate] = useState <string| null>(null);
    const [eventDesc, setEventDesc] = useState <string| null>('');
    const [eventHobby, setEventHobby] = useState <string| null>(null);
    const [eventLocation, setEventLocation] = useState <string| null>(null);

    // GET SPECIFIED EVENT
    useEffect(() => {
        fetch(`https://social-meet-up-api.herokuapp.com/events/${name}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setEventData(data)
                setEventName(data.event_name)
                setEventStartDate(data.event_start_date)
                setEventEndDate(data.event_end_date)
                setEventDesc(data.event_description)
                setEventHobby(data.hobbies.hobby_id)
                setEventLocation(data.locations.location_id)
            })
    }, []);

    // Data Body for PUT request
    const putBody = {
        event_name: eventName,
        event_start_date: eventStartDate,
        event_end_date: eventEndDate,
        event_description: eventDesc,
        hobby_id: eventHobby,
        location_id: eventLocation
    }

    const consoleLog = () => {
        console.log(putBody)
    }
    // Fetch Options
    const options = {
        method: 'PUT',
        body: JSON.stringify(putBody),
        headers: {
            'Content-Type': 'application/json'
        }
    }


    const putData = () => {
        fetch(`https://social-meet-up-api.herokuapp.com/events/${name}`, options)
            // .then(console.log(putBody))
            .then(res => res.json())
    }

    return (
        <div className='container'>
          <h3 className='my-4 mx-16 text-3xl font-bold'>Edit Event</h3>  
            <form className="mx-10" id="edit-event-form">
                <ul className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                    <li className="py-2 pl-2 border border-slate-300">
                        <label htmlFor="event-name">Event Name: </label>
                        <input
                        type="text"
                        id="event-name"
                        name="event-name"
                        // placeholder={eventData.event_name}
                        required
                        onChange={(e) => setEventName(e.target.value)}/>
                    </li>
                    <li className="py-2 pl-2 border border-slate-300">
                        <label htmlFor="start-date">Start Date: </label>
                        <input
                        type="date"
                        id="start-date"
                        name="start-date"
                        required
                        onChange={(e) => setEventStartDate(e.target.value)}/>
                    </li>
                    <li className="py-2 pl-2 border border-slate-300">
                        <label htmlFor="end-date">End Date: </label>
                        <input
                        type="date"
                        id="end-date"
                        name="end-date"
                        required
                        onChange={(e) => setEventEndDate(e.target.value)}/>
                    </li>
                    <li className="py-2 pl-2 border border-slate-300">
                        <label className="align-top" htmlFor="event-desc">Event Description: </label>
                        {/* try adjusting size attribute on css, or try using <textarea> tag */}
                        <textarea
                        className="border-2 border-stone-200 w-96 h-40"
                        // type="text"
                        id="event-desc"
                        name="event-desc"
                        // placeholder={eventData.event_description}
                        required
                        onChange={(e) => setEventDesc(e.target.value)}/>
                    </li>
                    <li className="py-2 pl-2 border border-slate-300">
                        <label htmlFor="event-hobby">Related Hobby: </label>
                        <input
                        list="event-hobby-list"
                        id="event-hobby"
                        name="event-hobby"
                        placeholder=''
                        required
                        onChange={(e) => setEventHobby(e.target.value)}/>
                        <EventHobbyDropDown/>
                    </li>
                    <li className="py-2 pl-2 border border-slate-300">
                        <label htmlFor="event-location">Meet-Up Location: </label>
                        <input
                        list="event-location-list"
                        id="event-location"
                        name="event-location"
                        required
                        onChange={(e) => setEventLocation(e.target.value)}/>
                        <EventLocationDropDown/>
                    </li>
                </ul>
                <button 
                className="my-4 inline-flex items-center justify-center p-2 bg-indigo-400 rounded-md shadow-lg" 
                onClick={putData} 
                type="submit">
                    {/* Redirect users back to the event so they can see changes. */}
                    <Link to={`/events/${name}`}>Submit</Link>
                </button>
            </form>
        </div>
    )
}
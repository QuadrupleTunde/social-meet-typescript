import { useState } from 'react'
import EventHobbyDropDown from './EventHobbyDropDown';
import EventLocationDropDown from './EventLocationDropDown';

export default function CreateEvent() {
    // State variables for new event form
    const [eventName, setEventName] = useState<string|null>(null);
    const [eventStartDate, setEventStartDate] = useState<string|null>(null);
    const [eventEndDate, setEventEndDate] = useState<string|null>(null);
    const [eventDesc, setEventDesc] = useState<string|null>(null);
    const [eventHobby, setEventHobby] = useState<string|null>(null);
    const [eventLocation, setEventLocation] = useState <string|null>(null);

    // Data body for POST request
    const postBody = {
        event_name: eventName,
        event_start_date: eventStartDate,
        event_end_date: eventEndDate,
        event_description: eventDesc,
        hobby_id: eventHobby,
        location_id: eventLocation
    }

    // Fetch Options
    const options = {
        method: 'POST',
        body: JSON.stringify(postBody),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const consoleLog = () => {
        console.log(postBody)
    }

    const postData = () => {
        fetch('https://social-meet-up-api.herokuapp.com/events', options)
            // .then(console.log(postBody))
            .then(res => res.json())
            
    }

    return(
        <div className='container'>
          <h3 className='my-4 mx-16 text-3xl font-bold'>Create new event</h3>  
            <form className="mx-10" id="new-event-form">
                <ul className="bg-blue dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                    <li className="py-2 pl-2 border border-slate-300">
                        <label className="text-blue" htmlFor="event-name">Event Name: </label>
                        <input
                        type="text"
                        id="event-name"
                        name="event-name"
                        required
                        onChange={(e) => setEventName(e.target.value)}/>
                    </li>
                    <li className="py-2 pl-2 border border-slate-300">
                        <label className="text-blue" htmlFor="start-date">Start Date: </label>
                        <input
                        type="date"
                        id="start-date"
                        name="start-date"
                        required
                        onChange={(e) => setEventStartDate(e.target.value)}/>
                    </li>
                    <li className="py-2 pl-2 border border-slate-300">
                        <label className="text-blue" htmlFor="end-date">End Date: </label>
                        <input
                        type="date"
                        id="end-date"
                        name="end-date"
                        required
                        onChange={(e) => setEventEndDate(e.target.value)}/>
                    </li>
                    <li className="py-2 pl-2 border border-slate-300">
                        <label className="text-blue align-top" htmlFor="event-desc">Event Description: </label>
                        {/* try adjusting size attribute on css, or try using <textarea> tag */}
                        <textarea
                        className="w-96 h-40 border-2 border-stone-200"
                        // type="text"
                        id="event-desc"
                        name="event-desc"
                        required
                        onChange={(e) => setEventDesc(e.target.value)}/>
                    </li>
                    <li className="py-2 pl-2 border border-slate-300">
                        <label className="text-blue" htmlFor="event-hobby">Related Hobby: </label>
                        <input
                        list="event-hobby-list"
                        id="event-hobby"
                        name="event-hobby"
                        required
                        onChange={(e) => setEventHobby(e.target.value)}/>
                        <EventHobbyDropDown/>
                    </li>
                    <li className="py-2 pl-2 border border-slate-300">
                        <label className="tex-blue" htmlFor="event-location">Meet-Up Location: </label>
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
                className="hover:bg-indigo-500 my-4 inline-flex items-center justify-center p-2 bg-indigo-400 rounded-md shadow-lg"
                onClick={postData} 
                type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}
import React, { useState, useEffect } from 'react';  
import { Link } from 'react-router-dom'
import EventList from './EventList';     

export default function Events() {
    

    return (
        <div className='event'>   
            <header className="py-3"> 
                <h1 className='text-3xl font-bold'>Events</h1>
            </header>
            <div>
                <h2 className="font-bold">
                    Want to create a new event location?
                </h2>
                <button className="hover:bg-green-400 my-4 inline-flex items-center justify-center p-2 bg-green-300 rounded-md shadow-lg">
                    <Link to="/events/new">Create New</Link>
                </button>
            </div>
            <div>
                <h2 className="text-2xl underline font-bold">
                    Ongoing Events
                </h2>
                <EventList/>
            </div>   
                
        </div>
    )
}


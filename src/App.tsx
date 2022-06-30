// DEPENDENCIES
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

// COMPONENTS
import Hobbies from './components/hobbies/Hobbies';
import Home from './components/home/Home';
import NavigationBar from './components/NavigationBar';
import Events from './components/events/Events';
import CreateEvent from './components/events/CreateEvent';
import EventDetails from './components/events/EventDetails';
import EditEvent from './components/events/EditEvent';
import Locations from './components/locations/Locations';
import CreateLocation from './components/locations/CreateLocation';
import LocationDetails from './components/locations/LocationDetails';
import CreateHobby from './components/hobbies/CreateHobby';

function App() {

  return (
    <div className='h-screen bg-abstract'>
      <Router>
      <div className="App">
        <NavigationBar />
      </div>
      
      <div className="display">
          <Routes>
            <Route path="/"  element={ <Home/> }/>
            <Route path="/events" element={ <Events/> }/>
            <Route path="/events/new" element={ <CreateEvent/> }/>
            <Route path="/events/:name" element={ <EventDetails/> }/>
            <Route path="/events/:name/edit" element={ <EditEvent/> }/>
            <Route path="/locations" element={ <Locations/> }/>
            <Route path="/locations/new" element={ <CreateLocation/> }/>
            <Route path="/locations/:name" element={ <LocationDetails /> }/>
            <Route path="/hobbies" element={ <Hobbies/> }/>
            <Route path="/hobbies/new" element={ <CreateHobby/> }/>
          </Routes>
      </div>
    </Router>
    </div>
    
  );
}

export default App;

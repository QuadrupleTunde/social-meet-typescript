// DEPENDENCIES
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export default function Home() {
  let [eventData, setEventData] = useState<any>([]);
  const navigate = useNavigate();


  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://social-meet-up-api.herokuapp.com/events/`
      );
      const json = response.json();
      setEventData(json);
    }
    fetchData()
  },[]);


  const handleClick = (event: any) => {
    let index = Math.floor(Math.random() * eventData.length);
    let randomEvent = eventData[index];
    let link = `/events/${randomEvent.event_name}`;
    console.log(link)
    navigate(link);
  };

  return (
    <div className="home h-full">
      <header className="text-5xl font-bold ml-6">
        We are the <br /> home of hobbies.
      </header>
      <hr></hr>
      <div className="flex flex-col w-screen">
        <button className="w-1/4 rounded-md bg-clear-sky px-2 py-.5 mx-2 place-content-center mt-20 ml-6">
          <Link to="/hobbies">Explore Hobbies</Link>
        </button>
        <button
          className="text-clear-sky w-1/4 border-solid border-2 border-clear-sky rounded-md px-2 py-.5 mt-2 ml-6"
          onClick={handleClick}
        >
          Find an Event
        </button>
      </div>
    </div>
  );
}

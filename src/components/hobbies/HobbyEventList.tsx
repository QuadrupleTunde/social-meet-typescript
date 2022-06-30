import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HobbyEventList({ hobbyData }: any) {
  let [currentHobbyData, setCurrentHobbyData] = useState<any>({});
  let [eventHobbyData, setEventHobbyData] = useState<any>([]);

  useEffect(() => {
    handleFetch();
  }, [currentHobbyData]);

  const handleFetch = async () => {
    const response = await fetch(
      `https://social-meet-up-api.herokuapp.com/hobbies/${hobbyData.hobby_name}`
    );
    const json = await response.json();
    setEventHobbyData(json["events"]);
  };
  if (hobbyData !== currentHobbyData) setCurrentHobbyData(hobbyData);

  return (
    <div className="text-white">
      <h3>Events</h3>
      {eventHobbyData.map((event:any, i:any) => (
        <Link key={i} to={`/events/${event.event_name}`}>
          {event.event_name}
        </Link>
      ))}
    </div>
  );
}

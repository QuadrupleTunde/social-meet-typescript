import "../../public/all_hobbies.css";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import HobbyCard from "./HobbyCard";
import HobbyDropDown from "./HobbyDropDown";
import HobbyEventList from "./HobbyEventList";

export default function Hobbies() {
  let [hobbyData, setHobbyData] = useState<any>([]);
  let [displayHobby, setDisplayHobby] = useState<any>({});

  const handleSelected = async (selected : any) => {
    console.log(selected);
    const response = await fetch(
      `https://social-meet-up-api.herokuapp.com/hobbies/category/${selected}`
    );
    const json = await response.json();
    if (json == null) return;
    setHobbyData(json);
    console.log(json);
  };

  return (
    <div className="hobbies">
      <HobbyDropDown onSelect={handleSelected} />



      <div className="flex flex-row">
        <div className="inline-block w-3/5 h-1/2 grid-cols-4">
          {hobbyData.map((hobby: any, i:any) => (
            <HobbyCard hobbyData={hobby} key={i} onClick={setDisplayHobby} />
          ))}
        </div>
        <div className="inline-block w-2/5 bg-black bg-opacity-25 h-full">
          {displayHobby["hobby_name"] ? (
            <div>
              <h2 className="text-white">{displayHobby.hobby_name}</h2>
              <img src={displayHobby.hobby_img_url} alt={hobbyData.name}></img>
              <HobbyEventList hobbyData={displayHobby}></HobbyEventList>
            </div>
          ) : (
            <p>Select a hobby</p>
          )}
        </div>
      </div>
      <div className="create-hobby-container mt-6 rounded-lg border-4 border-blue-400 ml-auto mr-auto h-40 w-6/12 bg-stone-200">
        <h2 className="my-4 text-2xl font-bold">
            Can't find a hobby that you're interested in?
        </h2>
        <button className="hover:bg-green-400 my-4 inline-flex items-center justify-center p-2 bg-green-300 rounded-md shadow-lg">
            <Link to="/hobbies/new">Create a New Hobby</Link>
        </button>
      </div>      
    </div>
  );
}

import React, { useState, useEffect } from 'react';

export default function EventHobbyDropDown() {
    const [hobbyData, setHobbyData] = useState([])

    // GET ALL HOBBIES
    useEffect(() => {
        fetch('https://social-meet-up-api.herokuapp.com/hobbies')
            .then(res => res.json())
            .then(data => {
                setHobbyData(data)
            })
    }, []);

    let hobbyList = hobbyData.map((item:any, index:any) => {
        return<option value={item.hobby_id} key={index}>{item.hobby_name}</option>
    })
    
    return(
        <datalist id="event-hobby-list">
            {hobbyList}
        </datalist>
    )
}
import React from 'react';

export default function HobbyCard({hobbyData, onClick}: any) {

    return(
        <div className="pop-hobbies-item" onClick={(e) => onClick(hobbyData)}>
            <h3>{hobbyData.hobby_name}</h3>
            <img src={`${hobbyData.hobby_img_url}`} alt={hobbyData.name}/>
        </div>
    )
}
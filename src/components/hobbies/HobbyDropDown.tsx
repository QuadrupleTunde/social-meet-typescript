import React, { useState, useEffect } from "react";

export default function HobbyDropDown({ onSelect }: any) {
  const catagories = [
    "Fashion",
    "Arts",
    "Engineering",
    "Sports",
    "Outdoors",
    "Gaming",
  ];
  const [selected, setSelected] = useState<string>("");

  const handleClick = (event:any) => {
    let value = event.target.innerText;
    setSelected(value)
  };

  useEffect(() => {
    if (onSelect) onSelect(selected);
  }, [selected])

  return (
    <div>
      {catagories.map((hobby, i) => {
        var style = { "backgroundColor": "rgb(170, 219, 250)" };
        var is_selected = hobby == selected;
        return (
          <button onClick={handleClick} style={is_selected ? style : {}} key={i} className="mx-3">
            {hobby}
          </button>
        );
      })}
    </div>
  );
}

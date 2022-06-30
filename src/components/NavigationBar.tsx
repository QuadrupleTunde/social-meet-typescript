import React from "react";
import { Link } from 'react-router-dom'

// Render a navigation bar
export default function NavigationBar(props: any) {
  return (
    <nav>
      <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/events">Events</Link>
        </li>
        <li>
            <Link to="/locations">Locations</Link>
        </li>
        <li>
            <Link to="/hobbies">Hobbies</Link>
        </li>
      </ul>
    </nav>
  );
}

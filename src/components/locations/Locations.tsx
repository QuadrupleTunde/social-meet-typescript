import '../../public/all_locations.css'
import LocationsList from './LocationsList'
import { Link } from 'react-router-dom'

export default function Locations() {
    return(
        <div className=''>
            <header>
                <h1>
                    Wondering where to host your next event? Here are some suggestions.
                </h1>
            </header>
            <div>
                <h2>
                    Want to create a new event location?
                </h2>
                <button className="hover:bg-green-400 my-4 inline-flex items-center justify-center p-2 bg-blue-300 rounded-md shadow-lg">
                    <Link to="/locations/new">Create New</Link>
                </button>
            </div>
            <div>
                <LocationsList/>
            </div>
        </div>
    )
}
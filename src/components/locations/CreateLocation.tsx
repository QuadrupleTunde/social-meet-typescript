import { useState } from 'react'

export default function CreateLocation() {
    // State variables for new location form
    const [locationName, setLocationName] = useState<string|null>(null);
    const [locationState, setLocationState] = useState<string|null>(null);
    const [city, setCity] = useState<string|null>(null);
    const [address, setAddress] = useState<string|null>(null);
    const [imgUrl, setImgUrl] = useState<string|null>(null);

    const postBody = {
        location_name: locationName,
        location_state: locationState,
        location_city: city,
        location_address: address,
        location_img_url: imgUrl
    }
    const options = {
        method: 'POST',
        body: JSON.stringify(postBody),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const postData = () => {
        fetch('https://social-meet-up-api.herokuapp.com/locations', options)
            // .then(console.log(options))
            // .then(console.log(postBody))
            .then(res => res.json())
            .then(res => console.log(res.body))
    }

    return(
        <div className='location'>
            <h3 className='mb-4 mx-16 text-3xl font-bold'>Create New Location</h3> 
            <form className="mx-10" id="new-location-form">
                <ul className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                    <li className="py-2 pl-2 border border-slate-300">
                        <label className="text-blue" htmlFor="location-name">Location Name</label>
                        <input 
                        className="mx-2 border-2 rounded-lg border-stone-300"
                        placeholder='Name' 
                        type="text"
                        required
                        onChange={(e) => setLocationName(e.target.value)}/>
                    </li>
                    <li className="py-2 pl-2 border border-slate-300">
                        <label>State</label>
                        <input 
                        className="mx-2 border-2 rounded-lg border-stone-300"
                        list="state-list" 
                        id="state" 
                        name="state" 
                        placeholder='State'
                        required
                        onChange={(e) => setLocationState(e.target.value)}/>
                            <datalist id="state-list">
                            <option value="AK">Alaska</option>
                            <option value="AL">Alabama</option>
                            <option value="AR">Arkansas</option>
                            <option value="AZ">Arizona</option>
                            <option value="CA">California</option>
                            <option value="CT">Connecticut</option>
                            <option value="CO">Colorado</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="IA">Iowa</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="MA">Massachussets</option>
                            <option value="MD">Maryland</option>
                            <option value="ME">Maine</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MO">Missouri</option>
                            <option value="MS">Mississippi</option>
                            <option value="MT">Montana</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="NE">Nebraska</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NV">Nevada</option>
                            <option value="NY">New York</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OH">Ohio</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VA">Virginia</option>
                            <option value="VT">Vermont</option>
                            <option value="WA">Washington</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WV">West Virginia</option>
                            <option value="WY">Wyoming</option>
                            </datalist>
                    </li>
                    <li className="py-2 pl-2 border border-slate-300">
                        <label>City</label>
                        <input
                        className="mx-2 border-2 rounded-lg border-stone-300"
                        type="text"
                        placeholder='City'
                        required 
                        onChange={(e) => setCity(e.target.value)}/>
                    </li>
                    <li className="py-2 pl-2 border border-slate-300">
                        <label>Address</label>
                        <input 
                        className="mx-2 border-2 rounded-lg border-stone-300"
                        type="text"
                        placeholder='Address'
                        required
                        onChange={(e) => setAddress(e.target.value)}/>
                    </li>
                    <li className="py-2 pl-2 border border-slate-300">
                        <label>Image Url</label>
                        <input 
                        className="w-9/12 mx-2 border-2 rounded-lg border-stone-300"
                        type="text"
                        required
                        onChange={(e) => setImgUrl(e.target.value)}/>
                    </li>
                </ul>
                <button onClick={postData} type="submit" className="hover:bg-green-400 my-4 inline-flex items-center justify-center p-2 bg-green-300 rounded-md shadow-lg">Submit</button>
            </form>
        </div>
    )
}
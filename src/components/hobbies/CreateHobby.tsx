import { useState } from 'react'

export default function CreateHobby() {
    // State Variables for New Hobby Form
    const [hobbyName, setHobbyName] = useState<string|null>(null)
    const [hobbyCategory, setHobbyCategory] = useState<string|null>('')
    const [hobbyImgUrl, setHobbyImgUrl] = useState<string|null>(null)

    // Static Array for Hobby Categories
    const categories = [
        "Fashion",
        "Arts",
        "Engineering",
        "Sports",
        "Outdoors",
        "Gaming",
    ];

    // Map Through Categories Array and Return Drop Down Option
    let categoryList = categories.map((item, index) => {
        return<option value={item} key={index}>{item}</option>
    })

    // Function to Return Category Drop Down
    const categoryDropDown = () => {
        return(
            <datalist id="hobby-category-list">
                {categoryList}
            </datalist>
        )
    }

    // Data Body for POST Request
    const postBody = {
        hobby_name: hobbyName,
        hobby_category: hobbyCategory,
        hobby_img_url: hobbyImgUrl
    }

    // Fetch Options
    const options = {
        method: 'POST',
        body: JSON.stringify(postBody),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Console Log Function to Test the POST
    const consoleLog = () => {
        console.log(postBody)
    }

    // Sending POST Request to Server
    const postData = () => {
        fetch('https://social-meet-up-api.herokuapp.com/hobbies', options)
            // .then(console.log(postBody))
            .then(res => res.json())
    }

    return(
        <div className='container'>
          <h3 className='my-4 mx-16 text-3xl font-bold'>Create New Hobby</h3>  
            <form className="mx-10" id="new-hobby-form">
                <ul className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                    <li className="py-2 pl-2 border border-slate-300">
                        <label className="text-blue" htmlFor="hobby-name">Hobby Name: </label>
                        <input
                        className="border-2 rounded-lg border-stone-300"
                        type="text"
                        id="hobby-name"
                        name="hobby-name"
                        required
                        onChange={(e) => setHobbyName(e.target.value)}/>
                    </li>
                    <li className="py-2 pl-2 border border-slate-300">
                        <label className="text-blue" htmlFor="hobby-category">Hobby Category: </label>
                        <input
                        className="border-2 rounded-lg border-stone-300"
                        list="hobby-category-list"
                        id="hobby-category"
                        name="hobby-category"
                        required
                        onChange={(e) => setHobbyCategory(e.target.value)}/>
                        {categoryDropDown()}                    
                    </li>
                    <li className="py-2 pl-2 border border-slate-300">
                        <label className="text-blue" htmlFor="hobby-img-url">Hobby Image URL: </label>
                        <input
                        className="border-2 rounded-lg border-stone-300 w-9/12"
                        type="text"
                        id="hobby-img-url"
                        name="hobby-img-url"
                        required
                        onChange={(e) => setHobbyImgUrl(e.target.value)}/>
                    </li>
                </ul>
                <button 
                className="hover:bg-indigo-500 my-4 inline-flex items-center justify-center p-2 bg-indigo-400 rounded-md shadow-lg"
                onClick={postData}
                type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}
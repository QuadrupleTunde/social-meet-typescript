# Social-Meet-Up-Application
Find other people with similar interests/hobbies as you and create events to meet-up. You can also create new interests, or add a new event location.

## Development Process
- We started out with a vague concept of a social meet up app. The main purpose of our application would be for the users to look for a hobby that they are interested in, and find any events related to that hobby. If users are unable to find something that interests them, they can also create a new hobby, or organize a new event. This gave us a good idea of how the database would look like. It made sense to have 3 major tables. Hobbies, Events, and Locations(to host events). As for the relationships, we wanted to keep it simple, and made the decision that an event would be a one-and-done deal(non-repeatable). One hobby could have many events, and one location could also have many events, but not the other way around. Since events depend on having a related hobby & location to be functional, we made the decision to not allow users to edit or delete pre-existing hobbies or locations, as this could potentially create conflicts within our database.

- When arriving at our homepage, we wanted our users to be able to choose between picking out a hobby first, or navigating to a pre-existing event. Users that are interested in a particular hobby would go to the hobbies page first, and users that just want to look at ongoing events regardless of the hobby would be directed to a random event.

- We wanted our users to be able to see just about everything in our database. Therefore, it made sense follow a similar structure as our database on our front-end. We made three pages that would display Hobbies, Events, and Locations. Within those pages, users would also be able to see details on a specific hobby/event/location if they are interested. Users can create an event/hobby/location, but can only edit or delete events.

## Application Logic
### [Back End Logic]
- Our application api is deployed on a Heroku page through the config.json file.
- We worked with sequelize migrations and models to create our tables in our database, as well as define the relationships between the three tables.
```
Hobbies Table columns:
hobby_id, hobby_name, hobby_category, hobby_img_url

Locations Table columns:
location_id, location_name, location_state, location_city, location_address, location_img_url

Events Table columns:
event_id, event_name, event_start_date, event_end_date, event_description
(foreign keys) hobby_id, location_id
```
- Our controllers all have the same logic, 
1. using GET routes to find all or 
2. find specific data, 
3. POST route to create data
4. PUT route to update data
5. DELETE route to delete data
- There are some minor differences in the association queries.(Find specific hobby/event/location has include statements)
- For query parameters, we decided to use the names. (hobby_name, location_name, event_name)

### [Front End Logic]
- Home Page "/"
```
On load, we use the useEffect hook to fetch events data from the server. This will be used for the 'Find an Event' button.

The 'Explore Hobbies' button is a react-router-dom component that takes the user to the /hobbies page.

The 'Find an Event' button has a handleClick function that takes a random index from the fetched data(array of events) 
and takes the user to a random pre-existing event.
```
- Events Page "/events"
```
Contains an EventList Component which fetches events data from the server, 
and uses the map function to return a list item for every event inside the array. 
uses the useState hook to render the data.

List items also have links that can be clicked to navigate to specific event pages.


Also has a Create New button which takes the user to a new page with a form to create a new event.
```
- Specific Event Page "/events/:name"
```
On load, fetches the specific event data using the useParams hook and renders the data.

Has two buttons, 'Edit Event', which takes the user to a new page with a form to edit the event, 
and 'Delete Event', which deletes the event.
```
- Locations Page "/locations"
```
On load, uses the same logic as the Event List component to fetch locations data and use the map function to render 
a list item for every location data inside the array.

Has a Create New button which takes the user to a new page with a form to create a new location.
```
- Specific Location Page "/locations/:name"
```
uses the useParams hook to fetch for the specified location data and renders it.
```
- Hobbies Page "/hobbies"
```
There is a bar listing hobby categories near the top. When a category is selected the component fetches from the "category" endpoint to
retrieve all the hobbies related to the selected category.
When you select a specific hobby  it will fetch the events endpoint and list all events related to the selected hobby.
Afterwards you can select an event to goto it's event page.

```
### MVP Criteria
- Basic functioning Navbar
- CRUD operations (add, view, edit, delete) events/locations/interests
- Connection to a postgres database
- All buttons are functional
- Elements (ex: specific interests/events/locations) can be clicked on for more details
- Have basic CSS styling

### Post-MVP Plans
- Accessibility
- Fetch from a map API to display a specific location & directions
- Add a user profile page & users table to database.
- Render event start date and end date in human readable format
- Search bar
- Provide information or even tutorials on how to get started on a hobby

### Outstanding bugs & Unfinished functionality
- One event with no event name due to an error in the PUT request. (could delete by changing the controller to look up the id instead of the name, but decided to keep it due to time constraints)
- If users create a hobby or location with a mistake, they are unable to edit it.
- Users could potentially create duplicates
- Find an event sometimes goes to Event List.

## Project Planning

| Date | Goals |
| ---- | ----- |
| Sun. 04/24 | Github main branch ready to go, install npm packages |
| Tue. 04/26 | Have homepage, setup routes, have database tables ready(sequelize) |
| Thu. 04/28 | Have data grabbed from the database, Setup navbar and stub routes |
| Sun. 05/01 | Start rendering data from the database into pages, add styling |
| Tue. 05/03 | Make sure all CRUD opertions are working, prepare presentation |
| Thu. 05/05 | Presentation |

### Heroku Links
- Link to heroku back-end
- https://social-meet-up-api.herokuapp.com/
- Link to heroku front-end
- https://social-meet-up-app.herokuapp.com/

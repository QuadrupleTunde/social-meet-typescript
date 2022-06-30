module.exports = {
  content: [
    "tailwind.config.js",
    "src/components/events/CreateEvent.jsx",
    "src/components/events/EditEvent.jsx",
    "src/components/events/EventDetails.jsx",
    "src/components/events/EventHobbyDropDown.jsx",
    "src/components/events/EventList.jsx",
    "src/components/events/EventLocationDropDown.jsx",
    "src/components/events/Events.jsx",
    "src/components/hobbies/CreateHobby.jsx",
    "src/components/hobbies/Hobbies.jsx",
    "src/components/hobbies/HobbyCard.jsx",
    "src/components/hobbies/HobbyDropDown.jsx",
    "src/components/home/Home.jsx",
    "src/components/locations/CreateLocation.jsx",
    "src/components/locations/LocationDetails.jsx",
    "src/components/locations/Locations.jsx",
    "src/components/locations/LocationsList.jsx",
    "src/components/NavigationBar.jsx",
  ],
  theme: {
    extend: {
      colors: {
        "clear-sky": "#aadbfa",
      },
      backgroundImage: (theme)=>({
        dunes: "url('images.pexels.com/photos/691668/pexels-photo-691668.jpeg')",
        abstract: "url('abstract.png')",
      })
    },
  },
  plugins: [],
};

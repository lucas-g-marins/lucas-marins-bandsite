// API keys
const getKey = axios.get("https://project-1-api.herokuapp.com/register");

const apiKey = "fecf2746-0abe-4230-8b5d-8e971429f395";

// get show data

const showsURL = axios.get(
  `https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}`
);
showsURL.then((shows) => {
  const showsData = shows.data;
  console.log(showsData);

  postShows(showsData);
});

// list of upcoming shows

// let shows = [
//   {
//     Date: "Mon Sept 06 2021",
//     Venue: "Ronald Lane",
//     Location: "San Francisco, CA",
//   },
//   {
//     Date: "Tue Sept 21 2021",
//     Venue: "Pier 2 East",
//     Location: "San Francisco, CA",
//   },
//   {
//     Date: "Fri Oct 15 2021",
//     Venue: "View Lounge",
//     Location: "San Francisco, CA",
//   },
//   {
//     Date: "Sat Nov 6 2021",
//     Venue: "Hyatt Agency",
//     Location: "San Francisco, CA",
//   },
//   {
//     Date: "Fri Nov 26 2021",
//     Venue: "Moscow Center",
//     Location: "San Francisco, CA",
//   },
//   {
//     Date: "Wed Dec 15 2021",
//     Venue: "Press Club",
//     Location: "San Francisco, CA",
//   },
// ];

// loop for adding in shows

function postShows(showsData) {
  showsData.forEach((show) => {
    // create div
    let newDiv = document.createElement("div");
    newDiv.classList.add("shows__card");

    let findContainer = document.querySelector(".shows__container");
    findContainer.appendChild(newDiv);

    // create p tag for date
    let dateP = document.createElement("p");
    dateP.classList.add("shows__section-title");
    dateP.innerText = "Date";

    newDiv.appendChild(dateP);

    //  create dynamic show date

    let showDate = document.createElement("h3");
    showDate.classList.add("shows__date");
    showDate.innerText = show.date;

    newDiv.appendChild(showDate);

    // create p tag for venue

    let venue = document.createElement("p");
    venue.classList.add("shows__section-title");
    venue.innerText = "Venue";

    newDiv.appendChild(venue);

    // create dynamic venue

    let showVenue = document.createElement("h3");
    showVenue.classList.add("shows__venue");
    showVenue.innerText = show.place;

    newDiv.appendChild(showVenue);

    // create p tag for location

    let location = document.createElement("p");
    location.classList.add("shows__section-title");
    location.innerText = "Location";

    newDiv.appendChild(location);

    // create dynamic location

    let showLocation = document.createElement("h3");
    showLocation.classList.add("shows__location");
    showLocation.innerText = show.location;

    newDiv.appendChild(showLocation);

    // create button for tickets

    let ticketButton = document.createElement("button");
    ticketButton.classList.add("shows__tickets");
    ticketButton.innerText = "BUY TICKETS";

    newDiv.appendChild(ticketButton);
  });
}

// change show styling when clicked

const showCard = document.querySelectorAll(".shows__card");

let pastClick = null;

showCard.forEach((card) => {
  card.addEventListener("click", function (event) {
    if (pastClick !== null) {
      pastClick.classList.remove("shows__card--clicked");
      console.log(pastClick);
      event.currentTarget.classList.add("shows__card--clicked");
      pastClick = event.currentTarget;
    } else {
      event.currentTarget.classList.add("shows__card--clicked");
      pastClick = event.currentTarget;
      console.log("This is the selected card" + card);
    }
  });
});

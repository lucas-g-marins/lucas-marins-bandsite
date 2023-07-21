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

  // select all show cards

  const showCard = document.querySelectorAll(".shows__card");

  let pastClick = null;

  // change show styling when clicked

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
});
showsURL.catch((error) => {
  console.log(error);
});

// arryay for dates

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

// change timestamp to readable date

function setDate(date) {
  let newDate = new Date(date);
  let year = newDate.getFullYear();
  let month = newDate.getMonth();
  let monthName = monthNames[month];
  let day = newDate.getDate() + 1;
  let dayOfWeek = newDate.getDay();
  let dayName = dayNames[dayOfWeek];
  let fullDate = `${dayName} ${monthName} ${day} ${year}`;
  return fullDate;
}

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
    showDate.innerText = setDate(show.date);

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

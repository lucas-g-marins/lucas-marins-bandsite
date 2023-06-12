// list of upcoming shows

let shows = [
  {
    Date: "Mon Sept 06 2021",
    Venue: "Ronald Lane",
    Location: "San Francisco, CA",
  },
  {
    Date: "Tue Sept 21 2021",
    Venue: "Pier 2 East",
    Location: "San Francisco, CA",
  },
  {
    Date: "Fri Oct 15 2021",
    Venue: "View Lounge",
    Location: "San Francisco, CA",
  },
  {
    Date: "Sat Nov 6 2021",
    Venue: "Hyatt Agency",
    Location: "San Francisco, CA",
  },
  {
    Date: "Fri Nov 26 2021",
    Venue: "Moscow Center",
    Location: "San Francisco, CA",
  },
  {
    Date: "Wed Dec 15 2021",
    Venue: "Press Club",
    Location: "San Francisco, CA",
  },
];

// loop for adding in shows

for (let i = 0; i < shows.length; i++) {
  // create div
  let newDiv = document.createElement("div");
  newDiv.classList.add("shows__card");

  let findContainer = document.querySelector(".shows__container");
  findContainer.appendChild(newDiv);

  // create p tag for date
  let dateP = document.createElement("p");
  dateP.classList.add("shows__date-title");
  dateP.innerText = "Date";

  newDiv.appendChild(dateP);

  //  create dynamic show date

  let showDate = document.createElement("h3");
  showDate.classList.add("shows__date");
  showDate.innerText = shows[i].Date;

  newDiv.appendChild(showDate);
}

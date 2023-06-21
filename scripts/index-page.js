// array of objects for comments

let comments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magicexpressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
  },
];

// pull comment

const commentForm = document.querySelector(".conversation__form");

commentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //   pull name
  const pullName = event.target.name.value;
  console.log(pullName);
  //   pull comment
  const pullComment = event.target.comment.value;
  console.log(pullComment);
  //   push values to comments array
  const newComment = {
    name: pullName,
    date: "06/20/2023",
    comment: pullComment,
  };
  comments.unshift(newComment);
  console.log(comments);
});

// post comments
comments.forEach((comment) => {
  // create div for comment values
  let commentDiv = document.createElement("div");
  commentDiv.classList.add("conversation__comment-container");

  let conversationDiv = document.querySelector(".conversation");
  conversationDiv.appendChild(commentDiv);

  //   add div for avatar
  let avatarDiv = document.createElement("div");
  avatarDiv.classList.add("conversation__avatar-container");
  commentDiv.appendChild(avatarDiv);

  //   add avatar
  let avatar = document.createElement("img");
  avatar.classList.add("conversation__avatar");
  avatarDiv.appendChild(avatar);

  //   add div for name, date, and comment
  let contentDiv = document.createElement("div");
  contentDiv.classList.add("conversation__comment-content");
  commentDiv.appendChild(contentDiv);

  //   add div for name and date
  let nameDateDiv = document.createElement("div");
  nameDateDiv.classList.add("conversation__name-date-container");
  contentDiv.appendChild(nameDateDiv);

  //add name
  let userName = document.createElement("p");
  userName.innerText = comment.name;
  userName.classList.add("conversation__name");
  nameDateDiv.appendChild(userName);

  // add date
  let date = document.createElement("p");
  date.innerText = comment.date;
  date.classList.add("conversation__date");
  nameDateDiv.appendChild(date);

  //   add div for comment
  let commentValue = document.createElement("p");
  commentValue.innerText = comment.comment;
  commentValue.classList.add("conversation__comment");
  contentDiv.appendChild(commentValue);
});

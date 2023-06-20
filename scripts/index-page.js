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
  //   push values to comments
  const newComment = { name: pullName, comment: pullComment };
  comments.push(newComment);
  console.log(comments);
});

// post comments

// array of objects for comments

let comments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
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
      "I can't stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const commentForm = document.querySelector(".conversation__form");

// function to set date

function setDate(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let fullDate = `${month}/${day}/${year}`;
  return fullDate;
}

// post comments
comments.forEach((comment) => {
  // create div for comment values
  let commentDiv = document.createElement("div");
  commentDiv.classList.add("conversation__comment-container");

  let conversationDiv = document.querySelector(
    ".conversation__comment-section"
  );
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

// PULL COMMENT

commentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //   pull name
  const pullName = event.target.name.value;
  console.log(pullName.length);
  //   pull comment
  const pullComment = event.target.comment.value;
  console.log(pullComment);
  // pull date
  const pullDate = setDate(new Date());
  console.log(pullDate);

  // check for invalid inputs
  if (pullName.length === 0) {
    let nameInput = document.querySelector(".conversation__input");
    nameInput.classList.add("conversation__input--error");
    return false;
  } else if (pullComment.length === 0) {
    let commentInput = document.querySelector(".conversation__input--comment");
    commentInput.classList.add("conversation__input--error");
    return false;
  } else {
    //   push values to comments array
    const newComment = {
      name: pullName,
      date: pullDate,
      comment: pullComment,
    };
    comments.unshift(newComment);
    console.log(comments);

    // Remove values from input fields
    let clearName = document.querySelector(".conversation__input");
    clearName.value = "";

    let clearComment = document.querySelector(".conversation__input--comment");
    clearComment.value = "";

    // Remove already posted comments
    let commentsParent = document.querySelector(".conversation");
    let postedComments = document.querySelector(
      ".conversation__comment-section"
    );
    commentsParent.removeChild(postedComments);

    // recreate comment section div
    let newCommentSection = document.createElement("div");
    newCommentSection.classList.add("conversation__comment-section");
    commentsParent.appendChild(newCommentSection);

    // Post all comments from array
    comments.forEach((comment) => {
      // create div for comment values
      let commentDiv = document.createElement("div");
      commentDiv.classList.add("conversation__comment-container");

      // let conversationDiv = document.querySelector(".conversation");
      newCommentSection.appendChild(commentDiv);

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
  }
});

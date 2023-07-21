// API key

const getKey = axios.get("https://project-1-api.herokuapp.com/register");

const apiKey = "fecf2746-0abe-4230-8b5d-8e971429f395";

// get comments url

const commentsURL = axios.get(
  `https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`
);
commentsURL.then((comments) => {
  const commentsData = comments.data;
  console.log(commentsData);
  // sort comments by date
  const sortComments = commentsData.sort((a, b) => {
    return b.timestamp - a.timestamp;
  });

  // post comments onto page

  displayComment(sortComments);
});
commentsURL.catch((error) => {
  console.log(error);
});

const commentForm = document.querySelector(".conversation__form");

// function to set date

function setDate(date) {
  let newDate = new Date(date);
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let day = newDate.getDate();
  let fullDate = `${month}/${day}/${year}`;
  return fullDate;
}

// function for posting comments from array
function displayComment(commentsData) {
  commentsData.forEach((comment) => {
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
    date.innerText = setDate(comment.timestamp);
    date.classList.add("conversation__date");
    nameDateDiv.appendChild(date);

    //   add div for comment
    let commentValue = document.createElement("p");
    commentValue.innerText = comment.comment;
    commentValue.classList.add("conversation__comment");
    contentDiv.appendChild(commentValue);
  });
}

function postSingleComment(comment) {
  // create div for comment values
  let commentDiv = document.createElement("div");
  commentDiv.classList.add("conversation__comment-container");

  let conversationDiv = document.querySelector(
    ".conversation__comment-section"
  );
  conversationDiv.prepend(commentDiv);

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
  date.innerText = setDate(comment.timestamp);
  date.classList.add("conversation__date");
  nameDateDiv.appendChild(date);

  //   add div for comment
  let commentValue = document.createElement("p");
  commentValue.innerText = comment.comment;
  commentValue.classList.add("conversation__comment");
  contentDiv.appendChild(commentValue);
}

// displayComment();

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
  // const pullDate = setDate(new Date());
  // console.log(pullDate);

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
    // post comment to api

    const newComment = axios.post(
      `https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`,
      {
        name: pullName,
        comment: pullComment,
      }
    );
    newComment.then((result) => {
      console.log(result);
      // post comment to page
      const newCommentData = result.data;
      console.log(newCommentData);
      postSingleComment(newCommentData);
    });
    newComment.catch((error) => {
      console.log(error);
    });
  }
});

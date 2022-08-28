const loadCommentData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  displayComments(data.slice(0, 20));
};

const displayComments = (comments) => {
  const commentsContainer = document.getElementById("comment-container");

  comments.forEach((comment) => {
    const { postId, id, name, email, body } = comment;

    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comments");
    commentDiv.innerHTML = ` 
    <h4>User Name : ${name ? name : "Name Not Found"}</h4>
    <p>Post ID :${postId}</p>
    <p >ID : <span id="post-id" >${id}</span></p>
    <p>Email :${email}</p>
    <p>Commnet : ${body.slice(0, 50)}</p>
    `;

    commentsContainer.appendChild(commentDiv);
  });
};

loadCommentData();

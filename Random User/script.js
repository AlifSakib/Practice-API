const loadUser = async () => {
  const res = await fetch("https://randomuser.me/api/?results=6");
  const data = await res.json();
  displayUser(data.results);
};

const displayUser = (users) => {
  const userContainer = document.getElementById("user-container");

  users.forEach((user) => {
    const { title, first, last } = user.name;

    const { medium } = user.picture;
    const {
      street: { number, name },
    } = user.location;
    const { date } = user.dob;
    const { password } = user.login;
    const { phone } = user;
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.innerHTML = `
            <img src="${medium}" alt="" />
            <p>Hi, My Name is</p>
            <h3 id="info" >${title} ${title} ${title}</h3>
            <div id="icons">
            <i class="fa-solid fa-address-card"></i>
            <i id="email" class="fa-solid fa-message"></i>
            <i id="dob" class="fa-solid fa-calendar"></i>
            <i id="location" class="fa-solid fa-location-pin"></i>
            <i id="phone" class="fa-solid fa-phone"></i>
            <i id="password" class="fa-solid fa-lock"></i>
            </div>
    `;
    userContainer.appendChild(userDiv);
    const info = document.getElementById("info");
    const icons = document
      .getElementById("icons")
      .addEventListener("click", function (e) {
        if (e.target.id === "location") {
          info.innerText = name;
        } else if (e.target.id === "dob") {
          info.innerText = date.slice(0, 10);
        } else if (e.target.id === "email") {
          info.innerText = user.email;
        } else if (e.target.id === "phone") {
          info.innerText = phone;
        } else if (e.target.id === "password") {
          info.innerText = password;
        } else {
          info.innerText = title + " " + first + " " + last;
        }
      });
  });
};

loadUser();

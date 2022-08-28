const loadUser = async () => {
  const res = await fetch("https://randomuser.me/api/?results=6");
  const data = await res.json();
  displayUser(data.results);
};

const displayUser = (users) => {
  console.log(users);
};

loadUser();

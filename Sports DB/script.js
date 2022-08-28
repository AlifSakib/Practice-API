const loadData = async () => {
  const res = await fetch(
    "https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=all"
  );
  const data = await res.json();
  displayData(data.player);
};

const displayData = (players) => {
  const playerContainer = document.getElementById("player-container");
  players.forEach((player) => {
    const playerDiv = document.createElement("div");
  });
};

loadData();

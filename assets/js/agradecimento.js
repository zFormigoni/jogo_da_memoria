const player = document.querySelector(".player");
const endTime = document.querySelector(".timer");

const showStats = () => {
  player.innerHTML = `Jogador: ${localStorage.getItem("player")}`;
  endTime.innerHTML = `Tempo:    ${localStorage.getItem("timer")}`;
};

window.onload = () => {
  showStats();
};

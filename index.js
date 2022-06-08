import { Player } from "./models/player.js";
import { Game } from "./models/game.js";

const firstPlayer = document.querySelector(".first-player");
const btnNext = document.querySelector(".next");
const input1 = document.querySelector(".input1");
const game = new Game();

btnNext.addEventListener("click", (e) => {
  e.preventDefault();
  getTwoNumbers()
  
});

const getTwoNumbers = () => {
  let player = new Player(input1.value, game);
  if (player.number !== undefined) {
    firstPlayer.firstElementChild.textContent = "Второй игрок";
    input1.value = "";
    game.players.push(player);
  }
  if (game.players.length === 2) {
    document.getElementById("app").innerHTML = `
  <button class="input">Ввести</button>
  <div class="input1">
      <input class="input-first-player" type="text" placeholder="Угадайте число">
      <div class='text1'></div>
  </div>
  <div class="input2">
      <input class="input-second-player" type="text" placeholder="Угадайте число">
      <div class='text2'></div>
  </div>`;
  const buttonPlay = document.querySelector('.input')
  buttonPlay.addEventListener('click', () => {startGame()})
  console.log(buttonPlay)
  }
  console.log(game.players);
 
}


const startGame = () => {
  const inputFP = document.querySelector('.input-first-player')
  const inputSP = document.querySelector('.input-second-player')
  const textFP = document.querySelector('.text1')
  const textSP = document.querySelector('.text2')
  const numberFP = game.players[0].number
  const numberSP = game.players[1].number
  if (inputFP.value && game.validateEls(inputFP.value) != undefined) {
    game.compareInputAndNumber(inputFP, numberSP, textFP)
  }
  if (inputSP.value && game.validateEls(inputSP.value) != undefined) {
    game.compareInputAndNumber(inputSP, numberFP, textSP)
  }
}
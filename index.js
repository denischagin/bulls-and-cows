import { Player } from "./models/player.js";
import { Game } from "./models/game.js";

const firstPlayer = document.querySelector(".first-player");
const btnNext = document.querySelector(".next");
const input1 = document.querySelector(".input1");
const game = new Game();


btnNext.addEventListener("click", (e) => {
  e.preventDefault();
  getTwoNumbers();
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
    <div class="field">
    <div class="input1">
            <form action="">
                <h1 class="h1">Первый игрок</h1>
                <input class="input-first-player inp" type="text" placeholder="Угадайте число">
                <button class="input1 btn">Ввести</button>
                <div class='text1 div'></div>
            </form>
        </div>
        <div class="input2">
            <form action="">
                <h1 class="h1">Второй игрок</h1>
                <input class="input-second-player inp" type="text" placeholder="Угадайте число">
                <button class="input2 btn">Ввести</button>
                <div class='text2 div'></div>
            </form>
        </div>
    </div>`;
    const buttonPlay1 = document.querySelector(".input1");
    const buttonPlay2 = document.querySelector(".input2");
    buttonPlay1.addEventListener("click", (e) => {
      e.preventDefault()
      startGame();
    });
    buttonPlay2.addEventListener("click", (e) => {
      e.preventDefault()
      startGame();
    });
  }
};

const startGame = () => {
  const inputFP = document.querySelector(".input-first-player");
  const inputSP = document.querySelector(".input-second-player");
  const textFP = document.querySelector(".text1");
  const textSP = document.querySelector(".text2");
  const numberFP = game.players[0].number;
  const numberSP = game.players[1].number;
  if (inputFP.value && inputSP.value) {
    inputFP.value = ''
    inputSP.value = ''
    return alert('Вводить число можно только для одного игрока')
  }
  if (inputFP.value && game.validateEls(inputFP.value) != undefined) {
    game.compareInputAndNumber(inputFP, numberSP, textFP, game.players[0]);
  }
  if (inputSP.value && game.validateEls(inputSP.value) != undefined) {
    game.compareInputAndNumber(inputSP, numberFP, textSP, game.players[1]);
  }
};

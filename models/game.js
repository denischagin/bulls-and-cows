export class Game {
  players = [];
  compareInputAndNumber = (input, numberPlayer, textElement) => {
    const current = input.value.split("");
    const answer = numberPlayer.split("");
    if (!input.value) {
      return;
    }
    let byk = 0;
    let kow = 0;
    for (let i = 0; i < 4; i++) {
      if (current[i] === answer[i]) {
        byk++;
      }
    }
    for (let i of current) {
      if (answer.includes(i) && (current.indexOf(i) !== answer.indexOf(i))) {
        kow++;
      }
    }
    if (byk === 4) {
      alert("Вы угадали");
    }
    textElement.innerHTML += `<div class="bk">${input.value} - ${byk} б. ${kow} к.</div>`;
    input.value = ''
  };

  validateEls = (value) => {
    const arrayValue = value.split("");
    if (!(value && !isNaN(value))) {
      return alert("Нужно ввести число");
    }
    if (arrayValue.length !== 4) {
      return alert("Нужно ввести 4х значное число");
    }
    if (arrayValue[0] === "0") {
      return alert("Число не должно начинаться с нуля");
    }
    const singleSymbol = arrayValue.reduce((acc, item) => {
      acc[item] = acc[item] ? acc[item] + 1 : 1; // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
      return acc;
    }, {});
    const singleElements = Object.values(singleSymbol);
    if (
      singleElements[0] > 1 ||
      singleElements[1] > 1 ||
      singleElements[2] > 1 ||
      singleElements[3] > 1
    ) {
      return alert("Нужно ввести число с разными цифрами");
    }
    return value;
  };
}

export class Player {
  constructor(number, game) {
    this.game = game
    this.number = this.game.validateEls(number);
  }
}

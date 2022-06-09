export class Player {
  constructor(number, game) {
    this.attempts = 0
    this.game = game
    this.number = this.game.validateEls(number);
  }
}

export default class Building {
  constructor(sqft) {
    if (this.evacuationWarningMessage
      === Building.prototype.evacuationWarningMessage
      && new.target !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return (this._sqft);
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

import Car from './10-car';

export default class EVCar {
  constructor(brand, motor, color, range) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  // eslint-disable-next-line class-methods-use-this
  cloneCar() {
    return (new Car(undefined, undefined, undefined));
  }
}

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clone = Object.create(Object.getPrototypeOf(this));

    for (const key of Reflect.ownKeys(this)) {
      clone[key] = undefined;
    }

    return clone;
  }
}

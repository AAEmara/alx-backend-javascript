export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Ensuring that the new object is of the same class as `Car`.
    const clone = Object.create(Object.getPrototypeOf(this));

    // Retrieving all property keys of the current instance.
    for (const key of Reflect.ownKeys(this)) {
      clone[key] = undefined;
    }

    return clone;
  }
}

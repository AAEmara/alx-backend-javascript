#!/usr/bin/node
/* eslint-disable consistent-return */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  try {
    const result = (numerator / denominator);
    return result;
  } catch (error) {
    console.error(error);
  }
}

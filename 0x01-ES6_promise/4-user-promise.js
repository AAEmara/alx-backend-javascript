#!/usr/bin/node
function signUpUser(firstName, lastName) {
  const userObject = {
    firstName,
    lastName,
  };
  return new Promise((resolve) => {
    resolve(userObject);
  });
}

export default signUpUser;

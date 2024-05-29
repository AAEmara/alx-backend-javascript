#!/usr/bin/node
function uploadPhoto(filename) {
  return new Promise((reject) => {
    reject(Error(`${filename} cannot be processed`));
  });
}

export default uploadPhoto;

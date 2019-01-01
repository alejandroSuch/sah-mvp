const unirest = require('unirest');

module.exports = url => new Promise((resolve, reject) =>
  unirest
    .get(url)
    .end(({ body, error }) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    })
);

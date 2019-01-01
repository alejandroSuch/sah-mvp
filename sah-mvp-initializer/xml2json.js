const parseString = require('xml2js').parseString;

module.exports = xml => new Promise((resolve, reject) =>
  parseString(xml, (err, result) => {
    if (err) {
      reject(err);
    } else {
      resolve(result);
    }
  })
);

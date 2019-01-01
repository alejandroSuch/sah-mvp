const unirest = require('unirest');

const HEADERS = {'Accept': 'application/json', 'Content-Type': 'application/json'};

const requestFrom = ad => ({
  id: parseInt(ad.id[0]),
  title: ad.title[0],
  link: ad.url[0],
  city: ad.city[0],
  mainPicture: ad.pictures[0].picture[0].picture_url[0]
});

module.exports = async (ad) => new Promise((resolve, reject) => {
  const request = requestFrom(ad);

  unirest.post(process.env.API_URL)
    .headers(HEADERS)
    .send(request)
    .end(({ body, error }) => {
      if (error) {
        reject(`Error sending ${request.id} to backend.`);
      } else {
        console.info(`Sent ${request.id} to backend.`)
        resolve(body);
      }
    })

});
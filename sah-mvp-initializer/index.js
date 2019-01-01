require('dotenv').config()

const url = require('url');

const xml2json = require('./xml2json');
const url2string = require('./url2string');
const ad2backend = require('./ad2backend');

const FEED_URL = url.parse(process.env.FEED_URL);

const getAds = async () => {
  try {
    const content = await url2string(FEED_URL);
    const parsedContent = await xml2json(content);

    return Array.prototype.slice.call(parsedContent[process.env.LOCATION].ad);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const sendAd2Backend = async (ad) => {
  try {
    await ad2backend(ad);
  } catch (err) {
    console.error(err);
  }
};


(async function () {
  const ads = await getAds();

  ads.forEach(sendAd2Backend);
})();
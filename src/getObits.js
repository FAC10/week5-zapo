require('env2')('.env');
const createDates = require('./createDates');

const request = require('request');

function getObits(datesArr, cb) {
  const resultsArr = [];
  datesArr.forEach((date) => {
    const url = `https://content.guardianapis.com/search?tag=tone/obituaries&to-date=${date}&order-by=newest&api-key=${process.env.SECRET}&show-fields=trailText`;
    request(url, (err, res, body) => {
      // I thought Request provided JSON automatically but apparently not
      const data = JSON.parse(body).response;
      const obj = {
        title: data.results[0].webTitle,
        url: data.results[0].webUrl,
        summary: data.results[0].fields.trailText,
      };
      resultsArr.push(obj);
      if (resultsArr.length === datesArr.length) {
        cb(resultsArr);
      }
    });
  });
}

module.exports = getObits;

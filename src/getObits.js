require('env2')('.env');
const extractData = require('./extractData');

const request = require('request');

function getObits(datesArr, cb) {
  const resultsArr = [];
  datesArr.forEach((date) => {
    const url = `https://content.guardianapis.com/search?tag=tone/obituaries&to-date=${date}&order-by=newest&api-key=${process.env.SECRET}&show-fields=trailText`;
    request(url, (err, res, body) => {
      if (err) {
        cb(err);
      }
      // I thought Request provided JSON automatically but apparently not
      const data = extractData(JSON.parse(body));
      resultsArr.push(data);
      if (resultsArr.length === datesArr.length) {
        cb(null, resultsArr);
      }
    });
  });
}

module.exports = getObits;

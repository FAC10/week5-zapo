require('env2')('.env');
var createDates = require('./createDates');

const request = require('request');

let resultsArr = [];

function requests(datesArr, cb) {
    datesArr.forEach((date => {
            let url = `https://content.guardianapis.com/search?tag=tone/obituaries&from-date=${date}&order-by=newest&api-key=${process.env.SECRET}&show-fields=trailText`;
            request(url, (err, res, body) => {
              let title = res.results[0].webTitle;
              let url = res.results[0].webUrl;
              let summary = res.results[0].fields.trailText;
              const obj = {title, url, summary};
              resultsArr.push(obj);
              if(resultsArr.length === datesArr.length) {
                cb(resultsArr);
              }
            });
        })
    }

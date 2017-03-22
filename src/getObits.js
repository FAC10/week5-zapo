require('env2')('.env');

const request = require('request');

function createDatesArr() {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();

  if (dd.length < 2) {
      dd = `0${dd}`;
  }

  if (mm.length < 2) {
      mm = `0${mm}`;
  }

  let datesArr = [];
    for (i = 0; i < 10; i++) {
        let year = yyyy - i;
        let date = `${year}-${mm}-${dd}`;
        datesArr.push(date);
    }
}

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

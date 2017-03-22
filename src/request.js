const request = require('request');

const today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
const yyyy = today.getFullYear();

if (dd.length < 2) {
  dd = `0${dd}`;
}

if (mm.length < 2) {
  mm = `0${mm}`;
}

const date = `${yyyy}-${mm}-${dd}`;

const url = `https://content.guardianapis.com/search?tag=tone/obituaries&from-date=${date}&order-by=newest&api-key=${apikey}`;

request(url, (err, res, body) => {
  console.log(body);
});

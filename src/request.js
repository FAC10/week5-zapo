require('env2')('.env');

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

let datesArr = [];

function createDatesArr() {
  for (i = 0; i < 10; i++) {
    let year = yyyy - i;
    let date = `${year}-${mm}-${dd}`;
    datesArr.push(date);
  }
}

let obj = {};

function requests() {
datesArr.forEach((date => {
let url = `https://content.guardianapis.com/search?tag=tone/obituaries&from-date=${date}&order-by=newest&api-key=${process.env.SECRET}`;
request(url, (err, res, body) => {
  obj.push(body);
});
})
}

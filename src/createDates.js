// function createDatesArr() {
//   const today = new Date();
//   let dd = today.getDate();
//   let mm = today.getMonth() + 1;
//   const yyyy = today.getFullYear();
//
//   if (dd.length < 2) {
//     dd = `0${dd}`;
//   }
//
//   if (mm.length < 2) {
//     mm = `0${mm}`;
//   }
//
//   const datesArr = [];
//   for (let i = 0; i < 10; i++) {
//     const year = yyyy - i;
//     const date = `${year}-${mm}-${dd}`;
//     datesArr.push(date);
//   }
// }

// date object -> date string

function createDate(date) {
  return date.toISOString().slice(0, 10);
}

function createDateArr(ISOdate) {
  const arr = [];
  while (arr.length < 11) {
    arr.push(Number(ISOdate.substring(0, 4)) - arr.length);
  }
  return arr;
}

const makeDates = {
  myDate: new Date(),
  createDate,
  createDateArr,
};


module.exports = makeDates;

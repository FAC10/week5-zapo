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

// date object instance -> date string

function createDate(date) {
  return date.toISOString().slice(0, 10);
}

// ISODate string -> array of 10 dates

function createDateArr(ISOdate) {
  const arr = [];
  while (arr.length < 10) {
    const newYear = Number(ISOdate.substring(0, 4)) - arr.length;
    arr.push(newYear + ISOdate.substring(4, ISOdate.length));
  }
  return arr;
}

const makeDates = {
  myDate: new Date(),
  createDate,
  createDateArr,
};

// console.log(makeDates.createDateArr('1993-02-03'));


module.exports = makeDates;

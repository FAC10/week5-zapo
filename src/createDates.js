function createDatesArr() {
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

  const datesArr = [];
  for (let i = 0; i < 10; i++) {
    const year = yyyy - i;
    const date = `${year}-${mm}-${dd}`;
    datesArr.push(date);
  }
}

module.exports = createDatesArr;

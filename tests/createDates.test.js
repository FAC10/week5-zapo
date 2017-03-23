const createDates = require('../src/createDates.js');
const test = require('tape');

const createDatesTests = () => {
  test('createDates tests', (t) => {
    t.equal(typeof createDates, 'object', 'check that createDates is an object');
    const fakeDate = new Date('1993', '1', '3');
    const result = createDates.createDate(fakeDate);
    t.equal(result, '1993-02-03', 'when given an unformatted date from the JS date object, should return it cut down to yyyy-mm-dd');
    const myArr = createDates.createDateArr(result);
    t.deepEqual(myArr, ['1993-02-03', '1992-02-03', '1991-02-03', '1990-02-03', '1989-02-03', '1988-02-03', '1987-02-03', '1986-02-03', '1985-02-03', '1984-02-03']);
    t.end();
  });
};

module.exports = createDatesTests;

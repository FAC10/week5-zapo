const createDates = require('../src/createDates.js');
const test = require('tape');

console.log(createDates);

const createDatesTests = () => {
  test('createDates tests', (t) => {
    t.equal(typeof createDates, 'object');
    t.end();
  });
};

module.exports = createDatesTests;

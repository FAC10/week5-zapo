const getObits = require('../src/getObits.js');
const test = require('tape');

const getObitsTests = () => {
  test('tests that getObits returns the right number of results in an array', (t) => {
    const datesArr = ['2011-03-11', '2010-03-11', '2009-03-11', '2008-03-11'];
    getObits(datesArr, (err, result) => {
      const expected = datesArr;
      const actual = result;
      t.equal(expected.length, actual.length, 'resultsArr length should be equal to datesArr length');
      t.ok(Array.isArray(actual), 'datesArr should be an array');
      t.end();
    });
  });
  test('tests that getObits returns the right number of results in an array', (t) => {
    const datesArr = ['2011-03-11', '2010-03-11', '2009-03-11', '2008-03-11', '2007-03-11', '2006-03-11'];
    getObits(datesArr, (err, result) => {
      const expected = datesArr;
      const actual = result;
      t.equal(expected.length, actual.length, 'resultsArr length should be equal to datesArr length');
      t.ok(Array.isArray(actual), 'datesArr should be an array');
      t.end();
    });
  });
};


module.exports = getObitsTests;

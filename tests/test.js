const test = require('tape');


test('Testing the test', (t) => {
  t.equal(1, 1, 'Should be 1');
  t.end();
});

require('./createDates.test.js')();
require('./extractData.test.js')();
require('./getObits.test.js')();

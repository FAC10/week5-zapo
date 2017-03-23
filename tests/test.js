const test = require('tape');
const a = require('../index');


test('Testing the test', (t) => {
  t.equal(1, 1, 'Should be 1');
  t.end();
});

require('./createDates.test.js')();
require('./router.test.js')();

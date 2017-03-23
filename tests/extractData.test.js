const test = require('tape');
const extractData = require('../src/extractData.js');

const extractDataTests = () => {
  test('Test extractData with correct response', (t) => {
    const fakeBody = {
      response: {
        status: 'ok',
        userTier: 'developer',
        total: 6,
        startIndex: 1,
        pageSize: 10,
        currentPage: 1,
        pages: 1,
        orderBy: 'newest',
        results: [
          {
            id: 'education/2017/mar/22/diana-wallace-obituary',
            type: 'article',
            sectionId: 'education',
            sectionName: 'Education',
            webPublicationDate: '2017-03-22T18:29:52Z',
            webTitle: 'Diana Wallace obituary',
            webUrl: 'https://www.theguardian.com/education/2017/mar/22/diana-wallace-obituary',
            apiUrl: 'https://content.guardianapis.com/education/2017/mar/22/diana-wallace-obituary',
            fields: {
              trailText: '<strong>Other lives: </strong>Social worker who was guided by her Christian faith',
            },
          },
        ],
      },
    };
    const expected = {
      title: 'Diana Wallace obituary',
      url: 'https://www.theguardian.com/education/2017/mar/22/diana-wallace-obituary',
      date: '2017-03-22',
      summary: 'Other lives: Social worker who was guided by her Christian faith',
    };
    const actual = extractData(fakeBody);
    t.ok(typeof actual === 'object', 'Should return an object');
    t.deepEqual(expected, actual, 'Should create an object with the correct data');
    t.end();
  });
  test('Test extractData with bad response', (t) => {
    const fakeBody = {
      response: {
        status: 'ok',
        userTier: 'developer',
        total: 0,
        startIndex: 0,
        pageSize: 10,
        currentPage: 1,
        pages: 0,
        orderBy: 'newest',
        results: [
          {
            title: 'A title',
          },
        ],
      },
    };
    const expected = fakeBody;
    const actual = extractData(fakeBody);
    t.ok(typeof actual === 'object');
    t.equal(actual, expected, 'Should return the whole error object');
    t.end();
  });
  test('Test extractData with no response', (t) => {
    const fakeBody = {
      message: 'Invalid authentication credentials',
    };
    const expected = fakeBody;
    const actual = extractData(fakeBody);
    t.ok(typeof actual === 'object');
    t.equal(actual, expected, 'Should return the whole error object');
    t.end();
  });
};

module.exports = extractDataTests;

const test = require('tape');
const shot = require('shot');
const router = require('../src/routers/router');
// const handler = require('../src/handlers/handler');

const routerTests = () => {
  test('test serve landing without error', (t) => {
    shot.inject(router, { method: 'get', url: '/' }, (response) => {
      t.equal(response.statusCode, 200, 'Should respond with status code of 200');
      t.equal(response.headers['Content-Type'], 'text/html', 'response Content-Type should be text/html');
      t.equal(response.payload.split('\n')[0], '<!DOCTYPE html>', 'reponse payload should start with <!DOCTYPE html>');
      t.end();
    });
  });
  // test('test serveLanding with error', (t) => {
  //   shot.inject(router, { method: 'get', url: '/', simulate: { error: true } }, (response) => {
  //     t.equal(response, 500, 'Should respond with a status code of 500');
  //     t.end();
  //   });
  // });

  test('test servePublic with html', (t) => {
    shot.inject(router, { method: 'get', url: 'index.html' }, (response) => {
      t.equal(response.statusCode, 200, 'Should respond with status code of 200');
      t.equal(response.headers['Content-Type'], 'text/html', 'response Content-Type should be text/html');
      t.end();
    });
  });
  test('test servePublic with css', (t) => {
    shot.inject(router, { method: 'get', url: 'style.css' }, (response) => {
      t.equal(response.statusCode, 200, 'Should respond with status code of 200');
      t.equal(response.headers['Content-Type'], 'text/css', 'response Content-Type should be text/css');
      t.end();
    });
  });
  test('test servePublic with js', (t) => {
    shot.inject(router, { method: 'get', url: 'index.js' }, (response) => {
      t.equal(response.statusCode, 200, 'Should respond with status code of 200');
      t.equal(response.headers['Content-Type'], 'application/javascript', 'response Content-Type should be application/javascript');
      t.end();
    });
  });
  test('test servePublic with ico', (t) => {
    shot.inject(router, { method: 'get', url: 'assets/skull.ico' }, (response) => {
      t.equal(response.statusCode, 200, 'Should respond with status code of 200');
      t.equal(response.headers['Content-Type'], 'image/x-icon', 'response Content-Type should be image/x-icon');
      t.end();
    });
  });
  test('test servePublic with png', (t) => {
    shot.inject(router, { method: 'get', url: 'assets/skull-and-crossbones-_1_.png' }, (response) => {
      t.equal(response.statusCode, 200, 'Should respond with status code of 200');
      t.equal(response.headers['Content-Type'], 'image/png', 'response Content-Type should be image/png');
      t.end();
    });
  });
};

module.exports = routerTests;

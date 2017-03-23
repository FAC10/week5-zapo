/* eslint-disable */
var fakeData = [
    {
        title: 'Diana Wallace obituary',
        url: 'https://www.theguardian.com/education/2017/mar/22/diana-wallace-obituary',
        summary: '<strong>Other lives: </strong>Social worker who was guided by her Christian faith'
    }, {
        title: 'Diana Wallace obituary',
        url: 'https://www.theguardian.com/education/2017/mar/22/diana-wallace-obituary',
        summary: '<strong>Other lives: </strong>Social worker who was guided by her Christian faith'
    }, {
        title: 'Diana Wallace obituary',
        url: 'https://www.theguardian.com/education/2017/mar/22/diana-wallace-obituary',
        summary: '<strong>Other lives: </strong>Social worker who was guided by her Christian faith'
    }, {
        title: 'Diana Wallace obituary',
        url: 'https://www.theguardian.com/education/2017/mar/22/diana-wallace-obituary',
        summary: '<strong>Other lives: </strong>Social worker who was guided by her Christian faith'
    }, {
        title: 'Diana Wallace obituary',
        url: 'https://www.theguardian.com/education/2017/mar/22/diana-wallace-obituary',
        summary: '<strong>Other lives: </strong>Social worker who was guided by her Christian faith'
    }, {
        title: 'Diana Wallace obituary',
        url: 'https://www.theguardian.com/education/2017/mar/22/diana-wallace-obituary',
        summary: '<strong>Other lives: </strong>Social worker who was guided by her Christian faith'
    }, {
        title: 'Diana Wallace obituary',
        url: 'https://www.theguardian.com/education/2017/mar/22/diana-wallace-obituary',
        summary: '<strong>Other lives: </strong>Social worker who was guided by her Christian faith'
    }, {
        title: 'Diana Wallace obituary',
        url: 'https://www.theguardian.com/education/2017/mar/22/diana-wallace-obituary',
        summary: '<strong>Other lives: </strong>Social worker who was guided by her Christian faith'
    }, {
        title: 'Diana Wallace obituary',
        url: 'https://www.theguardian.com/education/2017/mar/22/diana-wallace-obituary',
        summary: '<strong>Other lives: </strong>Social worker who was guided by her Christian faith'
    }, {
        title: 'Diana Wallace obituary',
        url: 'https://www.theguardian.com/education/2017/mar/22/diana-wallace-obituary',
        summary: '<strong>Other lives: </strong>Social worker who was guided by her Christian faith'
    }
];

function updateDOM(dataArr) {
  dataArr.forEach(function(obit) {
    // var container = createEl('div', 'obit', null, null);
    var link = createEl('a', 'obit', null, obit.url);
    var title = createEl('h2', 'obit__title', obit.title);
    var summary = createEl('p', 'obit__summary', obit.summary);
    link.appendChild(title);
    link.appendChild(summary);
    // container.appendChild(link);
    var app = document.getElementById('app');
    app.appendChild(link);
  })
}

updateDOM(fakeData);

function createEl(element, className, text, url) {
  var el = document.createElement(element);
  el.className = className || '';
  el.textContent = text || '';
  if (url) el.href = url;
  return el;
}

function fetch(method, url, responseCallback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            var data = JSON.parse(request.responseText);
            responseCallback(null, data);
        }
    };
    request.onerror = function() {
        responseCallback('Sorry, connection error');
    }
    request.open(method, url, true);
    request.send();
}

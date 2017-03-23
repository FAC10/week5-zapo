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
    console.log(obit.title);
    var container = createEl('div', 'obit', null, null);
    var link = createEl('a', 'obit__link', null, obit.url);
    var title = createEl('h2', 'obit__title', obit.title);
    var summary = createEl('p', 'obit__summary', obit.summary);
    link.appendChild(title);
    container.appendChild(link);
    container.appendChild(summary);
    var app = document.getElementById('app');
    app.appendChild(container);
  })
}

// updateDOM(fakeData);

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
            console.log(data);
            responseCallback(data);
        }
    }
    request.onerror = function() {
        responseCallback('Sorry, connection error');
    }
    request.open(method, url, true);
    request.send();
}


function myFunction(err, data){
  if(err){
    console.log(err);
  } else {
    console.log(data);
  }
}

fetch('GET', 'http://localhost:4000/api', updateDOM);

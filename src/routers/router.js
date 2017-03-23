const handlers = require('../handlers/handler.js');

module.exports = function (request, response) {
  const url = request.url;
  const extension = url.split('.')[1];
  if (url === '/') {
    handlers.serveLanding(request, response);
  } else if (extension === 'css' || extension === 'js' || extension === 'html' || extension === 'ico' || extension === 'png' || extension === 'svg') {
    handlers.servePublic(request, response, url);
  } else if (url.indexOf('/api') !== -1) { // TBC
    handlers.serveAPI(request, response);
  } else {
    handlers.pageNotFound(request, response);
  }
};

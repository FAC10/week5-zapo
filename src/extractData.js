function extractData(body) {
  if (!body.response ||
      !body.response.results[0].webTitle ||
      !body.response.results[0].webUrl ||
      !body.response.results[0].fields.trailText) {
    return body;
  }
  return {
    title: body.response.results[0].webTitle,
    url: body.response.results[0].webUrl,
    summary: body.response.results[0].fields.trailText.replace(/<(?:.|\n)*?>/gm, ''),
    date: body.response.results[0].webPublicationDate.slice(0, 10),

  };
}

module.exports = extractData;

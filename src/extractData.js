function extractData(body) {
  if (!body.response ||
      !body.response.results.webTitle ||
      !body.response.results.webUrl ||
      !body.response.results.fields.trailText) {
    return body;
  }
  return {
    title: body.response.results[0].webTitle,
    url: body.response.results[0].webUrl,
    summary: body.response.results[0].fields.trailText,
  };
}

module.exports = extractData;

# Die Another Day :trollface: :skull: (another Zapo project)

[![Build Status](https://travis-ci.org/FAC10/week5-zapo.svg?branch=master)](https://travis-ci.org/FAC10/week5-zapo)
[![Code Coverage](https://codecov.io/gh/FAC10/week5-zapo/branch/master/graph/badge.svg)](https://codecov.io/gh/FAC10/week5-zapo)

### User stories

- [ ] I want to be able to see an obituary from this day each year (back to 1999)

- [ ] I want to be able to use the app with my keyboard

- [ ] I want to be able to use the app with a screen reader

### Product

To satisfy these user stories, we will create a site that makes a request to the Guardian API to find an obituary posted on today's date each year. As a stretch goal we will allow users to check for obituaries posted on other days. We will stick to obituaries posted during the last 10 years as the Guardian API only allows 12 requests a second.

### Specs

- [ ] Use at least 1 API
- [ ] Make your API calls from the back-end using the request module
- [ ] Your server should contain a minimum of 2 routes
- [ ] Back-end testing using tape (test as many components as you can) and basic front-end testing.
- [ ] Test your server by injecting fake HTTP requests using Shot.
- [ ] Host your project on heroku, see resources
- [ ] Use module.exports and require to break a single large server file into smaller modules.
- [ ] Consider a good server file structure based on what we have discussed over the week.
- [ ] Employ continuous intergration on your project with Travis or a similar tool.
- [ ] Use CodeCov or a similar tool for test coverage.
- [ ] Display continuous integration and code coverage badges on your project README.
- [ ] Ensure that errors are handled, if for example a user attempts to make a request to a non-existent route to your server, provide the user with a custom response.

## Architecture

![architecture](https://cloud.githubusercontent.com/assets/20152018/24198216/e2945094-0efc-11e7-80ac-5f1cf8b6f898.png)

### Stretch goals

- [ ] I want to be able to choose a date and see obituaries from that day on previous years.

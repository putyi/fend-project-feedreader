# Project Overview

This Project is a Part of Front End NanoDegree by Udacity. In this project I was given a web-based application that reads RSS feeds. The lists are found in a left-slider menu that slides open after its icon is clicked. The original developer of this application had already included [Jasmine](http://jasmine.github.io/). The task was to write several test suites and specs, which I added to <jasmine/spec/feedreader.js>. The original version of this file contained ToDos.

## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass. It's an important skill to have!

## How to run the test locally?

Clone the repository from [github](https://github.com/putyi/fend-project-feedreader) and open index.html in your browser (find Jasmine test results on the bottom of the page). Feel free to write other tests on the project!

### About Jasmine

If you are unfamiliar with Jasmine tests, check this out first: [Jasmine documentation](https://jasmine.github.io/)

#### The tests:

1. RSS Feeds:

   * feeds are defined
   * feed URLs are defined and contain content
   * feed names are defined and contain content

2. Menu:

    * menu is hidden on page load
    * menu icon appears on click and hides after a next click

3. First RSS Entry:

    * at least one entry displays on load (async call)

4. RSS Entry Change:

    * RSS entry changes on menu select (async call)
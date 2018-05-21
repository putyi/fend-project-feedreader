/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has a URL defined', function() {
            allFeeds.forEach(function(element) {
                expect(element.url).toBeDefined();
                expect(typeof element.url).toEqual('string');
                expect(element.url.length).not.toBe(0);
                expect(element.url.startsWith('http://')).toBe(true);
            });
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has a name defined', function() {
            allFeeds.forEach(function(element) {
                expect(element.name).toBeDefined();
                expect(element.name.length).not.toBe(0);
            });
        });
    });


    /* New test suite named "The menu" */
    describe('The menu', function() {
        var body;
        var bodyClass;

        beforeEach(function() {
            body = document.querySelector('body');
            bodyClass = body.className;
        });
        /* This test ensures the menu element is
         * hidden by default.
         */
        it('the menu element is hidden by default', function() {
            //document.onload;

            expect(bodyClass).toBe('menu-hidden');
        });
         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. It has
          * two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('the menu changes visibility when the menu icon is clicked', function() {
            $('.menu-icon-link').click();

            expect(body.className).toBe('');
            //console.log('Should be empty' + body.className); //for testing purposes
            $('.menu-icon-link').click();

            expect(body.className).toBe('menu-hidden');
            //console.log(body.className); //for testing purposes
        });
    });

    /* New test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('at least a single .entry element within the .feed container', function(done) {
            expect($(".feed .entry").length).not.toBe(0);
            done();
        });
    });
    /* New test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * loadFeed() is asynchronous so this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        var feed;
        var newFeed;

        beforeEach(function(done) {
            loadFeed(1, function() {
                feed = $('.feed').html();
                done();
            });
        });

        it('the content changes when a new feed is loaded', function(done) {
            loadFeed(2, function(){
                newFeed = $('.feed').html();
                expect(newFeed).not.toBe(feed);
                done();
            });
        });
    });
}());

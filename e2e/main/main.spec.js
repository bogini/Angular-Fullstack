'use strict';

const config = browser.params;

describe('Main View', function () {
  let page;

  beforeEach(function () {
    const promise = browser.get(config.baseUrl + '/');

    browser.wait(promise, 5000);

    page = require('./main.po');

    return promise;
  });

  it('should have a title', () => {
    expect(browser.getTitle()).to.eventually.be.eql('Full-Stack App');
  });

  it('should include list of items with correct data', () => {
    expect(page.thingsListItems.count()).to.eventually.be.eql(2);
  });
});

/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

const MainPage = function () {
  this.thingsContainer = element(by.css('#things'));
  this.thingsList = this.thingsContainer.element(by.css('#thingsList'));
  this.thingsListItems = this.thingsList.element(by.css('.item'));
};

module.exports = new MainPage();
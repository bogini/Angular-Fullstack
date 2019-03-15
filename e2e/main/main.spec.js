const config = browser.params;

describe('Main View', () => {
  let page;

  beforeEach(() => {
    const promise = browser.get(`${config.baseUrl}/`);

    page = require('./main.po');
    return promise;
  });

  it('should include list with correct data', () => {
    expect(page.thingsListItems.length).to.eventually.equal(2);
  });
});

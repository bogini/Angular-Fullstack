/* globals sinon, describe, expect, it */

const proxyquire = require('proxyquire').noPreserveCache();

const thingCtrlStub = {
  index: 'thingCtrl.index',
};

const routerStub = {
  get: sinon.spy(),
};

// require the index with our stubbed out modules
const thingIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    },
  },
  './thing.controller': thingCtrlStub,
});

describe('Thing API Router:', () => {
  it('should return an express router instance', () => {
    expect(thingIndex).to.equal(routerStub);
  });

  describe('GET /api/things', () => {
    it('should route to thing.controller.index', () => {
      expect(routerStub.get.withArgs('/', 'thingCtrl.index')).to.have.been.calledOnce;
    });
  });
});

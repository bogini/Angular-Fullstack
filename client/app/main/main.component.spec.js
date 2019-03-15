import main from './main.component';

describe('Component: MainComponent', () => {
  beforeEach(angular.mock.module(main));
  beforeEach(angular.mock.module('stateMock'));

  let scope;
  let mainComponent;
  let $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject((_$httpBackend_, $http, $componentController, $rootScope) => {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
      .respond([{
        _id: '1',
        title: 'Thing 1',
        body: 'I am thing #1',
      }, {
        _id: '2',
        title: 'Thing 2',
        body: 'I am thing #2',
      }]);

    scope = $rootScope.$new();
    mainComponent = $componentController('main', {
      $http,
      $scope: scope,
    });
  }));

  it('should attach a list of things to the controller', () => {
    mainComponent.$onInit();
    $httpBackend.flush();
    expect(mainComponent.things.length).to.equal(2);
  });
});

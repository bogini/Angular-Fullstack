import angular from 'angular';

export default angular.module('angularFullstackApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;

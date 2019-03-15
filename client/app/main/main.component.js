import angular from 'angular';
import uiRouter from 'angular-ui-router';

import routing from './main.routes';

export class MainController {
  /* @ngInject */
  constructor($http) {
    this.things = [];
    this.$http = $http;
  }

  loadThings() {
    this.loading = true;
    this.$http.get('/api/things')
      .then((res) => {
        this.things = res.data;
      })
      .finally(() => {
        this.loading = false;
      });
  }

  $onInit() {
    this.loadThings();
  }
}

export default angular.module('angularFullstackApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController,
  })
  .name;

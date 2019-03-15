import angular from 'angular';

export class NavbarComponent {
  constructor() {
    this.menu = [{
      title: 'Home',
      state: 'main',
    }];
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent,
  })
  .name;

Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});


Router.route('vcfirms', {
  name: 'vcfirms',
  controller: 'VcfirmsController',
  action: 'action',
  where: 'client'
});

Router.route('startups', {
  name: 'startups',
  controller: 'StartupsController',
  action: 'action',
  where: 'client'
});
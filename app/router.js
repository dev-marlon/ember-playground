import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blog');
  this.route('contact');
  this.route('imprint');
});

export default Router;

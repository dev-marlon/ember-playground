import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

    /**
     * wie folgendes verhalten umsetzten?
     *
     * /blog/
     * übersicht blog-einträge
     *
     * /blog/detail/1
     * detail-ansicht des blog-eintrags id 1
     *
     * oder
     *
     * /photos/
     * liste
     *
     * /photos/photo/1
     * detail
     *
     */



  this.route('posts', function(){
//      FIXME: ein callback (leere function?) muss übergeben werden, damit die index-route in blog/ berücksichtigt und das template im outlet vom blog-template angezigt wird.
//      this.route('index');
  });
  this.route('post', { path: '/post/:post_id' });

  this.route('contact');
  this.route('imprint');

//      FIXME: 404 handling?
  this.route('catchall', { path: '/*'});
});

export default Router;

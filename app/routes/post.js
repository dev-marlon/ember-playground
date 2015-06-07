import Ember from 'ember';

export default Ember.Route.extend({
    posts: [{
            title: 'Dies ist eine Überschrift',
            bodytext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }, {
            title: 'Dies ist auch eine Überschrift',
            bodytext: 'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }, {
            title: 'Dies ist auch noch eine Überschrift',
            bodytext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor mollit anim id est laborum.'
    }],
    model: function(params) {
        return this.get('posts').filter(function(el){
            if(el.uid === parseInt(params.post_id)){
                return el;
            }
        })[0];
    }
});

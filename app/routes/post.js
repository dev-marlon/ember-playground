import Ember from 'ember';

var posts = [{
    id: 1,
    title: 'Dies ist eine Überschrift',
    bodytext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}, {
    id: 2,
    title: 'Dies ist auch eine Überschrift',
    bodytext: 'Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}, {
    id: 3,
    title: 'Dies ist auch noch eine Überschrift',
    bodytext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor mollit anim id est laborum.'
}];

export default Ember.Route.extend({
    model: function(params) {
        return posts.filter(function(el){
            if(el.id === filterInt(params.post_id)){
                return el;
            }
        })[0];
    },
//    nicht nötig, wird per default ausgeführt
//    setupController: function(controller, model) {
//        controller.set('model', model);
//    },
    renderTemplate: function(controller, model) {
        if(model.id === 3){
            this.render('favoritePost');
        } else {
            // FIXME: render-method muss scheinbar immer angegeben werden, sobald der renderTemplate Hook genutzt wird
            this.render('post');
        }
    },

//    FIXME: http://guides.emberjs.com/v1.12.0/routing/redirection/#toc_after-the-model-is-known
//    afterModel: function(posts, transition) {
//
//        ???
//        console.log(posts);
//
//        if (posts.get('length') === 1) {
//            this.transitionTo('post', posts.get('firstObject'));
//        }
//    }
});


var filterInt = function (value) {
    if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value)){
        return Number(value);
    }

    return NaN;
};
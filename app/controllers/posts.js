import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addPost: function() {
            Ember.Logger.log('Add post-item...');
            this.send('add');
        }
    }
});

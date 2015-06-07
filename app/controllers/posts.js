import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        reverse: function() {
            Ember.Logger.log('Reverse Posts...');
            this.send('reversePosts');
        }
    }
});

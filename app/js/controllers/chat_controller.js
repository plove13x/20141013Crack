Crack.RoomsChatController = Ember.ArrayController.extend({
  needs: 'application',
  actions: {
    createMsg: function(){

    var msg = this.store.createRecord('message', {
        username: this.get('controllers.application.user.name'),
        message: this.get('newMessage'),
        timestamp: new Date(),
        email: this.get('controllers.application.user.email')
    });
     // this.set('newUsername', '');
    msg.save();
    this.set('newMessage', '');
    }
  },
});
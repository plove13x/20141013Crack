Crack.ChatsController = Ember.ArrayController.extend({
  needs: 'application',
  actions: {
    createMsg: function(){

    var msg = this.store.createRecord('chat', {
        username: this.get('controllers.application.user.name'),
        message: this.get('newMessage'),
        timestamp: new Date(),
    });
     // this.set('newUsername', '');
    msg.save();
    this.set('newMessage', '');
    }
  },
});
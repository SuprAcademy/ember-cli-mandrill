import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    sendMandrillEmail: function() {
      let emailObject = {
        message: {
          html: this.controllerFor('index').get('emailMessage'),
          subject: this.controllerFor('index').get('emailSubject'),
          from_email: this.controllerFor('index').get('fromEmail'),
          from_name: this.controllerFor('index').get('fromName'),
          to: [
              {
                  email: this.controllerFor('index').get('toEmail'),
                  name: this.controllerFor('index').get('toName'),
                  type: "to"
              }
          ]
        }
      }

      this.mandrill.send(emailObject).then(function(response) {
        console.log(response);
      });
    }
  }
});

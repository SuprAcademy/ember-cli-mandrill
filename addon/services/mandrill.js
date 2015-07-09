import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Service.extend({
  apiHost: null,
  apiKey: null,

  getUserInfo: function() {
    let apiHost = this.get('apiHost');
    return ajax({
      url: apiHost + 'users/info.json',
      type: 'post',
      data: {
        key: this.get('apiKey')
      },
    }).then(function(response) {
      return response;
    }, function(error) {
      return error;
    });

  },

  send: function(email) {
    let apiHost = this.get('apiHost');
    email.key = this.get('apiKey');
    return ajax({
      url: apiHost + 'messages/send.json',
      type: 'post',
      data: email
    }).then(function(response) {
      return response;
    }, function(error) {
      return error;
    });
  },

  sendTemplate: function(email) {
    let apiHost = this.get('apiHost');
    email.key = this.get('apiKey');
    return ajax({
      url: apiHost + 'messages/send-template.json',
      type: 'post',
      data: email
    }).then(function(response) {
      return response;
    }, function(error) {
      return error;
    });
  },

  search: function(query) {
    let apiHost = this.get('apiHost');
    query.key = this.get('apiKey');
    return ajax({
      url: apiHost + 'messages/search.json',
      type: 'post',
      data: query
    }).then(function(response) {
      return response;
    }, function(error) {
      return error;
    });
  },

  getEmailInfo: function(id) {
    let apiHost = this.get('apiHost');
    let email = {
      key: this.get('apiKey'),
      id: id
    };
    return ajax({
      url: apiHost + 'messages/info.json',
      type: 'post',
      data: email
    }).then(function(response) {
      return response;
    }, function(error) {
      return error;
    });
  },

  getEmailContent: function(id) {
    let apiHost = this.get('apiHost');
    let email = {
      key: this.get('apiKey'),
      id: id
    };
    return ajax({
      url: apiHost + 'messages/content.json',
      type: 'post',
      data: email
    }).then(function(response) {
      return response;
    }, function(error) {
      return error;
    });
  },

  parseEmail: function(raw) {
    let apiHost = this.get('apiHost');
    let email = {
      key: this.get('apiKey'),
      raw_message: raw
    };
    return ajax({
      url: apiHost + 'messages/parse.json',
      type: 'post',
      data: email
    }).then(function(response) {
      return response;
    }, function(error) {
      return error;
    });
  },

  sendRawEmail: function(email) {
    let apiHost = this.get('apiHost');
    email.key = this.get('apiKey');
    return ajax({
      url: apiHost + 'messages/send-raw.json',
      type: 'post',
      data: email
    }).then(function(response) {
      return response;
    }, function(error) {
      return error;
    });
  },

  listScheduled: function(recipient) {
    let apiHost = this.get('apiHost');
    let query = {
      key: this.get('apiKey'),
      to: recipient
    };
    return ajax({
      url: apiHost + 'messages/list-scheduled.json',
      type: 'post',
      data: query
    }).then(function(response) {
      return response;
    }, function(error) {
      return error;
    });
  },

  cancelScheduled: function(id) {
    let apiHost = this.get('apiHost');
    let query = {
      key: this.get('apiKey'),
      id: id
    };
    return ajax({
      url: apiHost + 'messages/cancel-scheduled.json',
      type: 'post',
      data: query
    }).then(function(response) {
      return response;
    }, function(error) {
      return error;
    });
  },

  reschedule: function(query) {
    let apiHost = this.get('apiHost');
    query.key = this.get('apiKey');
    return ajax({
      url: apiHost + 'messages/reschedule.json',
      type: 'post',
      data: query
    }).then(function(response) {
      return response;
    }, function(error) {
      return error;
    });
  }

});

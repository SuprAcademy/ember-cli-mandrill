# ember-cli-mandrill
<<<<<<< HEAD

This addon is the drop-in-and-use client implementation of Mandrill API for Ember.js. It integrates the service into your Ember.js web app which is proxying to the Mandrill and allows you to query for data with native-like API objects.

=======
>>>>>>> 7f77bf055c0f57d9f647e510880e39df8fa0929d


## Installation

<<<<<<< HEAD
```
ember install ember-cli-mandrill
```

## Initial Configuration

After installation, you need to configurate Mandrill client to do connection and access the API.

In your __config/environment.js__ file add and edit:

```
ENV['mandrill'] = {
  api: {
    host: 'https://mandrillapp.com/api/1.0/',
    key: 'YOUR_API_KEY_HERE'
  },

  smtp: {
    host: 'smtp.mandrillapp.com',
    port: 587,
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD'
  }

};
```

## Addon API and How-to-Use

Currently, only (Messages Calls API)[https://mandrillapp.com/api/docs/messages.JSON.html] is fully implemented.
All methods return a Promise, so you can do this:
```
this.mandrill.send(newEmail).then(function(response) {
  alert('Email sent!' + response);
});
```

The list of available actions:

__PAY ATTENTION: You don't need to pass your API key to any of the methods!__
=======
* ember install ember-cli-mandril
>>>>>>> 7f77bf055c0f57d9f647e510880e39df8fa0929d

What objects to pass to corresponding methods and how do they look, you should directly look up on [Messages Calls API](https://mandrillapp.com/api/docs/messages.JSON.html).

#### `getUserInfo()`
Returns you information about the current API user. Accepts no parameters. Proxying to [Users#info](https://mandrillapp.com/api/docs/users.JSON.html#method=info) Mandrill API method.
```
this.mandrill.getUserInfo().then(function(response) {
//do whatever you want with 'response' object
});
```
#### `send()`
Sends a new transactional email. Accepts __email__ object as a parameter. Proxying to [Messages#send](https://mandrillapp.com/api/docs/messages.JSON.html#method=send) Mandrill API method.
```
this.mandrill.send(newEmail).then(function(response) {
//do whatever you want with 'response' object
});
```
#### `sendTemplate()`
Sends a new transactional email using a template. Accepts __email__ object as a parameter. Proxying to [Message#send-template](https://mandrillapp.com/api/docs/messages.JSON.html#method=send-template) Mandrill API method.
```
this.mandrill.sendTemplate(newEmail).then(function(response) {
//do whatever you want with 'response' object
});
```
#### `search()`
Searches recently sent messages and optionally narrow by date range, tags, senders, and API keys. Accepts __query__ object as a parameter. Proxying to [Messages#search](https://mandrillapp.com/api/docs/messages.JSON.html#method=search) Mandrill API method.
```
this.mandrill.search(query).then(function(response) {
//do whatever you want with 'response' object
});
```
#### `getEmailInfo()`
Gets the information for a single recently sent message. Accepts email __id__ as a parameter. Proxying to [Messages#info](https://mandrillapp.com/api/docs/messages.JSON.html#method=info) Mandrill API method.
```
this.mandrill.getEmailInfo(5).then(function(response) {
//do whatever you want with 'response' object
});
```
#### `getEmailContent()`
Gets the full content of a recently sent message. Accepts email __id__ as a parameter. Proxying to [Messages#content](https://mandrillapp.com/api/docs/messages.JSON.html#method=content) Mandrill API method.
```
this.mandrill.getEmailContent(7).then(function(response) {
//do whatever you want with 'response' object
});
```
#### `parseEmail()`
Parses the full MIME document for an email message, returning the content of the message broken into its constituent pieces. Accepts __raw__ email object as a parameter. Proxying to [Messages#parse](https://mandrillapp.com/api/docs/messages.JSON.html#method=parse) Mandrill API method.
```
this.mandrill.parseEmail(raw).then(function(response) {
//do whatever you want with 'response' object
});
```
#### `sendRawEmail()`
Takes a raw MIME document for a message, and send it exactly as if it were sent through Mandrill's SMTP servers. Accepts __email__ object as a parameter. Proxying to [Messages#send-raw](https://mandrillapp.com/api/docs/messages.JSON.html#method=send-raw) Mandrill API method.
```
this.mandrill.sendRawEmail(email).then(function(response) {
//do whatever you want with 'response' object
});
```
#### `listScheduled()`
Queries your scheduled emails. Accepts __recipient__ string as a parameter. Proxying to [Messages#list-scheduled](https://mandrillapp.com/api/docs/messages.JSON.html#method=list-scheduled) Mandrill API method.
```
this.mandrill.listScheduled(recipient).then(function(response) {
//do whatever you want with 'response' object
});
```
#### `cancelScheduled()`
Cancels a scheduled email. Accepts email __id__ as a parameter. Proxying to [Messages#cancel-scheduled](https://mandrillapp.com/api/docs/messages.JSON.html#method=cancel-scheduled) Mandrill API method.
```
this.mandrill.cancelScheduled(9).then(function(response) {
//do whatever you want with 'response' object
});
```
#### `reschedule()`
Reschedules a scheduled email. Accepts __query__ object as a parameter. Proxying to [Messages#reschedule](https://mandrillapp.com/api/docs/messages.JSON.html#method=reschedule).
```
this.mandrill.cancelScheduled(query).then(function(response) {
//do whatever you want with 'response' object
});
```

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

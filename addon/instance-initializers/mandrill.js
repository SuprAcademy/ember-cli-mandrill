export function initialize(instance) {
  let config = instance.container.loookupFactory('config:environment');
  let service = instance.container.lookup('mandrill:main');
  service.set('host', config.mandrill.host);
  service.set('port', config.mandrill.port);
  service.set('username', config.mandrill.username);
  service.set('password', config.mandrill.password);
}

export default {
  name: 'mandrill',
  initialize: initialize
};

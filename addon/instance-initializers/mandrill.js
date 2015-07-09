export function initialize(instance) {
  let config = instance.container.lookupFactory('config:environment');
  let service = instance.container.lookup('mandrill:main');
  service.set('apiHost', config.mandrill.api.host);
  service.set('apiKey', config.mandrill.api.key);
}

export default {
  name: 'mandrill',
  initialize: initialize
};

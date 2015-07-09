import Mandrill from '../services/mandrill';

export function initialize(registry, application) {
  registry.register("mandrill: main", Mandrill);
  application.inject('route', 'mandrill', 'mandrill:main');
  application.inject('controller', 'mandrill', 'mandrill:main');
}

export default {
  name: 'mandrill',
  initialize: initialize
};

import tracker from './tracker';
import painter from './painter';

const client = (options) => { // eslint-disable-line arrow-body-style
  return {
    tracker: tracker(options.tracker),
    painter: painter(options.painter)
  };
};

export default client;

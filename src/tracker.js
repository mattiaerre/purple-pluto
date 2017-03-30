import makeModel from './make-model';

const tracker = ({ target }) => {
  let tracking = false;
  let data = [];

  target.onmousemove = (e) => { // eslint-disable-line
    if (tracking) {
      data.push(makeModel(e));
    }
  };

  return {
    getData: () => (data),
    reset: () => { data = []; },
    start: () => { tracking = true; },
    stop: () => { tracking = false; }
  };
};

export default tracker;

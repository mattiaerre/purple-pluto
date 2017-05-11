const factory = (target) => {
  let tracking = false;
  const data = [];

  target.onmousemove = (e) => { // eslint-disable-line
    if (tracking) {
      data.push(e);
    }
  };

  return {
    start: () => { tracking = true; },
    stop: () => { tracking = false; },
    data
  };
};

module.exports = factory;

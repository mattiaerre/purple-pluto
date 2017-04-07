const makeModel = (e) => { // eslint-disable-line arrow-body-style
  return {
    x: e.pageX,
    y: e.pageY,
    value: 1,
    radius: 10
  };
};

export default makeModel;

import h337 from 'heatmap.js';

const painter = ({ container }) => {
  const paint = (data) => {
    const hitmap = h337.create({ container });
    hitmap.setData({ data });
  };

  return {
    paint
  };
};

export default painter;

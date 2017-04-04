import h337 from 'heatmap.js'; // see: https://www.patrick-wied.at/static/heatmapjs/docs.html

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

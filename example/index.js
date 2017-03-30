((client) => {
  const options = {
    tracker: {
      target: document
    },
    painter: {
      container: document.body
    }
  };

  const { tracker, painter } = client(options);

  let data = [];

  document.getElementById('btnTrackerGetData').onclick = (e) => {
    e.preventDefault();
    console.log('tracker.getData');
    data = tracker.getData();
  };
  document.getElementById('btnTrackerReset').onclick = (e) => {
    e.preventDefault();
    console.log('tracker.reset');
    tracker.reset();
  };
  document.getElementById('btnTrackerStart').onclick = (e) => {
    e.preventDefault();
    console.log('tracker.start');
    tracker.start();
  };
  document.getElementById('btnTrackerStop').onclick = (e) => {
    e.preventDefault();
    console.log('tracker.stop');
    tracker.stop();
  };

  document.getElementById('btnPainterPaint').onclick = (e) => {
    e.preventDefault();
    console.log('painter.paint');
    painter.paint(data);
  };
})(window['purple-pluto'].client);

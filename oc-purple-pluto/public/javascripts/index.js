/* eslint-disable no-console */

((client) => {
  const options = {
    tracker: {
      target: document.getElementsByClassName('master-container')[0]
    },
    painter: {
      container: document.getElementsByClassName('master-container')[0]
    }
  };

  const { tracker, painter } = client(options);

  let data = [];

  document.getElementById('tracker-reset').onclick = (e) => {
    e.preventDefault();
    console.log('tracker.reset');
    tracker.reset();
  };
  document.getElementById('tracker-start').onclick = (e) => {
    e.preventDefault();
    console.log('tracker.start');
    tracker.start();
  };
  document.getElementById('tracker-stop').onclick = (e) => {
    e.preventDefault();
    console.log('tracker.stop');
    tracker.stop();
    console.log('tracker.getData');
    data = tracker.getData();
  };

  document.getElementById('painter-paint').onclick = (e) => {
    e.preventDefault();
    console.log('painter.paint');
    painter.paint(data);
  };
})(window['purple-pluto'].client);

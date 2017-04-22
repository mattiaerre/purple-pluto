/* eslint-disable no-console, no-eval */

((client) => {
  const params = JSON.parse(document.querySelector('#oc-purple-pluto script').getAttribute('data-params'));

  const options = {
    tracker: {
      target: eval(params.trackerTarget)
    },
    painter: {
      container: eval(params.painterContainer)
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

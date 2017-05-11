const factory = require('./tracker');

describe('tracker', () => {
  const target = {};

  const tracker = factory(target);

  it('should have a start method', () => {
    expect(typeof tracker.start).toBe('function');
  });

  it('should have a stop method', () => {
    expect(typeof tracker.stop).toBe('function');
  });

  it('should have a data property', () => {
    expect(typeof tracker.data).toBe('object');
  });

  describe('start', () => {
    tracker.start();

    it('should have empty data', () => {
      expect(tracker.data.length).toBe(0);
    });

    it('should have 1 event after a mouse move', () => {
      const e = { x: 100, y: 200 };

      target.onmousemove(e);

      expect(tracker.data.length).toBe(1);
      expect(tracker.data).toMatchSnapshot();
    });

    it('should have 2 events after another mouse move', () => {
      const e = { x: 300, y: 400 };

      target.onmousemove(e);

      expect(tracker.data.length).toBe(2);
      expect(tracker.data).toMatchSnapshot();
    });
  });

  describe('stop', () => {
    it('should have 2 events after another mouse move', () => {
      tracker.stop();

      const e = { x: 500, y: 600 };

      target.onmousemove(e);

      expect(tracker.data.length).toBe(2);
      expect(tracker.data).toMatchSnapshot();
    });
  });
});

import client from './client';

test('client', () => {
  const options = { tracker: { target: {} }, painter: {} };
  expect(client(options)).toMatchSnapshot();
});

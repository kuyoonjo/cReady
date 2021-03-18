import { cReady } from '../src/cReady';

test('Should ready after 2s', async () => {
  const ready = new cReady();
  const timeStart = new Date().getTime();
  setTimeout(() => {
    ready.setAsReady();
  }, 2000);
  await ready.ready();
  const timeEnd = new Date().getTime();
  expect(timeEnd - timeStart > 1000).toBe(true);
});

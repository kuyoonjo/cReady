[![Build Status](https://travis-ci.org/kuyoonjo/cReady.svg?branch=master)](https://travis-ci.org/kuyoonjo/cReady.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/kuyoonjo/cReady/badge.svg?branch=master)](https://coveralls.io/github/kuyoonjo/cReady?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# Intro

> Class Definition

```ts
class cReady {
  /**
   * Sets status to ready.
   */
  public setAsReady(): void;

  /**
   * Returns status
   */
  public ready(): Promise<void>;
}
```

> Usage

```ts
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
```

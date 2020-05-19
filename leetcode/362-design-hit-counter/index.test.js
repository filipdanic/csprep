import HitCounter from './index';

describe('HitCounter', () => {
  it('Passes the problem example', () => {
    const counter = new HitCounter();
    counter.hit(1);
    counter.hit(2);
    counter.hit(3);
    expect(counter.getHits(4)).toEqual(3);
    counter.hit(300);
    expect(counter.getHits(300)).toEqual(4);
    expect(counter.getHits(301)).toEqual(3);
  });

  it('Full interval test', () => {
    const counter = new HitCounter();
    for (let i = 1; i <= 300; i++) {
      counter.hit(i);
    }
    expect(counter.getHits(300)).toEqual(300);
  });

  it('High load at single point', () => {
    const counter = new HitCounter();
    for (let i = 1; i <= 1000; i++) {
      counter.hit(1);
    }
    expect(counter.getHits(300)).toEqual(1000);
  });
});

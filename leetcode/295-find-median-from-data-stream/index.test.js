import MedianFinder from './index';

describe('MedianFinder', () => {
  test('Problem example', () => {
    const finder = new MedianFinder();
    finder.addNum(1);
    finder.addNum(2);
    expect(finder.findMedian()).toBe(1.5);
    finder.addNum(3);
    expect(finder.findMedian()).toBe(2);
  });

  test('Further example', () => {
    const finder = new MedianFinder();
    finder.addNum(1);
    expect(finder.findMedian()).toBe(1);
    finder.addNum(2);
    expect(finder.findMedian()).toBe(1.5);
    finder.addNum(3);
    expect(finder.findMedian()).toBe(2);
    finder.addNum(4);
    expect(finder.findMedian()).toBe(2.5);
    finder.addNum(1000000);
    expect(finder.findMedian()).toBe(3);
    finder.addNum(1000000);
    expect(finder.findMedian()).toBe(3.5);
  });
});


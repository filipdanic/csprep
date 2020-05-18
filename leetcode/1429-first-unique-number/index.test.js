import FirstUnique from './index';

describe('FirstUnique', () => {
  test('Problem example', () => {
    const firstUnique = new FirstUnique([2, 3, 5]);
    expect(firstUnique.showFirstUnique()).toBe(2);
    firstUnique.add(5);
    expect(firstUnique.showFirstUnique()).toBe(2);
    firstUnique.add(2);
    expect(firstUnique.showFirstUnique()).toBe(3);
    firstUnique.add(3);
    expect(firstUnique.showFirstUnique()).toBe(-1);
  });

  test('Removing uniques', () => {
    const firstUnique = new FirstUnique([1, 2, 3]);
    expect(firstUnique.showFirstUnique()).toBe(1);
    firstUnique.add(1);
    expect(firstUnique.showFirstUnique()).toBe(2);
    firstUnique.add(2);
    expect(firstUnique.showFirstUnique()).toBe(3);
    firstUnique.add(3);
    expect(firstUnique.showFirstUnique()).toBe(-1);
  });

  test('No uniques, followed by 1', () => {
    const firstUnique = new FirstUnique([7, 7, 7, 8, 8]);
    expect(firstUnique.showFirstUnique()).toBe(-1);
    firstUnique.add(7);
    expect(firstUnique.showFirstUnique()).toBe(-1);
    firstUnique.add(8);
    expect(firstUnique.showFirstUnique()).toBe(-1);
    firstUnique.add(1);
    expect(firstUnique.showFirstUnique()).toBe(1);
  });
});

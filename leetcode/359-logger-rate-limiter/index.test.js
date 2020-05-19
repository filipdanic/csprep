import Logger from './index';

describe('Logger rate limiter', () => {
  test('Passes the problem example', () => {
    const logger = new Logger();
    expect(logger.shouldPrintMessage(1, 'foo')).toBe(true);
    expect(logger.shouldPrintMessage(2, 'bar')).toBe(true);
    expect(logger.shouldPrintMessage(3, 'foo')).toBe(false);
    expect(logger.shouldPrintMessage(8, 'bar')).toBe(false);
    expect(logger.shouldPrintMessage(10, 'foo')).toBe(false);
    expect(logger.shouldPrintMessage(11, 'foo')).toBe(true);
  });

  test('Aggressive single-moment print', () => {
    const logger = new Logger();
    expect(logger.shouldPrintMessage(1, 'foo')).toBe(true);
    for (let i = 0; i < 1000; i++) {
      expect(logger.shouldPrintMessage(1, 'foo')).toBe(false);
    }
  });

  test('Print every 10th message', () => {
    const logger = new Logger();
    for (let i = 0; i < 1000; i++) {
      expect(logger.shouldPrintMessage(i, 'foo')).toBe(i % 10 === 0);
    }
  });
});

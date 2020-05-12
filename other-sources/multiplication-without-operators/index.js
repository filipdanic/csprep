/**
 * @param a
 * @param b
 */
const multiply = (a, b) => {
  if (a === 0 || b === 0) {
    return 0;
  }

  if (b > 0) {
    return a + multiply(a, b - 1);
  } else {
    return -(a + multiply(a, Math.abs(b) - 1));
  }
};

export default multiply;

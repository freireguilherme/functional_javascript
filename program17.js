const curry = (fn, n) => {
  n = n || fn.length;

  return (arg) => {
    if (n <= 1) return fn(arg);
    return curry(fn.bind(this, arg), n-1);
  };
};

module.exports = curry;
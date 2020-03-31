const Spy = (target, method) => {
  const funcaoOriginal = target[method];
  const result = {
    count: 0,
  };

  target[method] = () => {
    result.count++;
    return funcaoOriginal.apply(this, arguments)
  }

  return result;
};

module.exports = Spy;
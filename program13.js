const repeat = (operacao, num) => {
  if (num <= 0) return;

  operacao();

  if (num % 100 === 0) {
    setTimeout(() => {
      repeat(operacao, --num)
    });
  } else {
    repeat(operacao, --num);
  };
};

module.exports = repeat;
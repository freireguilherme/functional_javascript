const repeat = (operacao, num) => {
  () =>{
    if (num <= 0) return operacao();
    return repeat (operacao, --num);
  }
};

const trampolim = (fn) => {
  while(fn && typeof fn === 'function')
    fn = fn();
};

module.exports = (operacao, num) => {
  trampolim(function() {
    return repeat(operacao, num);
  });

}
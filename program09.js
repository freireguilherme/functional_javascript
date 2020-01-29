var slice = Array.prototype.slice;

function logger(namespace) {
  return function() {                                                     // aqui, aplicando apply, cosole.log irá
    console.log.apply(null, [namespace].concat(slice.call(arguments)));   // receber um array, concatenando namespace
  };                                                                      // com cada palavra (slice) do array recebido
}                                                                         // primeiro argumento de apply pode ser null ou mesmo 'console'

module.exports = logger;

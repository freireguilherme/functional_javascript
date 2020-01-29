function duckCount() {
  return Array.prototype.slice.call(arguments).filter(obj => {      // percorremos o arry com slice e aplicamos filter
    return Object.prototype.hasOwnProperty.call(obj, "quack");      // para dar match com quack e retornar seu tamnho
  }).length;
}

module.exports = duckCount;

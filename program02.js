function repeat (operation, num) {
  if(num <= 0)											// se num = 0, chama operation();
  	return operation();
  return repeat(operation, --num); 	// se num != 0, chama repeat com decremento de num, recursivo
}

module.exports = repeat;
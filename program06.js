function countWords(inputWords) {
    return inputWords.reduce( (acumulador, valorAtual) =>{       // primeiro argumento, callback function
        if(valorAtual in acumulador)
            acumulador[valorAtual]++;                           // incrementa ou inicializa com 1.
        else
            acumulador[valorAtual] = 1;
        return acumulador;
    }, {});                                                     // segundo argumento de reduce, vazio
};

module.exports = countWords;
function reduce(arr, fn, init){                                                 // fn é dada pelo proprioworkshop
    return (function reduceRecursive(index, valor){
        if(index >= arr.length) return valor;                                   // condição final
        
        return reduceRecursive(index + 1, fn(valor, arr[index], index, arr));   // calcula os valores do prox passo
    })(0, init);                                                                // IIFE, uma função expressao imediatamente invocada com esses valores iniciais
};

module.exports = reduce;
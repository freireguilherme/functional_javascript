function countWords(inputWords) {
    return inputWords.reduce((acumudalor, valorAtual) =>{
        if(acumudalor[valorAtual]){
            acumudalor[valorAtual]++;
        }else
            acumudalor[valorAtual] = 1;
        return acumudalor;
    }, {});
};

module.exports = countWords;
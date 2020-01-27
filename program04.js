function getShortMessages(messages){
    return messages.filter((m) =>{      // metodo .filter para 'selecionar' apenas messages.length < 50
        return m.message.length < 50;
    }).map((m) => {
        return m.message;               // depois de filter, .map passa por cada um deles retornando a propertie message
    });
}                                       //interessante frisar que pode-se inverter a ordem, primeiro map depois filter

module.exports = getShortMessages;
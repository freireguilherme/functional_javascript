module.exports = (namespace) => {               // usando bind fica muito simples vincular o namespace aa mensagem
  return console.log.bind(null, namespace);     // primeiro arg pode ser console ou null
}
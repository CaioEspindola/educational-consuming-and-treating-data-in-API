var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
  .then(resposta => resposta.json())
  .then(r => {
    //Parâmetro do if e else nao precisa especificar se é true
    if (r.erro) {
      throw Error('Esse CEP não existe!')
    } else {
      console.log(r)
    }
  })
  .catch(erro => console.log(erro))
  .finally(mensagem => console.log('Processamento concluído'))

console.log(consultaCEP)

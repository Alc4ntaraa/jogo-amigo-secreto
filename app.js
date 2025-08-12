const amigos = []

function adicionarAmigo() {
    const input = document.getElementById('amigo')
    const nome = input.value.trim() // trim é usado para retirar os espaços extras

    // se o campo nome ficar vazio, aparece o alerta pedido para fornecer um nome.
    if (nome === '') {
        alert('Por favor, digite um nome')
        return // sai da função para não continuar
    }
}

// adiciona o nome no array
amigos.push(nome)
// atualiza a lista na tela
atualizarLista()
// limpa o campo para o próximo nome
input.value

function atualizarLista() {
    const lista = document.getElementById('listaAmigos')

    // limpa a lista para não repetir os nomes
    lista.innerHTML = ''

    for (let amigo of amigos) {
        let item = document.createElement("li")
        item.textContent = amigo
        lista.appendChild(item)
    }
}

function sortearAmigo(){
    if (amigos.length == 0) { 
    alert('Por favor, adicione pelo menos um nome antes de sortear.')
    return // para a função aqui, nada mais acontece
  }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length)
    const amigoSorteado = amigos[indiceAleatorio]
    document.getElementById('resultado').innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`
    }
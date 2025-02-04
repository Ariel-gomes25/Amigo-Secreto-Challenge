//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; 
function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo").value;
    const nome = nomeInput.value.trim(); // Captura o valor e remove espaços extras
    // Validação para verificar se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;  // Sai da função se o nome estiver vazio
    }
    // Adiciona o nome ao array de amigos
    amigos.push(nome);
    // Atualiza a lista na página
    atualizarLista();
    // Limpa o campo de entrada
    nomeInput.value = "";
}
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";  // Limpa a lista antes de atualizar
    // Adiciona cada amigo como um item de lista
    amigos.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
} 

function sortearAmigo() {
    // Verifica se há amigos no array
    if (amigos.length === 0) {
        document.getElementById('resultadoSorteio').innerHTML = "Não há amigos para sortear!";
        return;  // Sai da função se o array estiver vazio
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o amigo sorteado usando o índice aleatório
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o amigo sorteado
    document.getElementById('resultadoSorteio').innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
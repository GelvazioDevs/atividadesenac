function gerarListaSorteioCorrecao() {
    console.log("SORTEANDO ALUNOS...");
    let listaAlunosCorrigir = document.querySelector("#lista-alunos-corrigir");
    let listaAlunosCorrigidos = document.querySelector("#lista-alunos-corrigidos");

    listaAlunosCorrigir.innerHTML = "";
    listaAlunosCorrigidos.innerHTML = "";

    const aListaUsuariosGithub = getListaAlunosGithub();
    aListaUsuariosGithub.forEach(function(data, key) {
        const usucodigo = data[0];
        const aluno = data[2];

        listaAlunosCorrigir.innerHTML += `<div class="checkbox">
                                                <label for="${usucodigo}">${aluno}</label>
                                                <input type="checkbox" id="corrigir_${usucodigo}"/>
                                            </div>`;

    });

    // EMBARALHA O ARRAY E DEFINE QUEM SERA CORRIGIDO
    aListaUsuariosGithub.sort();

    aListaUsuariosGithub.forEach(function(data, key) {
        const usucodigo = data[0];
        const aluno = data[2];

        listaAlunosCorrigidos.innerHTML += `<div class="checkbox">
                                                <label for="${usucodigo}">${aluno}</label>
                                                <input type="checkbox" id="corrigido_${usucodigo}"/>
                                            </div>`;


    });

}

async function executaSorteioCorrecao() {

    const aListaUsuariosCorrecao = new Array();
    const aListaUsuariosSorteados = new Array();
    const aListaUsuariosGithub = getListaAlunosGithub();
    aListaUsuariosGithub.forEach(function(data, key) {
        const usucodigo = data[0];

        console.log("Usuario atual:" + usucodigo);

        const usucodigo_sorteado = Math.floor(Math.random() * 31);

        let novoSorteio = false;
        aListaUsuariosSorteados.forEach(function(data, key) {
            // Se for o usuario atual ou se ja tiver sido sorteado, sorteia novamente
            if (data == usucodigo_sorteado || data == usucodigo) {
                // Executa novo sorteio
                novoSorteio = true;
            }
        });

        if (novoSorteio) {
            console.log("NOVO SORTEIO SOLICITADO...");
            // return executaSorteioAleatorio(usucodigo, aListaUsuariosSorteados);
        } else {
            // SOMENTE ADICIONA QUANDO DER CERTO
            aListaUsuariosSorteados.push(usucodigo_sorteado);

            console.log("Usuario Corretor:" + usucodigo + " - Usuario sendo corrigido:" + usucodigo_sorteado);

            aListaUsuariosCorrecao.push(new Array(usucodigo, usucodigo_sorteado));
        }
    });

    document.querySelector("#sorteio_correcao").value = JSON.stringify(aListaUsuariosCorrecao);

    console.log("LISTA DE CORRECAO");
    console.log(JSON.stringify(aListaUsuariosCorrecao));

    // recarrega os usuarios do combo de usuario
    carregaUsuarios();
}

function todosUsuariosGithubSorteados() {
    // recupera o array de aluno sorteado
    const lista_usucodigo_sorteado = document.querySelector("#usucodigo_sorteado").value;

    const aListaSorteados = lista_usucodigo_sorteado.split(",");

    debugger;

    const aListaUsuariosGithub = getListaAlunosGithub();
    let todosSorteados = true;
    aListaUsuariosGithub.forEach(function(data, key) {

        debugger;

        const usucodigo_atual = data[0];
        // Se houver algum usuario do github que nao tenha sido sorteado, marca como false
        if (!aListaSorteados.includes(usucodigo_atual)) {
            todosSorteados = false;
        }
    });

    return todosSorteados;
}
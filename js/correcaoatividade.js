// Correcao se a atividade foi feita ou nao

function onLoadCorrecao() {
    const aListaAtividades = new Array(1, 2, 3, 4, 5);

    const listaAtividadeTela = document.querySelector("#lista_atividades");
    aListaAtividades.forEach(function(data, key) {
        console.log("Atividade: " + data);

        const li = `<li>Atividade: ${data}</li>`;

        listaAtividadeTela.innerHTML += li;
    });

    const aListaExercicioAlunoAtividades = new Array(
        new Array(
            1, // codigo aluno
            2
        )
    );


    // DATA ANALISE = 24-04-2024 AS 23:30
    // ATIVIDADE 01
    aListaExercicioAlunoAtividades["PENDENTES"] = [21, 22, 14, 2, 32, 30];
    // 30 - VINICIUS - FALTOU->2,5,6,116,1111,1112,1113,1114,1115
    // 14 - ACEROLA - FALTOU 1,2,3,4,5,6
    // 32 - HELTON - FALTOU O NUMERO 02
    // 21 - YAN - FALTOU QUASE TODOS
    // 22 E 2 - MIKAEL E ANA LUIZA ZANATA - FALTOU COLOCAR NA ORDEM CERTA...

    // ATIVIDADE 02
    aListaExercicioAlunoAtividades["PENDENTES"] = [12, 4];
    // DIEGO RICARDO GEISER - FALTOU 13,14,15
    // GILIARD - FALTOU 14 E 15

    // ATIVIDADE 03
    aListaExercicioAlunoAtividades["PENDENTES"] = [21, 14, 12];
    // 14 - ACEROLA - FALTOU - 11
    // 12 - GILIARD - FALTOU DO 5 ATE O 12
    // 21 - YAN - FALTOU 3,4,9,10,11

    // ATIVIDADE 04
    aListaExercicioAlunoAtividades["PENDENTES"] = [32, 13];

    // ATIVIDADE 05
    aListaExercicioAlunoAtividades["PENDENTES"] = [14, 8, 30, 13, 12, 17, 32, 21, 24];




}
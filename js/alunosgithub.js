function loadAlunosGithub(data_exercicios) {
    const aListaAlunos = new Array(
        // codigo - login - status - nome - data - observacao
        // Array(0, "99", "status_ok", "Codigo da Lista", data_exercicios, "ok"),
        Array(1, 'MaxwellBAldo', 'status_ok', 'Maxwell BAldo', data_exercicios, ''),
        Array(2, 'murilocenzi6', 'status_ok', 'Murilo Cenzi', data_exercicios, ''),
        Array(3, 'thalesgois2025', 'status_ok', 'Tales Gois', data_exercicios, ''),
        Array(4, 'https://github.com/Borges66', 'status_ok', 'Enrico Borges Pedron', data_exercicios, ''),
        Array(5, 'Caio245js', 'status_ok', 'Caio', data_exercicios, ''),
        Array(6, 'https://github.com/jragrello', 'status_ok', 'CARLOS AMAURY AGRELLO JUNIOR', data_exercicios, ''),
        Array(7, 'Will1712', 'status_ok', 'Bernardo Carvalho Will', data_exercicios, ''),
        Array(8, 'https://github.com/luizpauloao', 'status_ok', 'Luiz Paulo Alves de Oliveira', data_exercicios, ''),
        Array(9, 'joaophheinz', 'status_ok', 'Joao pedro heinz', data_exercicios, ''),
        Array(10, 'https://github.com/Malu-Oliveira', 'status_ok', 'Maria Luisa Farias de Oliveira', data_exercicios, ''),
        Array(11, 'https://github.com/IPedringoI/IPedringoI.git', 'status_ok', 'Pedro Eduardo Dias Nacimento', data_exercicios, ''),
        Array(12, 'crismartinssc', 'status_ok', 'Cristian Martins', data_exercicios, ''),
        Array(13, 'https://github.com/Pam1590', 'status_ok', 'Pâmela Kunze', data_exercicios, ''),
        Array(14, 'estou aprendendo', 'status_ok', 'caroline dos santo soares', data_exercicios, ''),
        Array(15, 'https://github.com/IPedringoI/IPedringoI.git', 'status_ok', 'Pedro Eduardo Dias Nacimento', data_exercicios, ''),
        Array(16, 'https://github.com/VanessaPereiradaSilva/Projetos-senac.git', 'status_ok', 'Vanessa Pereira da Silva', data_exercicios, ''),
        Array(17, 'Eduardos0BR', 'status_ok', 'Eduardo Selbmann de Liz e Souza', data_exercicios, ''),
        Array(18, 'anderson-kana', 'status_ok', 'Anderson Kannenberg', data_exercicios, ''),
        Array(19, 'https://github.com/nananzoka/projetos-senac2.git', 'status_ok', 'natasha nunes dos santos', data_exercicios, ''),
        Array(20, 'pbxxx', 'status_ok', 'Pablo Alexandre Moraes Almeida', data_exercicios, ''),
        Array(21, 'Nicole1668', 'status_ok', 'Nicole Nasato Zunino', data_exercicios, ''),
        Array(22, 'https://github.com/BrunaBandeira2609/Projeto-Senac-.git', 'status_ok', 'Bruna Dos Santos Bandeira ', data_exercicios, ''),
        Array(23, 'anderson-kana', 'status_ok', 'anderson kannenberg', data_exercicios, ''),
        Array(24, 'Juninfelt', 'status_ok', 'Carlos Roberto Campestrini Junior ', data_exercicios, ''),
    );

    const aListaDesistentes = getListaDesistentes();

    aListaAlunos.forEach(function (value, key) {
        const codigo = value[0];
        const user = value[1];
        const status = value[2];
        const nome = value[3];
        const data = value[4];
        const observacao = value[5];

        let alunoDesistente = false;
        if (aListaDesistentes.includes(codigo)) {
            alunoDesistente = true;
        }

        if (!alunoDesistente) {
            loadDataFromHTML(user, codigo, status, data, observacao, nome);
        }
    });
}

function getListaDesistentes() {
    return [-1];
}

function loadDataFromHTML(user, codigo, status, data_status, observacao, nome) {
    if (codigo == 1) {
        status = "status_ok";
    }

    user = user.replace("https://github.com/", "");

    let projeto = 'projetos-senac';

    // let link_github = "<a class='link-user' href='https://github.com/" + user + "'>" + user + "</a>";
    let link_github = "<a class='link-user' href='https://github.com/" + user + "/" + projeto + "'>" + user + "</a>";

    // carrega na table os dados do github
    let details = `<td class="containerTable-lblValue">
                        <button class="tableValue-btnOption">Details</button>
                        <button class="tableValue-btnOption">Edit</button>
                        <button class="tableValue-btnOption">Delete</button>
                    </td>`;

    details = '';
    let body = document.querySelector(".containerTable-body");
    body.innerHTML += `<tr>
                                <td class="containerTable-lblValue ` + status + ` center">` + codigo + `</td>
                                <td class="containerTable-lblValue ` + status + `">` + link_github + `</td>
                                <td class="containerTable-lblValue ` + status + `">` + nome + `</td>
                                <td class="containerTable-lblValue ` + status + ` center">` + data_status + `</td>
                                <td class="containerTable-lblValue ` + status + `">` + status + `</td>
                                <td class="containerTable-lblValue ` + status + `">` + observacao + `</td>
                                ` + details + `
                            </tr>`;
}

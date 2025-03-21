const SUPABASE_INSTANCE = callInstanceSupabase();


function onloadPage() {
    let token_logado = localStorage.getItem('token_logado');

    if (token_logado != null) {
        token_logado = token_logado.split(".");

        if (token_logado.length === 3) {
            // esconde a tela de login
            $("#dados-login").hide();


            // Atualiza os dados do usuario
            // chama a api

            // mostra a tela de dados
            $("#root").show();

            mostraPagina(true);
        }
    }
}

function efetuaLogin() {
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    if (email == "" || senha == "") {
        $("#alert").show();
        document.querySelector("#alert").innerHTML = "E-mail ou senha em branco!";
        return;
    }

    $("#alert").hide();

    let validaLogin = false;
    sessionStorage.setItem("token_logado", "");
    if (email == "senac@email.com") {
        if (senha == "Senac.2024") {
            validaLogin = true;
            sessionStorage.setItem("token_logado", "54a80097f23822cb26b6d5a980968601");
            sessionStorage.setItem("usucodigo_logado", "1");
            window.location.href = `alunos.html`;

            validaLogin = true;
        }
    }


    if (!validaLogin) {
        validaLoginAlunos(email, senha);
    }
}

async function existeUsuarioAlunoBanco(usulogin, ususenha) {
    // WITH FILTERING
    let { data: usuario, error } = await SUPABASE_INSTANCE
        .from('usuario')
        .select("*")
        // Filters
        .eq('usulogin', usulogin)
        .eq('ususenha', ususenha)

    if (Array.isArray(usuario)) {
        if (usuario.length > 0) {
            return usuario;
        }
    }

    return false;
}


async function validaLoginAlunos(usulogin, ususenha) {

    const UsuarioExiste = await existeUsuarioAlunoBanco(usulogin, ususenha);
    if (!UsuarioExiste) {
        mostraMensagem("Usuario ou senha invalido!");
    }

    // seta os dados da sessao
    console.log("Usuario logado:" + JSON.stringify(UsuarioExiste[0]));

    const Usuario = UsuarioExiste[0];

    const usucodigo_logado = Usuario.usucodigo;

    console.log("usucodigo:" + usucodigo_logado);

    sessionStorage.setItem("token_logado", "54a80097f2382ftdats5a980968601");
    if (usucodigo_logado == 1) {
        sessionStorage.setItem("token_logado", "54a80097f23822cb26b6d5a980968601");
    }

    sessionStorage.setItem("usucodigo_logado", usucodigo_logado);

    // redireciona para a pagina de correção

    window.location.href = `github.html`;

    return true;
}

function loadPaginaLogin(data) {
    var data = JSON.stringify(data);

    let dadoslogin = JSON.parse(data);

    const validaLogin = dadoslogin.dadoslogin.login;
    const usuario = dadoslogin.dadoslogin.usuemail;
    const token_logado = dadoslogin.dadoslogin.token;

    localStorage.setItem('token_logado', token_logado);

    console.log(data);

    let mostra = false;
    if (validaLogin) {
        mostra = true;
    }

    mostraPagina(mostra);
}

function mostraPagina(mostra) {
    // Esconde

    if (mostra) {
        // Esconde a tela de login
        $("#dados-login").hide();

        // esconde a tela de dados
        $("#root").show();

        $("#alert").show();

        document.querySelector("#alert").innerHTML = "Usuario logado com sucesso!";

        // loadUsersFeedback("TODOS");
    }
}

function loadUsersFeedback(statusParam) {
    // Limpa a tabela, antes de carregar os dados
    let body = document.querySelector(".containerTable-body");
    body.innerHTML = "";


    let token_logado = localStorage.getItem('token_logado');

    const bodyApi = {
        token_logado
    };

    callApi("POST", "feedbacks", bodyApi, function(dataApi) {
        const aDadosFeedback = dataApi;

        // Percorre as datas e lista os status por usuarios
        aDadosFeedback.forEach(function(data, key) {

            const status = data.statusatividade;
            const codigoLista = data.idatividade;
            const data_exercicios = data.dataentregaatividade;
            const github = data.github;
            const nome = data.usunome;
            const observacao = data.feedback;

            if (statusParam == "TODOS" || statusParam == status) {
                loadDataFromHTML(github, codigoLista, status, data_exercicios, observacao, nome);
            }
        });
    });
}
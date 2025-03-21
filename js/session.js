var HABILITA_CARREGAR_USUARIO_SIM = 1;

async function loadSessionUsuarioAtual() {
    // Inicia definindo que o usuario nao esta logado
    document.querySelector("#USUARIO_LOGADO_VALIDADO").value = 0;
    document.querySelector("#USUARIO_LOGADO").value = "";
    document.querySelector("#usucodigo_logado").value = "";

    await loadSessionUsuario();

    const habilita_carregar_usuario = parseInt(document.querySelector("#habilita_carregar_usuario").value);
    if (habilita_carregar_usuario == HABILITA_CARREGAR_USUARIO_SIM) {
        carregaUsuarios();
    }
}

// window.addEventListener("load", async function() {
//     // Inicia definindo que o usuario nao esta logado
//     document.querySelector("#USUARIO_LOGADO_VALIDADO").value = 0;
//     document.querySelector("#USUARIO_LOGADO").value = "";
//     document.querySelector("#usucodigo_logado").value = "";

//     await loadSessionUsuario();

//     const habilita_carregar_usuario = parseInt(document.querySelector("#habilita_carregar_usuario").value);
//     if (habilita_carregar_usuario == HABILITA_CARREGAR_USUARIO_SIM) {
//         carregaUsuarios();
//     }

//     // listarTodosUsuariosGithubOK();
// });

async function loadSessionUsuario() {
    if (Clerk === undefined) {
        console.log("ClerkJS is NOT loaded");
        return;
    }

    await Clerk.load();

    console.log("ClerkJS is loaded");

    let username_usuario_logado = "BRANCO";
    if (Clerk) {
        if (Clerk.user) {
            console.log(Clerk.user);
            username_usuario_logado = Clerk.user.username;
            loadSessionUsuarioLogado(username_usuario_logado);
        }
    }

    const usucodigo_logado = document.querySelector("#usucodigo_logado").value;
    console.log("usucodigo_logado - NEW: " + usucodigo_logado);
}

function loadSessionUsuarioLogado(username_usuario_logado) {
    let usucodigo_logado = 0;

    let aListaUsuarios = getListaAlunosGithub();
    aListaUsuarios.forEach(function(data, key) {
        usucodigo_logado = parseInt(data[0]);
        const name = data[2];
        const user = data[3].toLowerCase();

        let valida = false;
        if (user === username_usuario_logado) {
            valida = true;
        }

        if (valida) {
            // console.log("USUARIO LOGADO VALIDADO!");

            // USUARIO_LOGADO_VALIDADO
            // document.querySelector("#USUARIO_LOGADO_VALIDADO").value = usucodigo_logado;
            document.querySelector("#USUARIO_LOGADO_VALIDADO").value = username_usuario_logado;
            document.querySelector("#USUARIO_LOGADO").value = username_usuario_logado;

            sessionStorage.setItem("token_logado", "54a80097f2382ftdats5a980968601");
            if (usucodigo_logado == 1) {
                sessionStorage.setItem("token_logado", "54a80097f23822cb26b6d5a980968601");
            }

            sessionStorage.setItem("usucodigo_logado", usucodigo_logado);


            document.querySelector("#usucodigo_logado").value = usucodigo_logado;

            // console.log("aqui - username_usuario_logado=>ok:" + username_usuario_logado);
            // console.log("aqui - usucodigo_logado:" + usucodigo_logado);
        }
    });
}

function getListaAlunosGithub() {
    // return new Array(
    //     Array("1", "ativo", "Gelvazio Camargo", "Gelvazio")
    // );

    return new Array(
        // Array("101", "ativo", "Gelvazio Camargo", "GelvazioParticular"),
        // MUDAR O CODIGO DEPOIS CONFORME CODIGO DA CHAMADA....
        Array("1", "ativo", "Gelvazio Camargo", "Gelvazio"),
        Array("2", "ativo", "Ana Luiza Zanatta", "analuizazanatta"),
        Array("3", "ativo", "Adriano Kalbusch", "Adrianok01"),
        Array("4", "ativo", "DIEGO RICARDO GEISER", "diegoricardogeiser"),
        Array("5", "ativo", "Bruna Tholl", "brunatholl"),
        Array("6", "ativo", "Carlos Eduardo Barbosa Pereira", "C4rlloz"),
        Array("7", "ativo", "Cauê eduardo correa", "caueeduardo"),
        Array("8", "ativo", "David Henrique Cardoso May", "David-HCardoso"),
        Array("9", "ativo", "Eduarda Ferraz", "eududaferraz"),
        Array("10", "ativo", "Gabriele Salm", "Gabrielesalm"),
        Array("11", "ativo", "Gabriel Henrique Vignolli", "GabrielHvignolli"),
        Array("12", "ativo", "Giliard Godoy Castro", "Giliard-GC"),
        Array("13", "ativo", "Gustavo Vinicius Henklein Martins", "guhenklein"),
        Array("14", "ativo", "Iam Gabril Benvenutti de Oliveira", "Acerola69"),
        Array("15", "ativo", "Jéssica ", "jessdirksen"),
        Array("16", "ativo", "João Vithor Farias", "JoaoVithor999"),
        Array("17", "ativo", "Júlio Cesar Bernadino Júnior", "juliocb0"),
        Array("18", "ativo", "KETLIN MILENA HOFFMANN", "KetlinMH"),
        Array("19", "ativo", "LUIZ FELIPE DUARTE KEMPER", "Kemper2024"),
        Array("20", "ativo", "Letícia Kowalski Moser", "LeticiaKowalski"),
        Array("21", "ativo", "Yan Carlos shafer", "YanCarlosschafer"),
        Array("22", "ativo", "Mikael linhares", "mikaellinhares"),
        Array("23", "ativo", "Marlon ryan", "letherface69"),
        Array("24", "ativo", "Phamella Graziela Gonçalves de Souza", "Phamellasouza"),
        Array("25", "ativo", "Ryan Henryque Schneider", "Ry4nHS"),
        Array("26", "ativo", "Rafael José Morais", "rafaelmorais027"),
        Array("27", "ativo", "Rômulo Wagner Morastoni", "RomuloWMorastoni"),
        Array("28", "ativo", "Thaís Silva Lima Gonçalves", "thaigoncal"),
        Array("29", "ativo", "Vitor henrique da silva", "pinguim33"),
        Array("30", "ativo", "Vinicius kuhl baumann", "viniciuskbaumann"),
        Array("31", "ativo", "Anna Júlia Abreu de Oliveira", "annajuabreu"),
        Array("32", "ativo", "Helton", "MrVermilion"),
    );
}
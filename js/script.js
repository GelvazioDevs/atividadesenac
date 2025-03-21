function loadMenuPagina() {
    // rodape-pagina
    document.querySelector("#menu-pagina").innerHTML = `
    <input type="hidden" id="USUARIO_LOGADO" name="USUARIO_LOGADO" value="">
    <input type="hidden" id="usucodigo_logado" name="usucodigo_logado" value="0">
    <input type="hidden" id="USUARIO_LOGADO" name="USUARIO_LOGADO" value="">

    <input type="hidden" id="habilita_carregar_usuario" name="habilita_carregar_usuario" value="0">

    <!-- SCRIPTS -->

    <script src="https://code.jquery.com/jquery-3.6.0.js" defer></script>
    <!--<script src="js/session.js"></script>-->
    <!--<script src="js/atividades.js" defer></script>-->

    <div class="menu">
        <a href="index.html" alt="Home">Home</a>
        <!-- <a href="sobre.html" alt="Gelvazio Camargo">Sobre</a> -->
        <a href="atividades.html" alt="Atividades">Atividades</a>
        <!-- <a href="condicionais.html" alt="Atividades">Condicionais</a>-->
        <!-- <a href="apostilas.html" alt="Apostilas">Apostilas</a> -->
        <a href="github.html" alt="GITHUB">Github</a>
        <a href="login.html" alt="Clerk Login">Login</a>

        <!--
        <a href="alunos.html" alt="Alunos Senac">Alunos</a>
        <a href="sorteio.html" alt="Sorteio">Sorteio Correção</a>
        <a href="professor.html" alt="Atividades">Professor</a> -->
        <!-- <a href="frontend.html" alt="Apostilas Frontend">Frontend</a>
        <a href="backend.html" alt="Apostilas Backend">Backend</a> -->
        <!-- <a href="jogos.html" alt="Atividades">Jogos</a> -->
        <!-- <a href="free.html" alt="Apostilas CursosFree">Cursos Grátis</a> -->
        <!-- <a href="ide.html" alt="IDE">IDE</a> -->
        <!-- <a href="contato.html" alt="Contato">Contato</a>
        <a href="login.html" alt="Login">Login</a> -->
        <a href="#" alt="Logout" onclick="logout()">Logout</a>
        <a href="#" alt="Logout">Usuário logado:<input type="text" id="USUARIO_LOGADO_VALIDADO" name="USUARIO_LOGADO_VALIDADO" value="0" disabled></a>
    </div>`;
}

function loadRodapePagina() {
    document.querySelector("#rodape-pagina").innerHTML = `<div class="footer">
    Desenvolvido por Gelvazio Camargo para fins educacionais. &copy All Rights Reserved!
</div>`;
}

function logout() {
    sessionStorage.setItem("token_logado", "");
    sessionStorage.setItem("usucodigo_logado", "");

    window.location.href = "index.html";


    // LOGOUT CLERK
    if (Clerk != undefined) {
        if (Clerk) {
            Clerk.signOut();
        }
    }
}

function validaSessao() {
    const token_logado = sessionStorage.getItem("token_logado");

    // Se nao valida a sessao, manda pra pagina inicial
    if (token_logado != '54a80097f23822cb26b6d5a980968601') {
        document.querySelector("#container-alunos").style.display = "none";
        window.location.href = `index.html`;
    } else {
        document.querySelector("#container-alunos").style.display = "block";
    }
}

function mostraMensagem(mensagem) {
    $("#alert").show();
    document.querySelector("#alert").innerHTML = mensagem;

    // CHAMA A ACAO DE ALERTA DE SISTEMA
    document.querySelector("#acaoAlertaSistema").click();;
}

function mostraModalRateLimit(mensagem) {
    $("#alert").show();
    document.querySelector("#alert").innerHTML = mensagem;
    // CHAMA A ACAO DE ALERTA DE SISTEMA
    document.querySelector("#acaoAlertaSistema").click();;
}

async function loadDadosPagina() {
    loadMenuPagina();
    loadRodapePagina();

    await loadSessionUsuarioAtual();
}

loadDadosPagina();
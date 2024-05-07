document.addEventListener("DOMContentLoaded", function() {
    var contentFrame = document.getElementById("content-frame");
    var homeLink = document.getElementById("home-link");
    var usuariosLink = document.getElementById("usuarios-link");
    var configLink = document.getElementById("config-link");
    var sairLink = document.getElementById("sair-link");
   

    homeLink.addEventListener("click", function(event) {
        event.preventDefault();
        contentFrame.src = "principal.html";
    });

    usuariosLink.addEventListener("click", function(event) {
        event.preventDefault();
        contentFrame.src = "usuarios.html";
    });

    configLink.addEventListener("click", function(event) {
        event.preventDefault();
        contentFrame.src = "configuracoes.html";
    });

    sairLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "login.html"; // Redireciona para a página de login
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var contentFrame = document.getElementById("content-frame");
    contentFrame.src = "principal.html"; // Define o src do iframe para principal.html ao carregar a página
});

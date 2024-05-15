window.onload = function() {
    var eMobile = detectarMobile();
    if (eMobile) {
        // Se for móvel, remover os textos dos links nas imagens
        var linksComTexto = document.querySelectorAll('.link-com-texto');
        linksComTexto.forEach(function(link) {
            link.textContent = ''; // Remove o texto
        });
    }
};

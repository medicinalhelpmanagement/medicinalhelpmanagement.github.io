$('document').ready(function() {
    
    $('.carousel').carousel({
        interval: 6000
    })

    // starts with registar-utente tutorial
    updateTutorial('#registar-utente');
});

function updateTutorial(elemId) {

    // hides all carousels
    $('#registar-utente-carousel').hide();
    $('#inserir-stock-carousel').hide();
    $('#consultar-stock-carousel').hide();

    // resets buttons color
    $('#registar-utente-button').css({'color': 'white', 'background-color': 'rgb(99, 135, 172)'});
    $('#inserir-stock-button').css({'color': 'white', 'background-color': 'rgb(99, 135, 172)'});
    $('#consultar-stock-button').css({'color': 'white', 'background-color': 'rgb(99, 135, 172)'});

    // makes button hover
    $(elemId + '-button').css({'color': 'rgb(255, 255, 255)', 'background-color': 'rgba(79, 93, 106, 1)'});

    // shows carousel
    $(elemId + '-carousel').show();
}

$(window).on("resize", function(){
    removeIcon()
});

$(window).on("load", function(){
    removeIcon()
});

function removeIcon(){
    if(window.visualViewport.width < 1000)
        $("#logo").hide();
    else
        $("#logo").show();
}

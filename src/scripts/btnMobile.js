//Menu Hamburguer

$(document).ready(function(){
    $('.btn_Mobile').on('click', function() {
        $('.navList_Mobile').toggleClass('active');
        $('.btn_Mobile').find('i').toggleClass('fa-x');
    });
});

//Categoria

$(document).ready(function(){
    $('.btnMobile_categorias').on('click', function() {
        $('#categoriesMobile').toggleClass('active');
    });
});
$(document).ready(function(){
    $('.btn_Mobile').on('click', function() {
        $('.navList_Mobile').toggleClass('active');
        $('.btn_Mobile').find('i').toggleClass('fa-x');
    });
});
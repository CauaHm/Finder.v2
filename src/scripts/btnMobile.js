//Menu Hamburguer

$(document).ready(function(){
    $('.btn_Mobile').on('click', function() {
        $('.navList_Mobile').toggleClass('active');
        $('.btn_Mobile').find('i').toggleClass('fa-x');
    });
    
    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        if(scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }
    });

    window.revelar = ScrollReveal({reset:true});

    revelar.reveal('.cta', {
        duration: 2000,
        origin: 'left', 
        distance: '70%' 
    });
    revelar.reveal('.banner', {
        duration: 2000,
        distance: '20%',
        delay: 500
    });
    revelar.reveal('.section-title', {
        duration: 2000,
        origin: 'right', 
        distance: '20%',   
    });

    revelar.reveal('.container-form', {
        duration: 2000,
        origin: 'left', 
        distance: '20%',  
        delay: 100
    });

    revelar.reveal('.categoriesBtn', {
        duration: 2000,
        distance: '20%',
        delay: 250
    });

    revelar.reveal('.whatWeDo_txt-title', {
        duration: 2000, 
        distance: '20%', 
        origin: 'right',
    });
    revelar.reveal('.whatWeDo_list-reveal', {
        duration: 2000, 
        distance: '20%', 
        delay: 500
    });
    revelar.reveal('.bid-card-title-reveal', {
        duration: 2000, 
        origin: 'right',
        distance: '20%', 
    });

    revelar.reveal('.card', {
        duration: 2000, 
        distance: '20%', 
    });

    revelar.reveal('.finderContact-title-reveal', {
        origin: 'right',
        duration: 2000, 
        distance: '20%', 
    });

    revelar.reveal('.contactSocial form div', {
        duration: 2000, 
        distance: '20%', 
        origin: 'right',
    });

    revelar.reveal('.finderLogo-reveal', {
        duration: 2000, 
        distance: '90px', 
        delay: 500
    });

    

});

//Menu Hamburguer

$(document).ready(function(){
    $('.btn_Mobile').on('click', function() {
        $('.navList_Mobile').toggleClass('active');
        $('.btn_Mobile').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $(".navList_item");

    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if(scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 100;
            const sectionBot = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBot) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active')
        $(navItems[activeSectionIndex]).addClass('active')
    });

    ScrollReveal().reveal('.cta', {
        origin: 'left', 
        duration: 3000,
        distance: '70%' 
    });
    ScrollReveal().reveal('.banner', {
        origin: 'right', 
        duration: 2500,
        distance: '20%' 
    });
    ScrollReveal().reveal('.projects', {
        origin: 'right', 
        duration: 2500,
        distance: '20%' 
    });

});

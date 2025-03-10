document.querySelectorAll('.header__list__button').forEach(function(button) {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelectorAll('.header__list__button').forEach(function(btn) {
            btn.parentElement.classList.remove('active');
        });
        
        this.parentElement.classList.add('active');

        if (document.querySelector('.header__list.home').classList.contains('active')) {
            document.querySelector('.home__content').classList.add('active');
        } else {
            document.querySelector('.home__content').classList.remove('active');
        }

        if (document.querySelector('.header__list.about').classList.contains('active')) {
            document.querySelector('.about__content').classList.add('active');
        } else {
            document.querySelector('.about__content').classList.remove('active');
        }
        if (document.querySelector('.header__list.works').classList.contains('active')) {
            document.querySelector('.works__content').classList.add('active');
        } else {
            document.querySelector('.works__content').classList.remove('active');
        }
        if (document.querySelector('.header__list.reviews').classList.contains('active')) {
            document.querySelector('.reviews__content').classList.add('active');
        } else {
            document.querySelector('.reviews__content').classList.remove('active');
        }
        
    });
});

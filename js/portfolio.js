window.onload = function() {
// add events to hamburger menu
    document.querySelector('.header__button').addEventListener('click', function(e) {
        var nav=document.querySelector('.header__nav')
        if (nav.classList.contains('hidden')){
            nav.classList.remove('hidden')
            e.target.classList.remove('fa-bars')
            e.target.classList.add('fa-times')
        }
        else{
            nav.classList.add('hidden')
            e.target.classList.remove('fa-times')
            e.target.classList.add('fa-bars')
        }
    })
};

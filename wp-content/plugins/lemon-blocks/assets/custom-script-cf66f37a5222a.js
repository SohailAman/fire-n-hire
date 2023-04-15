// FAQ scripts


function accordion(elem) {
    document.addEventListener('click', function(e) {
        if (!e.target.matches(elem + ' li h4')) return;
        else {
            if (!e.target.parentElement.classList.contains('active')) {
                e.target.parentElement.classList.add('active');
            } else {
                e.target.parentElement.classList.remove('active');
            }
        }
    });
}

//activate accordion function
accordion('.lmn-faq');
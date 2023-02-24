let last_known_scroll_position = window.scrollY;

window.addEventListener('scroll', function (e) {
    if ((window.scrollY - last_known_scroll_position) >= 0){
        if (window.scrollY < window.innerHeight){
            window.scrollBy({
                top: window.innerHeight - window.scrollY,
                left: 0,
                behavior: "smooth"
            });
        }
    }
    last_known_scroll_position = window.scrollY;
});
// let last_known_scroll_position = window.scrollY;
let last_time = Date.now();

window.addEventListener('wheel', function (e) {
    if (Date.now() - last_time <= 1000 || (window.scrollY < window.innerHeight && e.deltaY >= 0)) {
        e.preventDefault();
    }
    if (e.deltaY >= 0 && window.scrollY < window.innerHeight && Date.now() - last_time > 1000) {
        e.preventDefault();
        window.scrollBy({
            top: window.innerHeight - window.scrollY,
            left: 0,
            behavior: "smooth"
        });
        last_time = Date.now();
    }
    // last_known_scroll_position = window.scrollY;
}, {passive: false});

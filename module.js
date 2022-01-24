window.onload = function() {

    // *** Image slider ***

    // Variables
    slides          = Array.from(document.querySelectorAll('.slide-item')),
    sliders_content = Array.from(document.querySelectorAll('.slide-item .content')),
    slider_id       = document.getElementById('slider-container'),
    next_slide_id   = document.getElementById('next-slide'),
    prev_slide_id   = document.getElementById('prev-slide'),
    autoplay        = slider_id.getAttribute('data-autostart'),
    pause_hover     = slider_id.getAttribute('data-pause'),
    timer_slider    = slider_id.getAttribute('data-timer'),
    index_slide     = 1,
    time = timer_slider;


}
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

    // Start Autoplay slider if change to True
    if (autoplay == 'true') {

        // On page load start Autoplay
        ShowSlides(index_slide)
        let autoPlaySet = setInterval(function() { ShowSlides(index_slide++); }, time);

        // If set Hover to TRUE 
        if (pause_hover == 'true') {

            // On hover stop Autoplay
            slider_id.onmouseover = function() {
                autoPlaySet = clearInterval(autoPlaySet);
            }

            // On hover out start again Autoplay
            slider_id.onmouseout = function() {
                autoPlaySet = setInterval(function() { ShowSlides(index_slide++); }, time);
            }

        } 
        
    } else {
        ShowSlides();
    }
    
    // Next slide click
    next_slide_id.addEventListener('click', function() {
        ShowSlides(index_slide += 1);
    });

    // Previous slide click
    prev_slide_id.addEventListener('click', function() {
        ShowSlides(index_slide -= 1);
    });


    // Show Slider
    function ShowSlides(n) {

        // Loop through all sliders and hides that are not active
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            slides[i].removeAttribute('data-item-slide');
        }

        // Start Autoplay slider if change to True
        if (autoplay == 'true') {

                if (n < 1) {
                    index_slide = slides.length;
                    console.log('hi');
                }

                if (n >= slides.length) {
                    index_slide = 1;
                }

                slides[index_slide - 1].style.display = "block";
                slides[index_slide - 1].setAttribute('data-item-slide', 'active');            

        } else {
            
            if (n > slides.length) {
                index_slide = 1;
            }
            
            if (n < 1) {
                index_slide = slides.length;
            }

            slides[index_slide - 1].style.display = "block";
            slides[index_slide - 1].setAttribute('data-item-slide', 'active');

        }
            
    }
    // *** END: Image slider ***

}
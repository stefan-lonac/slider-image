
    const slider_id = document.querySelectorAll('.slider-container');

    for( let i = 0; i < slider_id.length; i++ ) {
        
        const next_slide_id = slider_id[i].querySelector('.next-slide');
        const prev_slide_id = slider_id[i].querySelector('.prev-slide');
        const autoplay = slider_id[i].getAttribute('data-autostart');
        const pause_hover = slider_id[i].getAttribute('data-pause');
        const timer_slider = slider_id[i].getAttribute('data-timer');
        let time = timer_slider;
        let index_slide = 0;

        // Show Slider
        const ShowSlides = function(n) {

            const slides = slider_id[i].querySelectorAll('.slide-item');
            const sliders_content = slider_id[i].querySelectorAll('.slide-item .content');

            const slides_loop = function(s, x) {
                s.style.transform = `translateX(${100 * (index_slide - x)}%)`;
                s.removeAttribute('data-item-slide');
                s.classList.remove("active-slide");
            }

            const active_slides = function () {
                slides[index_slide].setAttribute('data-item-slide', 'active');  
                slides[index_slide].classList.add('active-slide');
            }


            // Start Autoplay slider if change to True
            if (autoplay == 'true') {
  
                if (n < 0) { index_slide = slides.length - 1; }
                
                if (n >= slides.length - 1) { index_slide = 0; }
                
                slides.forEach(slides_loop);
                active_slides();

            } else {
                
                if (n >= slides.length) { index_slide = 0; }
                
                if (n < 0) { index_slide = slides.length - 1; }
                
                slides.forEach(slides_loop);
                active_slides();
            }
                
        }

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


    }


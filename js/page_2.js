var slide_index

function initialize_page_2(){
    
    page_2_return_button.addEventListener('click', reset_structure, true);

    page_2_section_a_title.addEventListener('click', function(){
        // section A
        page_2_section_a.classList.remove('active_section');
        page_2_section_a.classList.remove('hidden_button');
        page_2_section_a.classList.add('active_section');
        page_2_section_a_title.classList.add('hidden_title');
        page_2_section_a_content.classList.add('active_content');
        
        // section B
        page_2_section_b.classList.remove('active_section');
        page_2_section_b.classList.add('hidden_button');

        // section C
        page_2_section_c.classList.remove('active_section');
        page_2_section_c.classList.add('hidden_button');

        // return button
        page_2_return_button.removeEventListener('click', reset_structure, true);
        page_2_return_button.addEventListener('click', reset_page_2_structure, true);

        slide_index = 1;
        show_slides(slide_index, "page_2_section_a_slide");

        page_2_section_a.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX;
        })
        
        page_2_section_a.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX;
            swipe_gesture("page_2_section_a_slide");
        });
    
        page_2_section_a_prev_button.addEventListener('click', function(){
            plus_slides(-1, 'page_2_section_a_slide');
        });
    
        page_2_section_a_next_button.addEventListener('click', function(){
            plus_slides(1, 'page_2_section_a_slide');
        });
    });

    page_2_section_b_title.addEventListener('click', function(){
        // section A
        page_2_section_a.classList.remove('active_section');
        page_2_section_a.classList.add('hidden_button');

        // section B
        page_2_section_b.classList.remove('active_section');
        page_2_section_b.classList.remove('hidden_button');
        page_2_section_b.classList.add('active_section');
        page_2_section_b_title.classList.add('hidden_title');
        page_2_section_b_content.classList.add('active_content');

        // section C        
        page_2_section_c.classList.remove('active_section');
        page_2_section_c.classList.add('hidden_button');

        // return button
        page_2_return_button.removeEventListener('click', reset_structure, true);
        page_2_return_button.addEventListener('click', reset_page_2_structure, true);

        slide_index = 1;
        show_slides(slide_index, "page_2_section_b_slide");

        page_2_section_b.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX;
        })
        
        page_2_section_b.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX;
            swipe_gesture("page_2_section_b_slide");
        });
    
        page_2_section_b_prev_button.addEventListener('click', function(){
            plus_slides(-1, 'page_2_section_b_slide');
        });
    
        page_2_section_b_next_button.addEventListener('click', function(){
            plus_slides(1, 'page_2_section_b_slide');
        });
    });

    page_2_section_c_title.addEventListener('click', function(){
        // section A
        page_2_section_a.classList.remove('active_section');
        page_2_section_a.classList.add('hidden_button');

        // section B
        page_2_section_b.classList.remove('active_section');
        page_2_section_b.classList.add('hidden_button');

        // section C        
        page_2_section_c.classList.remove('active_section');
        page_2_section_c.classList.remove('hidden_button');
        page_2_section_c.classList.add('active_section');
        page_2_section_c_title.classList.add('hidden_title');
        page_2_section_c_content.classList.add('active_content');

        // return button
        page_2_return_button.removeEventListener('click', reset_structure, true);
        page_2_return_button.addEventListener('click', reset_page_2_structure, true);

        slide_index = 1;
        show_slides(slide_index, "page_2_section_c_slide");

        page_2_section_c.addEventListener('touchstart', e => {
            touchstartX = e.changedTouches[0].screenX;
        })
        
        page_2_section_c.addEventListener('touchend', e => {
            touchendX = e.changedTouches[0].screenX;
            swipe_gesture("page_2_section_c_slide");
        });
    
        page_2_section_c_prev_button.addEventListener('click', function(){
            plus_slides(-1, 'page_2_section_c_slide');
        });
    
        page_2_section_c_next_button.addEventListener('mousedown', function(){
            plus_slides(1, 'page_2_section_c_slide');
        });
    });
};

function reset_page_2_structure(){
    // section A
    page_2_section_a.classList.remove('hidden_button');
    page_2_section_a.classList.remove('active_section');
    page_2_section_a_title.classList.remove('hidden_title');
    page_2_section_a_content.classList.remove('active_content');
    
    // section B
    page_2_section_b.classList.remove('hidden_button');
    page_2_section_b.classList.remove('active_section');
    page_2_section_b_title.classList.remove('hidden_title');
    page_2_section_b_content.classList.remove('active_content');
    
    // section C
    page_2_section_c.classList.remove('hidden_button');
    page_2_section_c.classList.remove('active_section');
    page_2_section_c_title.classList.remove('hidden_title');
    page_2_section_c_content.classList.remove('active_content');

    // return button
    page_2_return_button.removeEventListener('click', reset_page_2_structure, true);
    page_2_return_button.addEventListener('click', reset_structure, true);
}

function plus_slides(n, section) {
    show_slides(slide_index += n, section);
    console.log(slide_index)
}

function show_slides(n, section) {
  	let i;
  	let slides = document.getElementsByClassName(section);
  	if (n > slides.length) {slide_index = 1}    
  	if (n < 1) {slide_index = slides.length}
  	for (i = 0; i < slides.length; i++) {
  	  	slides[i].style.display = "none";  
  	}
  	slides[slide_index-1].style.display = "block";  
}
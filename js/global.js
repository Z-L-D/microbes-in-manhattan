function initialize_structure(){
    // PAGE 0
    page_0 = document.getElementById('page_0');
    page_1_button = document.getElementById('page_1_button');
    page_2_button = document.getElementById('page_2_button');
    initialize_page_0();

    // PAGE 1
    page_1 = document.getElementById('page_1');
    page_1_return_button = document.getElementById('page_1_return_button');
    initialize_page_1();

    // PAGE 2
    page_2 = document.getElementById('page_2');
    page_2_return_button = document.getElementById('page_2_return_button');
    page_2_section_a = document.getElementById('page_2_section_a');
    page_2_section_b = document.getElementById('page_2_section_b');
    page_2_section_c = document.getElementById('page_2_section_c');
    page_2_section_a_title = document.getElementById('page_2_section_a_title');
    page_2_section_b_title = document.getElementById('page_2_section_b_title');
    page_2_section_c_title = document.getElementById('page_2_section_c_title');
    page_2_section_a_content = document.getElementById('page_2_section_a_content');
    page_2_section_b_content = document.getElementById('page_2_section_b_content');
    page_2_section_c_content = document.getElementById('page_2_section_c_content');
    page_2_section_a_prev_button = document.getElementById('page_2_section_a_prev_button');
    page_2_section_b_prev_button = document.getElementById('page_2_section_b_prev_button');
    page_2_section_c_prev_button = document.getElementById('page_2_section_c_prev_button');
    page_2_section_a_next_button = document.getElementById('page_2_section_a_next_button');
    page_2_section_b_next_button = document.getElementById('page_2_section_b_next_button');
    page_2_section_c_next_button = document.getElementById('page_2_section_c_next_button');
    initialize_page_2();
}

function reset_structure(){
    page_0.style.display = 'block';
    page_1.style.display = 'none';
    page_2.style.display = 'none';
    page_2_section_a.classList.remove('hidden_button');
    page_2_section_b.classList.remove('hidden_button');
    page_2_section_c.classList.remove('hidden_button');
    page_2_section_a.classList.remove('active_section');
    page_2_section_b.classList.remove('active_section');
    page_2_section_c.classList.remove('active_section');
}

let touchstartX = 0;
let touchendX = 0;

function swipe_gesture(section) {
    if(touchendX - touchstartX > 100 || touchstartX - touchendX > 100){
        if(touchendX < touchstartX){
            plus_slides(1, section);
        } 
        if(touchendX > touchstartX){
            plus_slides(-1, section);
        };
    }
};
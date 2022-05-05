function initialize_page_2(){
    
    page_2_return_button.addEventListener('click', reset_structure, true);

    page_2_section_a.addEventListener('click', function(){
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
    });

    page_2_section_b.addEventListener('click', function(){
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
    });

    page_2_section_c.addEventListener('click', function(){
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
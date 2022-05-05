function initialize_page_2(){
    
    page_2_return_button.addEventListener('click', reset_structure, true);

    page_2_section_a.addEventListener('click', function(){
        page_2_section_a.classList.remove("active_content");
        page_2_section_b.classList.remove("active_content");
        page_2_section_c.classList.remove("active_content");
        page_2_section_a.classList.remove("hidden_button");
        page_2_section_a.classList.add("active_content");
        page_2_section_b.classList.add("hidden_button");
        page_2_section_c.classList.add("hidden_button");

        page_2_return_button.removeEventListener('click', reset_structure, true);
        page_2_return_button.addEventListener('click', reset_page_2_structure, true);
    });

    page_2_section_b.addEventListener('click', function(){
        page_2_section_a.classList.remove("active_content");
        page_2_section_b.classList.remove("active_content");
        page_2_section_c.classList.remove("active_content");
        page_2_section_a.classList.add("hidden_button");
        page_2_section_b.classList.remove("hidden_button");
        page_2_section_b.classList.add("active_content");
        page_2_section_c.classList.add("hidden_button");

        page_2_return_button.removeEventListener('click', reset_structure, true);
        page_2_return_button.addEventListener('click', reset_page_2_structure, true);
    });

    page_2_section_c.addEventListener('click', function(){
        page_2_section_a.classList.remove("active_content");
        page_2_section_b.classList.remove("active_content");
        page_2_section_c.classList.remove("active_content");
        page_2_section_a.classList.add("hidden_button");
        page_2_section_b.classList.add("hidden_button");
        page_2_section_c.classList.remove("hidden_button");
        page_2_section_c.classList.add("active_content");

        page_2_return_button.removeEventListener('click', reset_structure, true);
        page_2_return_button.addEventListener('click', reset_page_2_structure, true);
    });
};

function reset_page_2_structure(){
    page_2_section_a.classList.remove("hidden_button");
    page_2_section_b.classList.remove("hidden_button");
    page_2_section_c.classList.remove("hidden_button");
    page_2_section_a.classList.remove("active_content");
    page_2_section_b.classList.remove("active_content");
    page_2_section_c.classList.remove("active_content");

    page_2_return_button.removeEventListener('click', reset_page_2_structure, true);
    page_2_return_button.addEventListener('click', reset_structure, true);
}
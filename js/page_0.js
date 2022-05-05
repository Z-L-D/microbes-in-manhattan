function initialize_page_0(){
    
    page_1_button.addEventListener('click', function(){
        page_0.style.display = "none";
        page_1.style.display = "block";
        page_2.style.display = "none";
    });

    page_2_button.addEventListener('click', function(){
        page_0.style.display = "none";
        page_1.style.display = "none";
        page_2.style.display = "block";
    });
};
function tabs() {

    function tabss (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') {

        const header = document.querySelector(headerSelector),
            tab = header.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector);


        function hideContent() {
            content.forEach((item) => {
                item.style.display = 'none';
            });

            tab.forEach(item => {
                item.classList.remove(activeClass);
            });
        };

        function showContent(i = 0) {
            content[i].style.display = display;
            tab[i].classList.add(activeClass);
        };

        hideContent();
        showContent();
        
              

        header.addEventListener('click', (e) => {
            let target = e.target;

            if (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {

                tab.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideContent();
                        showContent(i);
                    }
                });
            }
        });

    };

    tabss('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabss('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabss('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    
   

}

export default tabs;


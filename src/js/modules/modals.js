function show_modal(state) {

    function openModal(triggerSelect, modalSelect, closeSelect, closeClickOverlay = true) {
        let trigger = document.querySelectorAll(triggerSelect),
            modal = document.querySelector(modalSelect),
            close = document.querySelector(closeSelect),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();

        trigger.forEach(item => {

            item.addEventListener('click', (event) => {
                event.preventDefault();

                windows.forEach(item => {
                    item.style.display = 'none';
                });
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                console.log(event.target.className);
                if (event.target.classList.contains('popup_calc_btn')) {
                    state['form'] = 0;
                    console.log(state);
                } else if (event.target.classList.contains('popup_calc_button')) {
                    state['type'] = 'tree';
                    console.log(state);
                }
            });
        });

        close.addEventListener('click', () => {

            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = 'none';
            document.body.style.marginRight = `0px`;
            document.body.style.overflow = '';
            setTimeout(() => {
                for (let key in state) {
                    delete state[key]
                };
                console.log(state);
            }, 2000);
            console.log(state);
        });

        modal.addEventListener('click', (event) => {
            if (event.target.className === modal.className && closeClickOverlay) {

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        });
    };

    function openModalByTime(select, time) {
        setTimeout(function() {
            document.querySelector(select).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    };

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    };

openModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
openModal('.phone_link', '.popup', '.popup .popup_close');
// openModalByTime('.popup', 60000);
openModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false);
openModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
openModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

// Код выше оптимизировал после просмотра видео
// Код ниже сделал самостоятельно до просмотра видео

    // let btn_engineer_popup = document.querySelector('.popup_engineer_btn'),
    //     phone_link = document.querySelectorAll('.phone_link'),
    //     popup_engineer = document.querySelector('.popup_engineer'),
    //     popup_close = document.querySelectorAll('.popup_close'),
    //     popup_call = document.querySelector('.popup');

    // btn_engineer_popup.addEventListener('click', function() {
    //     modal(popup_engineer);
    // }); 

    // for(i=0; i<phone_link.length; i++) {
    //     phone_link[i].addEventListener('click', function() {
    //         modal(popup_call);
    //     });
    // }


    // function modal(a) {
            
    //     a.style.display = 'flex';
    //     document.body.style.overflow = "hidden";

        
    
    //     for(i=0; i < popup_close.length; i++) {
    //         popup_close[i].addEventListener('click', function() {
    //             a.style.display = 'none';
    //             document.body.style.overflow = "";
    //         });
    //     };
    
    //     a.addEventListener('click', function(event) {
    //         let target = event.target;

    
    //         if (target.className === a.className) {
                
    //             a.style.display = 'none';
    //             document.body.style.overflow = "";       
    //         } 
    //     });
    // }
}

module.exports = show_modal;


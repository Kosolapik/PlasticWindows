function show_modal() {

    function openModal(triggerSelect, modalSelect, closeSelect) {
        let trigger = document.querySelectorAll(triggerSelect),
            modal = document.querySelector(modalSelect),
            close = document.querySelector(closeSelect);

        trigger.forEach(item => {

            item.addEventListener('click', (event) => {
                event.preventDefault();
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (event) => {
            if (event.target.className === modal.className) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    };

    function openModalByTime(select, time) {
        setTimeout(function() {
            document.querySelector(select).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    };

openModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
openModal('.phone_link', '.popup', '.popup .popup_close');
// openModalByTime('.popup', 60000);

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


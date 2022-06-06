import checkNumInputs from "./checkNumInputs";

function forms(state) {

    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');
          

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: "Загрузка",
        success: "Спасибо! Скоро мы с вами свяжемся!",
        failure: "Что-то пошло не так..."
    };

    async function postData (url, data) {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    function clearInput () {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');

            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            if (item.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                };
                setTimeout(() => {
                    item.style.display = 'none';
                }, 1500);
            };

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                    setTimeout(() => {
                        for (let key in state) {
                            delete state[key]
                        };
                        console.log(state);
                    }, 2000);
                    console.log(state);
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInput();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });

        
    });

};

export default forms;
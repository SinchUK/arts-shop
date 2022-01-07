import { getResource } from "../services/requests";

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);


    const messages = {
        failed: 'Упс! Что-то пошло не так...'
    };
    // --------For loading from server ------------
    btn.addEventListener('click', function() {
        // getResource('http://localhost:3000/styles') путь на сервер
        getResource('assets/db.json') //путь прямой к файлу
            .then(res => createCards(res.styles))
            .catch(error => {
                console.log(error, "ERROR");
                let errMessage = document.createElement('div');
                errMessage.innerHTML = messages.failed;
                errMessage.style.textAlign = "center";
                errMessage.style.color = "red";
                document.querySelector(wrapper).appendChild(errMessage);
            });
        
        this.remove();
    });

    function createCards(response) {
        response.forEach(({src,title,link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp','col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            
            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);

        });
    }

				
				
    // ------------------------------------------------

    // ---- for static html elements ----------
    // cards.forEach(card => {
    //     card.classList.add('animated', 'fadeInUp');
    // });

    // btn.addEventListener('click', () => {
    //     console.log("hihi");
    //     cards.forEach(card => {
    //         console.log('card in');
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         // card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     btn.remove();
    
    // });
    // -----------------------------------------------
};

export default showMoreStyles;

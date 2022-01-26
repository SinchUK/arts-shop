import { postData } from "../services/requests";

const drop = () => {
    //drag *
    //dragend *
    //dragenter - обьект над dropArea
    //dragexit *
    //dragleave - обьект за пределами dropArea
    //dragover - обьект зависает над dropArea
    //dragstart *
    //drop - обьект отправлен в dropArea
    // * - срабатывают на элементе который мы перетаскиваем

    const fileInputs = document.querySelectorAll('[name="upload"]');
    
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function higlight(item) {
        // item.closest('.file_upload').style.border = '5px solid yellow';
        // item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)';
        item.closest('.file_upload').style.cssText = 
        `border: 2px dashed #bbb;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        text-align: center;
        font: 10pt bold arial;
        color: #bbb;`; 
            
    }

    function unhiglight(item) {
        item.closest('.file_upload').style.border = 'none';
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = '#fff';
        } else if (item.id === 'loadfile') {
            item.closest('.file_upload').style.backgroundColor = '#f7e7e6';
        }
         else {
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
        
    }

    ['dragenter','dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => higlight(input), false);
        });
    });

    ['dragleave','drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => unhiglight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            // send file after drop to server
            const formData = new FormData();
            input.files.forEach(file => {
                formData.append(file.name, file);
            });
            // formData.append(input.files[0].name, input.files[0]);

            postData('assets/server.php', formData)
              .then((res) => {
                console.log(res, "responce");
              })
              .catch(() => {
                console.log('false', 'error');
              });
              
            let dots;
            const arr = input.files[0].name.split(".");

            arr[0].length > 6 ? (dots = "...") : (dots = ".");
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        });
    });
};

export default drop;
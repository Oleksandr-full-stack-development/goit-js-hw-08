import throttle from 'lodash.throttle';


const refs = {
    form: document.querySelector('.feedback-form'),

}

const LOCALSTORAGE_KEY_FORM = "feedback-form-state";




refs.form.addEventListener('input', throttle(onFormInput,500));

refs.form.addEventListener('submit', onFormSubmit);


const formData = {};

function onFormInput(e) {
    formData[e.target.name] = e.target.value;

    localStorage.setItem(LOCALSTORAGE_KEY_FORM, JSON.stringify(formData));
    
}

function onFormSubmit (e) {
    e.preventDefault();
    localStorage.getItem(LOCALSTORAGE_KEY_FORM);
    e.target.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY_FORM);
    console.log(formData);
}
  

document.addEventListener("DOMContentLoaded", function() { 
    document.querySelectorAll('textarea, input').forEach(function(e) {

        // если данные значения уже записаны в sessionStorage, то вставляем их в поля формы
        // путём этого мы как раз берём данные из памяти браузера, если страница была случайно перезагружена

        if(e.value === '') e.value = localStorage.getItem(e.name, e.value);

        // на событие ввода данных (включая вставку с помощью мыши) вешаем обработчик
        
        e.addEventListener('input', function() {
            
            // и записываем в sessionStorage данные, в качестве имени используя атрибут name поля элемента ввода
            
            localStorage.setItem(e.name, e.value);
        });
        
    })
    
}); 


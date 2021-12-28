import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const LOCALSTORAGE_KEY_FORM = "feedback-form-state";
const getItems = localStorage.getItem(LOCALSTORAGE_KEY_FORM);
const data = JSON.parse(getItems); 
let formData = data || {};

form.addEventListener('input', throttle(onFormInput,500));
form.addEventListener('submit', onFormSubmit);


if (data && data.email) {
    form.email.value = formData.email;
}
if (data && data.message) {
    form.message.value = formData.message;
}

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY_FORM, JSON.stringify(formData));
}

function onFormSubmit (e) {
        e.preventDefault();
        console.log(formData);
        localStorage.removeItem(LOCALSTORAGE_KEY_FORM); 
        e.target.reset(); 
}
 

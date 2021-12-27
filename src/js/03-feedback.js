import throttle from 'lodash.throttle';


const refs = {
    form: document.querySelector('.feedback-form'),

}

const LOCALSTORAGE_KEY_FORM = "feedback-form-state";



refs.form.addEventListener('input', throttle(onFormInput,500));

refs.form.addEventListener('submit', onFormSubmit);


const formData = {
};

loadPage();

function onFormInput(e) {
    formData[e.target.name] = e.target.value;

    localStorage.setItem(LOCALSTORAGE_KEY_FORM, JSON.stringify(formData));
    
}



 
function loadPage() {
    const getItems = localStorage.getItem(LOCALSTORAGE_KEY_FORM);
    const data = JSON.parse(getItems); 
        if (data) {
            formData.email = data.email;
            formData.message = data.message;
            refs.form.email.value = formData.email;
            refs.form.message.value = formData.message;
        }
            
 };


function onFormSubmit (e) {
        e.preventDefault();
        e.currentTarget.reset();
        localStorage.removeItem(LOCALSTORAGE_KEY_FORM);
        console.log(formData); 
}
 

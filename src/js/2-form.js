const feedbackForm = document.querySelector('.feedback-form');


import debounce from "lodash.debounce";

feedbackForm.addEventListener('input', debounce(event => {
    const formData = new FormData(feedbackForm);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value.trim();
    })
    localStorage.setItem("feedback-form-state", JSON.stringify(formObject));
}, 600));

feedbackForm.addEventListener("submit", event => {
	event.preventDefault();
    if (event.target.email.value.trim().length == 0 || event.target.message.value.trim().length == 0) {
        alert ('Fill in all fields');
    } else {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.removeItem("feedback-form-state");
    feedbackForm.reset();
}});

try {
    const initialFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
    Array.from(feedbackForm.elements).forEach(el => {
        const strValue = initialFormData[el.name];
        if (initialFormData) {
            if (initialFormData === null) return;
            else {
                el.value = strValue;
            }
        }
    })
} catch (e) {};
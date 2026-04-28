const LS_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');

let formData = JSON.parse(localStorage.getItem(LS_KEY)) || { email: "", message: "" };

populateForm(form, formData);

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function populateForm(formElement, data) {
    // Проходим по ключам объекта и заполняем соответствующие поля формы
    Object.entries(data).forEach(([key, value]) => {
        const field = formElement.elements[key];
        if (field) field.value = value;
    });
}

function handleInput(event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function handleSubmit(event) {
    event.preventDefault();
    const { email, message } = formData;

    if (!email || !message) {
        return alert('Fill please all fields');
    }

    console.log('Submitted Data:', formData);

    localStorage.removeItem(LS_KEY);
    formData = { email: "", message: "" };
    event.currentTarget.reset();
}
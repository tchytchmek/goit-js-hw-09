const formData = {
    email: "",
    message: "",
}
const LS_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.email');
const message = document.querySelector('.textarea');

email.value = JSON.parse(localStorage.getItem(LS_KEY)).email;
message.value = JSON.parse(localStorage.getItem(LS_KEY)).message;

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

function handleInput(event){
  if(event.target.classList.contains('email')){
    formData.email = event.target.value;
  }else if(event.target.classList.contains('textarea')){
    formData.message = event.target.value;
  }
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function handleSubmit(event){
    event.preventDefault();

}
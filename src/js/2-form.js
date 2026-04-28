const formData = {
    email: "",
    message: "",
}

const LS_KEY = "feedback-form-state";


const form = document.querySelector('.feedback-form');
const email = document.querySelector('.email');
const message = document.querySelector('.textarea');

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

populateForm();

function populateForm(){
  let putEmail;
  let putMessage;
  try{
   putEmail = JSON.parse(localStorage.getItem(LS_KEY)).email;
   putMessage = JSON.parse(localStorage.getItem(LS_KEY)).message;
   }catch(e){
    localStorage.setItem(LS_KEY, JSON.stringify(formData));
   }
   if(putEmail){
    email.value = putEmail;
   }
   if(putMessage){
    message.value = putMessage;
   }
}

function handleInput(event){

  try{
  formData.email= JSON.parse(localStorage.getItem(LS_KEY)).email;
  formData.message = JSON.parse(localStorage.getItem(LS_KEY)).message;
  }catch(e){
      localStorage.setItem(LS_KEY, JSON.stringify(formData));

  }
  if(event.target.classList.contains('email')){
    formData.email = event.target.value;
  }
  if(event.target.classList.contains('textarea')){
    formData.message = event.target.value;
  }
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function handleSubmit(event){
    event.preventDefault();
    const elements = event.currentTarget.elements;
    if(!elements.email.value || !elements.message.value){
      alert('Fill please all fields');
    }else{
    localStorage.removeItem(LS_KEY);

    formData.email = "";
    formData.message = "";

    event.currentTarget.reset();

    }

}
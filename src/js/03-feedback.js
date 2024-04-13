const form = document.querySelector('form.feedback-form');
const inputEmail = document.querySelector('label > input');
const inputText = document.querySelector('label > textarea');

const formDataString = JSON.parse(localStorage.getItem('feedback-form-state'));
if (formDataString) {
  inputEmail.value = formDataString.email;
  inputText.value = formDataString.message;
}

form.addEventListener('input', () => {
  const data = {
    email: inputEmail.value,
    message: inputText.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
});



form.addEventListener('submit', e => {
  e.preventDefault();
  console.log({
    email: inputEmail.value,
    message: inputText.value,
  });
  inputEmail.value = '';
  inputText.value = '';
  localStorage.removeItem('feedback-form-state');
});

const form = document.getElementById('form');
const emailInputField = document.getElementById('inputField');
const submitBtn = document.getElementById('submitBtn');
let isCorrect = false;

function validateMyForm()
{
  if(emailInputField.value.length == 0) return false;
  const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
  //   Am gasit si varinta asta mai scurta, dar cred ca prima e cea mai buna (sau nu, idk) => e jale cu RegEx astea
  //   const regEx2 = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if(emailInputField.value != emailInputField.value.trim().match(regEx)) return false;
  return true;
}

form.addEventListener("submit", e => {
    isCorrect = validateMyForm();
    if(!isCorrect) {
        e.preventDefault();
        document.querySelector('.alertError').classList.add('active');
        document.querySelector('.alertError').textContent = 'Please provide a valid email address';
        return false;
    }
    if(document.querySelector('.alertError').classList.contains('active'))
        document.querySelector('.alertError').classList.remove('active');
    return true;
})
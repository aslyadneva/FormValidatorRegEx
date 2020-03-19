// Form on blur event listeners
document.querySelector('#name').addEventListener('blur', validateName);
document.querySelector('#zip').addEventListener('blur', validateZip);
document.querySelector('#email').addEventListener('blur', validateEmail);
document.querySelector('#phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.querySelector('#name');
  const regExp = /^[a-zA-Z]{2,10}$/;

  if (!regExp.test(name.value)) {
    name.classList.add('is-invalid')
  } else {
    name.classList.remove('is-invalid')
  }
}

function validateZip() {
  const zip = document.querySelector('#zip');
  const regExp = /^[0-9]{5}(-[0-9]{4})?$/;

  if (!regExp.test(zip.value)) {
    zip.classList.add('is-invalid')
  } else {
    zip.classList.remove('is-invalid')
  }
}

function validateEmail() {
  const email = document.querySelector('#email');
  const regExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!regExp.test(email.value)) {
    email.classList.add('is-invalid')
  } else {
    email.classList.remove('is-invalid')
  }
}

function validatePhone() {
  const phone = document.querySelector('#phone');
  const regExp = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!regExp.test(phone.value)) {
    phone.classList.add('is-invalid')
  } else {
    phone.classList.remove('is-invalid')
  }
}
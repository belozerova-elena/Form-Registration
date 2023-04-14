const signInBtn = document.querySelector('.signin-btn');
const signUpBtn = document.querySelector('.signup-btn');
const mainForm = document.querySelector('.main__form');

signUpBtn.addEventListener('click', function() {
  mainForm.classList.add('active');
});

signInBtn.addEventListener('click', function() {
  mainForm.classList.remove('active');
});

// PAGE
const page = document.querySelector('.page');
const pageBtn = document.querySelector('.page__wrapper-btn');
const pageAuthorization = document.querySelector('.page-authorization');
const pageRegistration = document.querySelector('.page-registration');

pageBtn.addEventListener('click', function() {
  page.classList.remove('active');
  window.location.reload();
});

// REGULAR
let regLogin =/^[a-z]+([-_]?[a-z0-9]+){0,2}$/i;
let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/i;
let regPassword = /^(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i;

// FORM SIGNIN
const formSingIn = document.querySelector('.form-signin');
formSingIn.addEventListener('submit', (e) => {
  e.preventDefault();

  const loginSingIn = document.querySelector('.login-signin');
  const passwordSingIn = document.querySelector('.password-signin');
  
  let inputSingIn = document.querySelectorAll('.signin-input');
  let error = 0;

  for (let i = 0; i < inputSingIn.length; i++) {
      const input = inputSingIn[i];
      formRemoveError(input);
      // VALIDATE
      if(!regLogin.test(loginSingIn.value)) {
          loginSingIn.classList.add('error');
          error++
      }
      if(!regPassword.test(passwordSingIn.value)) {
          passwordSingIn.classList.add('error');
          error++
      }
  }
  
  if (error === 0) {
      page.classList.add('active');
      pageAuthorization.classList.add('active');
      pageRegistration.classList.remove('active');
  
  }
  return error
});
// FORM SIGNUP
const formSingUp = document.querySelector('.form-signup');
formSingUp.addEventListener('submit', (e) => {
  e.preventDefault();

  const loginSingUp = document.querySelector('.login-signup');
  const emailSingUp = document.querySelector('.email-signup');
  const passwordSingUp = document.querySelector('.password-signup');
  const repeatSingUp = document.querySelector('.repeat-signup');

  let inputSingUp = document.querySelectorAll('.signup-input');
  let error = 0;

  for (let i = 0; i < inputSingUp.length; i++) {
      const input = inputSingUp[i];
      formRemoveError(input);
      // VALIDATE
      if(!regLogin.test(loginSingUp.value)) {
          loginSingUp.classList.add('error');
          error++
      }
      if(!regEmail.test(emailSingUp.value)) {
          emailSingUp.classList.add('error');
          error++
      }
      if(!regPassword.test(passwordSingUp.value)) {
          passwordSingUp.classList.add('error');
          error++
      }
      if(repeatSingUp.value!=passwordSingUp.value) {
          repeatSingUp.classList.add('error');
          error++
      } else if (repeatSingUp.value === '') {
          repeatSingUp.classList.add('error');
          error++;
      }
  }

  if (error === 0) {
      page.classList.add('active');
      pageRegistration.classList.add('active');
      pageAuthorization.classList.remove('active');        
  } 
  return error
});
// ERROR
function formRemoveError(input) {
  input.parentElement.classList.remove('error');
  input.classList.remove('error');
};
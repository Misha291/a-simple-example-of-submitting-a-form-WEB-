const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);

const showError = (input, errorMessage) => {
  input.classList.add('form__input_type_error');
  formError.textContent = errorMessage;
  formError.classList.add('form__input-error_active');
};

const hideError = (input) => {
  input.classList.remove('form__input_type_error');
  // 1. Удалите активный класс ошибки c formError.
  formError.classList.remove('form__input-error_active')
  // 2. Очистите свойство textContent элемента formError.
  formError.textContent = '';
};

const checkInputValidity = () => {
  if (!formInput.validity.valid) {
    showError(formInput, formInput.validationMessage);
  } else {
    hideError(formInput);
  }
};

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

formInput.addEventListener('input', function () {
  checkInputValidity();
});

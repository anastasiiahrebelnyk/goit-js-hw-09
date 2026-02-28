const STORAGE_KEY = "feedback-form-state";

const formEl = document.querySelector('.feedback-form');

let formData = { email: '', message: '' };

 document.addEventListener('DOMContentLoaded', e => {
    formData = loadFromLS(STORAGE_KEY, {});
    formEl.elements.email.value = formData.email || '';
    formEl.elements.message.value = formData.message || '';
 


  formEl.addEventListener('input', (e) => {
    const helper = new FormData(formEl);
    formData.email = helper.get('email').trim();
    formData.message = helper.get('message').trim();
  
    
  
    saveToolS(STORAGE_KEY, formData);
  });

 
  formEl.addEventListener('submit', e => {
    e.preventDefault();
    if (formEl.elements.email.value === "" || formEl.elements.message.value === "") {
      return alert('Fill please all fields');

    };

    const helper = new FormData(formEl);
    formData.email = helper.get('email');
    formData.message = helper.get('message');
    
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    formEl.reset();
    formData.email = '';
    formData.message = '';
  });

 });


  function saveToolS(key, value) {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json);
  };

  function loadFromLS(key, defaultValue) {
    const jsonData = localStorage.getItem(key);
    try {
      const data = JSON.parse(jsonData);
      return data ?? defaultValue;
    } catch {
      return jsonData ?? defaultValue;
    }
  };


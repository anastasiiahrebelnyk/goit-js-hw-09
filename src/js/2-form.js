const STORAGE_KEY = "feedback-form-state";

const formEl = document.querySelector('form');

formEl.addEventListener('input', (e) => {
    const formData = new FormData(formEl);
    const obj = {
        email: formData.get('email'),
        message: formData.get('message'),
    }
    saveToolS(STORAGE_KEY, obj);
});

document.addEventListener('DOMContentLoaded', e => {
    const userForm = loadFromLS(STORAGE_KEY, {});
    formEl.elements.email.value = userForm.email || '';
    formEl.elements.message.value = userForm.message || '';
});

formEl.addEventListener('submit', e => {
    e.preventDefault();
    if (formEl.elements.email.value === "" || formEl.elements.message.value === "") {
        return alert('Fill please all fields');

    };

    const formData = new FormData(formEl);
    const obj = {
        email: formData.get('email'),
        message: formData.get('message'),
    }
    console.log(obj);
    



    localStorage.removeItem(STORAGE_KEY);
    formEl.reset();
});






function saveToolS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function loadFromLS(key, defaultValue) {
  const jsonData = localStorage.getItem(key);
  try {
    const data = JSON.parse(jsonData);
    return data ?? defaultValue;
  } catch {
    return jsonData ?? defaultValue;
  }
}
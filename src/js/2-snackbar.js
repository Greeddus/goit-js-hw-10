import iziToast from 'izitoast/dist/js/iziToast.min.js';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault();

  const delayInput = event.target.elements.delay;
  const stateInput = event.target.elements.state;

  const delay = Number(delayInput.value);
  const state = stateInput.value;

  createPromise(delay, state)
    .then(message => {
      iziToast.success({
        title: 'Success',
        message: message,
      });
    })
    .catch(message => {
      iziToast.error({
        title: 'Error',
        message: message,
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}

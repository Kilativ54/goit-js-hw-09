import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form');
const delayInput = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('iput[name="amount"]');

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

form.addEventListener('submit', startCheck);
function startCheck(e) {
  e.preventDefault();
  let stepFirst = Number(step.value);
  let delayFirst = Number(delayInput.value);
  for (let i = 1; i <= form.amount.value; i += 1) {
    createPromise(i, delayFirst)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayFirst += stepFirst;
  }
}

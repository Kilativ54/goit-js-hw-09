const form = document.querySelector('.form');
const delayInput = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amount = document.querySelector('iput[name="amount"]');
form.addEventListener('submit', startCheck);
function startCheck(){
  for (let i = 1; i <= amount.value; i += 1){

    function createPromise(position, delay) {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
      } else {
        // Reject
      };
    };
    createPromise(i, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  })
  };
} 

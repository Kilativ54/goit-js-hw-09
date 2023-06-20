import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const inputDate = document.querySelector('#datetime-picker');
const btnChooseDate = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');
btnChooseDate.disabled = true;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if(selectedDates[0] < new Date()){
        Notiflix.Notify.failure('Please choose a date in the future');
      }else{
        btnChooseDate.disabled = false;
      }
    },
  };

    flatpickr(inputDate, options)
    btnChooseDate.disabled = true;

btnChooseDate.addEventListener('click', startTime);
function startTime(){

};

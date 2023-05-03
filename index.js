const dayInput = document.querySelector('.days-input');
const monthInput = document.querySelector('.months-input');
const yearInput = document.querySelector('.years-input');
const yearsLabel = document.querySelector('#years-count');
const monthsLabel = document.querySelector('#months-count');
const daysLabel = document.querySelector('#days-count');
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', function() {
  const birthDate = new Date(`${yearInput.value}-${monthInput.value}-${dayInput.value}`);
  const now = new Date();
  const ageInMilliseconds = now - birthDate;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;
  const ageInMonths = ageInDays / 30.44;
  const ageInYears = ageInMonths / 12;

  yearsLabel.innerHTML = `<span style="color: hsl(259, 100%, 65%);">${Math.floor(ageInYears)}</span> `;
  monthsLabel.innerHTML = `<span style="color: hsl(259, 100%, 65%);">${Math.floor(ageInMonths % 12)}</span> `;
  daysLabel.innerHTML = `<span style="color: hsl(259, 100%, 65%);">${Math.floor(ageInDays % 30.44)}</span> `;
});



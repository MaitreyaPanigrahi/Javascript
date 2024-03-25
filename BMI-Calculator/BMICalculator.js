const form = document.querySelector('form');
form.addEventListener('submit', (events) => {
  events.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please Provide a valid Height , ${height} provided`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please Provide a valid Weight, ${weight} provided`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi <= 18.6) {
      results.innerHTML = `You are underweight having BMI = ${bmi}`;
      results.style.color = 'yellow';
    } else if (bmi > 18.6 && bmi <= 24.9) {
      results.innerHTML = `You are Normal having BMI = ${bmi}`;
      results.style.color = 'darkgreen';
    } else {
      results.innerHTML = `You are overweight having BMI = ${bmi}`;
      results.style.color = 'red';
    }
  }
});

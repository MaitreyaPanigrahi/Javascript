const form = document.querySelector('form');
// console.log(form);
form.addEventListener('submit', (events) => {
  events.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.appendChild(
      document.createTextNode(`Please Provide a valid height = ${height}`)
    );
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.appendChild(
      document.createTextNode(`Please Provide a valid weight = ${weight}`)
    );
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      results.appendChild(
        document.createTextNode(
          `You are underweight with BMI = ${bmi} . Please Reload Again.Thank You 👍`
        )
      );
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.appendChild(
        document.createTextNode(
          `You are Normal with BMI = ${bmi}. Please Reload Again.Thank You 👍`
        )
      );
    } else {
      results.appendChild(
        document.createTextNode(
          `You are Overweight with BMI = ${bmi}. Please Reload Again.Thank You 👍`
        )
      );
    }
  }
});

import './style.css';

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('interestForm');
  const resultDiv = document.getElementById('result');
  
  //MAKE A CALL TO THE RBA CASH RATE HERE

  form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    // Get the data from the form
    const judgementDate = new Date(document.getElementById('judgement-date').value);
    const currentDate = new Date(document.getElementById('date-now').value);
    const amount = parseFloat(document.getElementById('amount').value);

    // Calculate the number of days between the dates
    const timeDiff = currentDate.getTime() - judgementDate.getTime();
    const days = timeDiff / (1000 * 3600 * 24);

    // Assume an interest rate or add a field to collect it
    const rate = 5; // Fixed interest rate of 5% per annum
    const interestPerDay = rate / 365 / 100; // Daily interest rate
    const interest = amount * interestPerDay * days;

    // Display the result
    resultDiv.innerHTML = `<h2>Calculated Interest: $${interest.toFixed(2)}</h2>`;
  });
});

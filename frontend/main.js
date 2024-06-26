import './style.css'

fetch('/api')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


document.querySelector('#app').innerHTML = `
  <div>
    <h1>TO INCLUDE CALCULATION HERE</h1>
  </div>
`
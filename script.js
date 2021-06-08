const INPUT = document.getElementById('input')
const BTN = document.getElementById('button')
const RESULT = document.createElement('p')
document.body.appendChild(RESULT)

BTN.addEventListener('click', () => {
  if (INPUT.value < 0) {
    RESULT.textContent = 'This number is negative'
  } else {
    RESULT.textContent = 'This number is positive'
  }
})

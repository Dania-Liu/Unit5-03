// Adds a background colour.
document.body.style.backgroundColor = 'red'

// Adds a submission button, click to submit.
document.getElementById('button').addEventListener('click', results)

// Gives an alert when the textbox answer has been submitted.
function results () {
  alert(document.getElementById('bar').value)
}

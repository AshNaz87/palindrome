let Phrase = require('./index.js');

function palindromeTester(event) {
  event.preventDefault();

  let phrase = new Phrase(event.target.phrase.value);

  let palindromeResult = document.querySelector('#palindromeResult');

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `<strong>"${phrase.content}"</strong> is a palindrome!`
  } else {
    palindromeResult.innerHTML = `<strong>"${phrase.content}"</strong> is not a palindrome!`
  }
}

document.addEventListener('DOMContentLoaded', function() {
  let tester = document.querySelector('#palindromeTester');
  tester.addEventListener('keypress', function(event) {
    event.preventDefault();
    if (event.which === 13 || e.keyCode === 13) {
      palindromeTester(event);
    }
  });
});
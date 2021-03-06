module.exports = Phrase;

String.prototype.reverse = function() {
  return Array.from(this).reverse().join('').toLowerCase();
}

// Tests whether a string is empty

String.prototype.blank = function() {
  return this.length === 0 || /^\s+|$\s+/gm.test(this);
}

function Phrase(content) {
  this.content = content;

  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content, e.g.
  // new Phrase('Hello, world!').letters() === 'Helloworld'
  this.letters = function letters() {
    const lettersRegex = /[a-z]/gi;
    return (this.content.match(lettersRegex) || []).join('');
  }
  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    if (this.processedContent()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  }
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();
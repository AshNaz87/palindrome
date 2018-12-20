# Phrase object (with Palindrome detector)

This is a sample NPM module created by **Ashraf Nazar**

The module can be used as follows:

```bash
$ npm install --global mhartl-palindrome
$ vim test.js
<<<<<<< HEAD
let Phrase = require("AshNaz87-palindrome");
=======
let Phrase = require("ashnaz87-palindrome");
>>>>>>> 9a66f8b... Fix README
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```
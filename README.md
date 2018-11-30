# Phrase object (with Palindrome detector)

This is a sample NPM module created by **Ashraf Nazar**

The module can be used as follows:

```bash
$ npm install --global mhartl-palindrome
$ vim test.js
let Phrase = require("AshNaz87-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```
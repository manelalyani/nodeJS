var generator = require('generate-password');

var passwords = generator.generate( {
	length: 10,
	uppercase: false
});

console.log(passwords);
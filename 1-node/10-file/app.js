const fs = require('fs');

try {
	fs.renameSync('./text.txt', 'new-text.txt');
} catch (error) {
	console.error(error);
}

fs.rename('./new-text.txt', './text.txt', (error) => {
	console.log(error);
});

fs.promises
	.rename('./text2.txt', './text2-new.txt')
	.catch(console.log);

console.log('hello');
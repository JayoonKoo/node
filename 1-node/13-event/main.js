const logger = require('./logger.js');
const emmiter = new logger.Logger();

emmiter.on('log', (str) => {
	console.log(str);
});

emmiter.log(() => {
	console.log('..... doing sumeghing!')
})
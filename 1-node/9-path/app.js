const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

console.log(path.dirname(__filename));

console.log(path.extname(__filename));

const parse = path.parse(__filename)
console.log(parse);

console.log(path.format(parse));

console.log(path.isAbsolute(__dirname));

console.log(path.normalize('./folder/////sub'));

console.log(path.join(__dirname, 'image'));
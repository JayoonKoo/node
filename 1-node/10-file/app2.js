const fs = require("fs").promises;

// 프리티어에서 자동으로 포맷팅 하는거 막기 위해서 줄 끝에 //
fs.readFile("./10-file/text.txt", "utf-8") //
  .then(console.log)
  .catch(console.error);

fs.writeFile("./10-file/file.txt", "new file") //
  .catch(console.error);

fs.appendFile("./10-file/file.txt", "add content") //
	.catch(console.error);

fs.copyFile("./10-file/file.txt", "./10-file/new-file.txt") //
	.catch(console.error);

fs.mkdir("newdir") //
	.catch(console.error);

fs.readdir('./') //
	.then(console.log)
	.catch(console.error);
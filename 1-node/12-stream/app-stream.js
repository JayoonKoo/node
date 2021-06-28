const fs = require('fs');

const data = [];
// 스트림 만들기, this 를 반환하기 때문에 체이닝 가능. 
fs.createReadStream('./file.txt', {
	highWaterMark: 8, // 한번에 읽어오는 데이터 양 기본 64kbytes
	encoding: 'utf-8'
})
	.on('data', (chunk) => {
		data.push(chunk);
	})
	.on('end', () => {
		console.log(data.join(''));
	})
	.on('error', (error) => {
		console.log(error);
	});

// ones -> on 대신에 사용하면 한번만 받아와서 처리함.


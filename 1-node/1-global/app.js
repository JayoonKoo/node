// 브라우저에게 node로 돌아가는 환경임을 알려줌. 
const fs = require('fs');

global.hello = () => {
	console.log("hello");
}

global.hello();
hello();
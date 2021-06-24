let count = 0;

function increase() {
	count++;
}

function getCount() {
	return count;
}

// 예전 node 에서 했던 버전으로 내보내기, 예전엔 js에 import 기능이 없었음.
module.exports.getCount = getCount;
module.exports.increase = increase;
// exports.increase = increase;
// 같은 기능으로 작동하지만 exports는 module에 exports를 참조 하고 있음. 만약에
exports = {} ;
// 이렇게 하면 더이상 같지 않아짐. 
console.log(module.exports === exports);
// 이제는 es6에 import 를 사용하니 참고용으로만. 
console.log(module);
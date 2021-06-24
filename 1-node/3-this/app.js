function hello() {
	console.log(this === global);
}

hello();

class A {
	constructor(num) {
		this.num = num;
	}
	memberFunction() {
		console.log('---------- class --------');
		// 클래스 자신을 가리킴
		console.log(this);
		console.log(this === global);
	}
}

const a = new A(1);
a.memberFunction();

console.log('-------------- global scope ----------');
console.log(this);
// 브라우저와 다른점, 브라우저에서는 global을 가리키겠지만 node 에서는 module.exports를 가리킴.
console.log(this === module.exports);
console.log("logging....");

// log level 로그의 시각성별로 
console.log('log'); // 개발
console.info('info'); // 정보
console.warn('warn'); // 발생하면 안되지만 치명적이진 않음 (경보)
console.error('error'); // 에러, 사용자 에러, 시스템 에러 

// assert
console.assert(2 === 3, 'not Same!');
console.assert(2 === 2, 'not Same!');

// print object
const student = {name: 'koo', age:27, company: {name:'ac'}};
console.log(student);
console.table(student);
console.dir(student, {showHidden: true, colors: false, depth: 0});

// measuring time
console.time('for loop');
for (let i =0; i< 10; i++) {
	i++;
}
console.timeEnd('for loop')

// counting
function a() {
	console.count('a function');
}

a();
console.countReset('a function');
a();

// trace
function f1() {
	f2();
}
function f2() {
	f3();
}
function f3() {
	console.log('f3');
	console.trace();
}

f1();
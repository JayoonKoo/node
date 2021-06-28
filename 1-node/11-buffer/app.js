const buf = Buffer.from('Hi');

console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2);
buf.copy(buf2);
buf2.copy(buf3);

// concat
const newBuffer = Buffer.concat([buf, buf2, buf3]);
console.log(newBuffer.toString());
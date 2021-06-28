const EventEmitter = require("events");
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log("first callback - ", args);
}

emitter.on("koo", callback1);
emitter.on("koo", (args) => {
  console.log("second callback - ", args);
});

// koo 이벤트 상황 정의, 매개변수 설정
emitter.emit("koo", { message: 1 });
emitter.emit("koo", { message: 2 });
// 특정 이벤트 콜백 지우기
emitter.removeListener('koo', callback1);
// 이벤트 콜백 모두 지우기 
// emitter.removeAllListeners();
emitter.emit("koo", { message: 3 });

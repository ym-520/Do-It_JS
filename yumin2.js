// object, 객체
// key: value 쌍인 데이터
// const yumin = {
// name: 'YUMIN',
// age: 20,
// grade: 10,
// }
const player = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " nice to meet you");
  },
};

player.sayHello("lynn");
player.sayHello("nico");

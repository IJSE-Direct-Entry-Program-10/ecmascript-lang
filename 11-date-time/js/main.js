const d1Elm = document.getElementById('d1');

d1Elm.innerText = new Date();

let d1 = new Date();
console.log(d1.getFullYear());
console.log(d1.getMonth() + 1);
console.log(d1.getDay());
console.log(d1.getDate());
console.log(d1.getTime());
console.log(d1.getHours());
console.log(d1.getMinutes());
console.log(d1.getSeconds());
console.log(d1.getMilliseconds());

let d2 = new Date(Date.parse("2020-05-02 00:00"));
d1Elm.innerText = d2;

const d2Elm = document.getElementById('d2');

var LocalDateTime = JSJoda.LocalDateTime;
var DateTimeFormatter = JSJoda.DateTimeFormatter;

const today = LocalDateTime.now();
const newDay = today.plusMonths(2);
d2Elm.innerText = newDay.format(DateTimeFormatter.ofPattern("yyyy/MM/dd hh:mm"));

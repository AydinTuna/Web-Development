let value;

const now = new Date();
value = now;

const date1 = new Date("1993-12-17 06:15:00");
const date2 = new Date("September 19 1993");
const date3 = new Date("9/19/1993");

value = date1;
// value = date2;
// value = date3;
value = date1.getMonth(); // ayları saymaya 0 dan başlar

console.log(value);
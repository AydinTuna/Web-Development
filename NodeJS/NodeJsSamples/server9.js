var url = require("url");
var adr = "https://www.youtube.com/watch?v=pe6du2o_vdc";
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);


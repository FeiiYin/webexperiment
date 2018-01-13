
var fs = require("fs");


var sentense = "fnhnajjsdnhfkj" ;
  fs.writeFile('input.txt', sentense,{flag:'a'},  function(err) {
    if (err) {
        return console.error(err);
    }
    
    
    
    fs.readFile('input.txt', function (err, data) {
        if (err) {
          return console.error(err);
        }
        console.log("" + data.toString());
    });
  });

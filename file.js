var fs = require('fs');
var messages_buffer = [];
var counter;


setInterval(function (){

fs.appendFile('messages.txt',messages_buffer, function (err) {

if(!err) {

messages_buffer = '';

}

})

},500);

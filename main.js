var fs=require("fs");
fs.readFile('input1.txt', function(err,data)
{
    if(err)
    {
        return console.error(err);
}
console.log("Asynchronous read:"+ data.toString());
});
var data=fs.readFileSync('input1.txt');
console.log("Synchronous read:"+ data.toString());
console.log("Program Ended");



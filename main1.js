var fs=require("fs");
console.log("Going to open file!");
fs.open('input1.txt','r+',function(err,fd){
if(err){
    return console.error(err);
}
console.log("File opened sucessfully!");
});
var circle ={
    area:function(pi=3.14,r=10)
    {
        var a;
        a= pi * r * r;
        console.log('area of circle is:'+ a);
    },
    c:function(pi=3.14,r=7)
    {
        var z;
         z = 2 * pi * r;
        console.log("circumference of circle is:"+ z);
    }
};
  module.exports = circle; 
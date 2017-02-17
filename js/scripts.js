$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var A = parseInt($("#Side1").val());
    var B = parseInt($("#Side2").val());
    var C = parseInt($("#Side3").val());

    if ((A + B <= C) || (A + C <= B) || (B + C <= A)){
        alert("not a triangle!");
    } else if ((A === B) && (B=== C) && (A === C)){
        $(".text").text("Equalateral Triangle!");
    } else if ((A === B) || (A === C) || (B === C)){
        $(".text").text("Isosceles Triangle!");
    } else if ((A != B) && (A != C) && (B != C)){
        $(".text").text("Scalene Triangle!");
    };
  });
});

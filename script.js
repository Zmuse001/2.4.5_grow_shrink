$(document).ready(function(){
    var counter = 0;
    $("#grow").click(function(){
    $("#shrink").animate({height:300, width:300}), "slow"
    $("#shrink").animate({height:0, width:0}), "slow", function(){
        counter++ }
        $("#counter").text("Grow and Shrink Counter");
    });
});
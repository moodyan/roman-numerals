//back-end

function toRomanNumerals(num){


 console.log(roman);
}



//front-end
$(document).ready(function(){
  $("form#pigLatin").submit(function(event){
    event.preventDefault();

    var num = $("#number").val()

    var roman = toRomanNumerals(num)
    $("ul").append("<li>"+roman+"</li>")
  });
});

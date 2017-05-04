//back-end

function toRomanNumerals(num){
  var result = "";
  num = parseInt(num);
  if (!+num) {
    return false;
  }
  if (num > 3999) {
    alert("Number is too big!");
    return false;
  }


 console.log(roman);
}



//front-end
$(document).ready(function(){
  $("form#numberInput").submit(function(event){
    event.preventDefault();

    var num = $("#number").val()

    var roman = toRomanNumerals(num)
    $("ul").append("<li>"+roman+"</li>")
  });
});

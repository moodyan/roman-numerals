//back-end

function toRomanNumerals(num){
  var result = [];
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  if (num<=0 || num>3999) {
    alert("Number cannot be 0 or a negative number and cannot be larger than 3,999. Please enter a different number.");
    return false;
  }

  for (var i = 0; i < numbers.length; i++) {
    while (num%numbers[i] < num) {
      result += roman[i];
      num -= numbers[i];
    }
  }

// Start at the largest number in numbers array, continue subtracting from the numbers array and appending roman numeral to result as long as the remainder is greater than the numbers value. Remove the number from the num input.

 return result;
}



//front-end
$(document).ready(function(){
  $("form#numberInput").submit(function(event){
    event.preventDefault();

    var num = $("#number").val()

    var result = toRomanNumerals(num)
    $("ul").append("<li>"+result+"</li>")
  });
});

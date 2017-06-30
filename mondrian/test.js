var num1;
var num2;
var funct;
var ans;

function calculate() {
  num1 = parseFloat($('input:text[name=number1]') val());
  num2 = parseFloat($('input:text[name=number2]') val();
  funct = parseInt($('input[name="funct"]:checked').val());
  switch(funct) {
    case 0:
    ans = num1 + num2;
    break;
    case 1:
    ans = num1 - num2;
    break;
    case 2:
    ans = num1 * num2;
    break;
    case 3:
    if(num2 != 0) {
      ans = num1 / num2;
    }
    else {
      alert("DIVIDEBYZERO");
    }
    break;
  }
  $("span").html(ans);
}

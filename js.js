const container = document.getElementById("container");
let input = document.querySelector("input");
container.addEventListener("click", function(event) {
  let target = event.target.textContent;
  let symbol = input.value.slice(input.value.length-1, input.value.length);
  if(event.target.tagName === "BUTTON") {
  if (target === "+" || target === "-" || target === "÷" || target === "✖") {
    if(symbol === "/" || symbol === "*" || symbol === "-" || symbol === "+"){
     // let answer = 
          input.value = input.value.slice(0, input.value.length-1) + event.target.value;
    } else input.value += event.target.value;
      
  }
  if (parseInt(target) || target == 0) input.value += target;
  if (target === "C") {
    input.value = "";
    input.placeholder = 0;
  }
  if (target === "√") {
    if (isNaN(Math.sqrt(input.value))) err();
      else input.value = Math.sqrt(input.value);
  }
  if (target === "±") {
    if (isNaN(-input.value)) err();
    else input.value = -input.value;
  }
  if (target === ".") input.value += target;
  if (target === "←") input.value = input.value.slice(0, input.value.length-1);
    if (target === "=") {
      let test = input.value.slice(input.value.length-1, input.value.length);
      if (input.value.search(/[0-9]/)) {
        err();
        return;
      }
      if (!isNaN(eval(input.value))) {
        input.placeholder = 0;
        input.value = eval(input.value);
      }                 
    }
  }
}); 
function err() {
  input.placeholder = "Ошибка";
  input.value = "";
}
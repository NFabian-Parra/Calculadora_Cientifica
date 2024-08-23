const screen = document.querySelector("#screen")
const btns = document.querySelectorAll(".btn")

function evaluateExpression() {
  // Manejo de la exponenciación
  if (screen.value.includes("^")) {
    let parts = screen.value.split("^");
    let base = parseFloat(parts[0]);
    let exponent = parseFloat(parts[1]);
    if (!isNaN(base) && !isNaN(exponent)) {
      screen.value = Math.pow(base, exponent);
    } else {
      alert("Por favor, ingrese números válidos.");
    }
  }
  // Manejo del porcentaje
  else if (screen.value.includes("%")) {
    // Caso 1: Convertir a forma porcentual si el % está al final
    if (screen.value.endsWith("%")) {
      let value = parseFloat(screen.value.slice(0, -1));
      if (!isNaN(value)) {
        screen.value = value / 100;
      } else {
        alert("Por favor, ingrese un número válido.");
      }
    }
    // Caso 2: Aplicar porcentaje en operaciones matemáticas
    else {
      let expression = screen.value.replace(/(\d+)%/g, "*($1/100)");
      try {
        screen.value = eval(expression);
      } catch (e) {
        alert("Expresión inválida.");
      }
    }
  }
  // Manejo de otras operaciones matemáticas
  else {
    try {
      screen.value = eval(screen.value);
    } catch (e) {
      alert("Expresión inválida.");
    }
  }
}

for(item of btns){
  item.addEventListener("click", (e) =>{
    let btnText = e.target.innerText;

    if (btnText == "x"){
      btnText = "*";
    }

    if (btnText == "÷"){
      btnText = "/";
    }

    if (btnText == '%') {
      btnText = '%'; // Agrega el símbolo % al valor actual en pantalla
    }

    screen.value += btnText;
  });
  
//   screen.addEventListener('keydown', (e)=>{
//     e.preventDefault();
//  })
  

  function sin(){
    screen.value = Math.sin(screen.value)
  }

  function cos(){
    screen.value = Math.cos(screen.value)
  }

  function tan(){
    screen.value = Math.tan(screen.value)
  }

  function pow() {
    screen.value += "^"; // Agrega el símbolo ^ después del número actual
  }

  function log(){
    screen.value = Math.log(screen.value)
  }

  function sqrt(){
    screen.value = Math.sqrt(screen.value)
  }

  function pi(){
    screen.value = 3.1416;
  }

  function e(){
    screen.value = 2.7182;
  }

  function fact(){
    let fac = 1;
    let num = screen.value;
    for(let i = 1; i <= num; i++){
      fac *= i;

      screen.value = fac
    }
  }

    function backspc(){
      screen.value = screen.value.substr(0, screen.value.length -1)
    }
}
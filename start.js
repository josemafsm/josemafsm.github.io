


var iType = 0;
var txt = 'No sé cuántas maneras de amar existan, pero estoy dispuesto a descubrirlas todas contigo. Mi primer latido al despertar es para ti; eres lo que me da fuerza todos los días, y cada día que pasa te quiero más que el anterior. Tú eres el ritmo que hace latir mi corazón. Un año de tantos momentos que hemos pasado juntos, los he juntado para recordarlos.'; /* The text */
var speed = 30; /* The speed/duration of the effect in milliseconds */

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function typeWriter() {

  const button = document.getElementById("uploadBtn");

  if (iType < txt.length) {
    document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML.replace("|", "") + txt.charAt(iType) + (iType % 8 === 0 ? "|" : iType % 8 === 1 ? "|" : iType % 8 === 2 ? "|" : iType % 8 === 3 ? "|" : "") ;
    iType++;
    if (txt.charAt(iType) === " ")
      setTimeout(typeWriter, speed * randomIntFromInterval(1,4));
    else if (txt.charAt(iType) === ".")
      setTimeout(typeWriter, speed * 10);
    else setTimeout(typeWriter, speed);
  }
  else {
    document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML.replace("|", "");
    button.style.display = "block";
setTimeout(() => {
  button.classList.add("show");
}, 50); // Pequeño delay para que el transition se active
  
  }
}

typeWriter();



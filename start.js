


var iType = 0;
var txt = 'Estoy seguro que eres tu, mil y una veces te elijo a ti. \nPorque eres el ritmo que me hace disfrutar la vida!'; /* The text */
var speed = 40; /* The speed/duration of the effect in milliseconds */

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function typeWriter() {

  const button = document.getElementById("uploadBtn");

  if (iType < txt.length) {
    document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML.replace("|", "") + txt.charAt(iType) + (iType % 6 === 0 ? "|" : iType % 6 === 1 ? "|" : iType % 6 === 2 ? "|" : "") ;
    iType++;
    if (txt.charAt(iType) === " ")
      setTimeout(typeWriter, speed * randomIntFromInterval(1,4));
    else
      setTimeout(typeWriter, speed);
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



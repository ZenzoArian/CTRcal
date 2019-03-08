function CalThatCirkel() {
  var straal = document.getElementById("Straal").value;
  if (straal != 0) {

    let Oppervlakte = Math.PI * Number(straal) * Number(straal);
    let Omtrek = 2 * Math.PI * Number(straal);
    document.getElementById("Oppervlakte").innerHTML = "Oppervlakte: " + Oppervlakte;
    document.getElementById("Omtrek").innerHTML = "Omtrek: " + Omtrek;
  } else {
    document.getElementById("Oppervlakte").innerHTML = "";
    document.getElementById("Omtrek").innerHTML = "Incorrect input ontvangen.";
    window.setTimeout(resetToZeroCirkel, 2000);
  }


  function resetToZeroCirkel() {
    document.getElementById("Oppervlakte").innerHTML = "Oppervlakte";
    document.getElementById("Omtrek").innerHTML = "Omtrek";
  }
}

function CalThatTemp() {
  var graden = document.getElementById("graden").value;
  var keuze = document.getElementById("keuze").value;
  if (keuze == "Celsius") {

    if (graden != 0) {

      let Fahrenheit = 9 * Number(graden) / 5 + 32;
      let Kelvin = Number(graden) + 273;
      document.getElementById("Fahrenheit").innerHTML = "Fahrenheit: " + Fahrenheit;
      document.getElementById("Kelvin").innerHTML = "Kelvin: " + Kelvin;
    } else {
      document.getElementById("Fahrenheit").innerHTML = "";
      document.getElementById("Kelvin").innerHTML = "Incorrect input ontvangen.";
      window.setTimeout(resetToZeroTemp, 2000);
    }


    function resetToZeroTemp() {
      document.getElementById("Fahrenheit").innerHTML = "Graden Fahrenheit";
      document.getElementById("Kelvin").innerHTML = "Graden Kelvin";
    }
  }
  if (keuze == "Kelvin") {
    if (graden != 0) {
      let NewGraden = Number(graden) - 273;
      let Fahrenheit = 9 * Number(NewGraden) / 5 + 32;
      let Celsius = Number(graden) - 273;
      document.getElementById("Fahrenheit").innerHTML = "Fahrenheit: " + Fahrenheit;
      document.getElementById("Kelvin").innerHTML = "Celsius: " + Celsius;
    } else {
      document.getElementById("Fahrenheit").innerHTML = "";
      document.getElementById("Kelvin").innerHTML = "Incorrect input ontvangen.";
      window.setTimeout(resetToZeroTemp, 2000);
    }


    function resetToZeroTemp() {
      document.getElementById("Fahrenheit").innerHTML = "Graden Fahrenheit";
      document.getElementById("Kelvin").innerHTML = "Graden Kelvin";
    }
  }
}

function CalThatRecht() {
  var Length = document.getElementById("Length").value;
  var Width = document.getElementById("Width").value;

  if (Length != 0 || Width != 0) {

    let Oppervlakte = Number(Length) * Number(Width);
    let Omtrek = 2 * Number(Length) + 2 * Number(Width);
    let Diagonaal = Number(Length) * Number(Length) + Number(Width) * Number(Width);
    document.getElementById("Oppervlakte").innerHTML = "Oppervlakte: " + Oppervlakte;
    document.getElementById("Omtrek").innerHTML = "Omtrek: " + Omtrek;
    document.getElementById("Diagonaal").innerHTML = "Diagonaal: " + Diagonaal;
  } else {
    document.getElementById("Oppervlakte").innerHTML = "";
    document.getElementById("Omtrek").innerHTML = "Incorrect input ontvangen.";
    document.getElementById("Diagonaal").innerHTML = "";

    window.setTimeout(resetToZeroRecht, 2000);
  }


  function resetToZeroRecht() {
    document.getElementById("Oppervlakte").innerHTML = "Oppervlakte";
    document.getElementById("Omtrek").innerHTML = "Omtrek";
    document.getElementById("Diagonaal").innerHTML = "Diagonaal";

  }
}

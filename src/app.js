import "./style.css";
// variables

window.onload = () => {
  let Suit = null;
  let Number = null;
  let Switchnumb = null;
  let Cards = [];

  // Generar type suit
  let generaterandomtype = () => {
    let type = ["diamond", "spade", "heart", "club"];
    let indextype = Math.floor(Math.random() * type.length);
    return type[indextype];
  };
  // generar  number
  let generaterandomnumber = () => {
    let Numbers = Math.floor(Math.random() * 13) + 1;
    return Numbers;
  };
  function switchvalue(valor) {
    switch (valor) {
      case 1:
        return "A";
      case 2:
        return "2";
      case 3:
        return "3";
      case 4:
        return "4";
      case 5:
        return "5";
      case 6:
        return "6";
      case 7:
        return "7";
      case 8:
        return "8";
      case 9:
        return "9";
      case 10:
        return "10";
      case 11:
        return "J";
      case 12:
        return "Q";
      case 13:
        return "K";
      default:
        return valor;
    }
  }

  // boton evento draw
  let button = document.getElementById("draw");
  button.addEventListener("click", function() {
    let inputnumber = document.getElementById("inputnumber").value;

    for (let i = 0; i < inputnumber; i++) {
      Number = generaterandomnumber();
      Suit = generaterandomtype();
      Switchnumb = switchvalue(Number);
      Cards.push({ numeros: Number, type: Suit });

      let newElement = document.createElement("div");
      newElement.classList.add("card");
      newElement.classList.add(Suit);
      newElement.textContent = switchvalue(Number);
      document.querySelector(".table").appendChild(newElement);
    }
  });

  console.log(Cards);

  // bubble sort
  let SortCard = document.getElementById("sort");
  SortCard.addEventListener("click", function() {
    let size = Cards.length;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size - 1; j++) {
        if (Cards[j].numeros > Cards[j + 1].numeros) {
          let temp = Cards[j];
          Cards[j] = Cards[j + 1];
          Cards[j + 1] = temp;
        }
        let newdiv = document.createElement("div");
        newdiv.classList.add("fila");
        for (let n = 0; n < Cards.length; n++) {
          let icon = switchvalue(Cards[n].numeros);
          let newElement2 = document.createElement("div");
          newElement2.classList.add("card");
          newElement2.classList.add(Cards[n].type);
          newElement2.textContent = icon;
          newdiv.appendChild(newElement2);
        }
        document.querySelector(".Optionrandom").appendChild(newdiv);
      }
    }
  });
  console.log(Cards);
};

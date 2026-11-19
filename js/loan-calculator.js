// Beräknar lånekostnaden med bilens pris som lånebelopp och 15 % ränta.
// Besökaren kan ändra antalet år. Pris och ränta är skrivskyddade.
const calculator = document.createElement("section");

calculator.innerHTML = `
  <h2>Lånekalkylator</h2>

  <label for="loan-years">Antal år:</label>
  <input id="loan-years" type="number" min="1" value="5">

  `;

  document.body.append(calculator);
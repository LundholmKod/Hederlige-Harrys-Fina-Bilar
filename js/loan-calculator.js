// Beräknar lånekostnaden med bilens pris som lånebelopp och 15 % ränta.
// Besökaren kan ändra antalet år. Pris och ränta är skrivskyddade.

// Skapar en sektion för kalkylatorn.
const calculator = document.createElement("section");

// Fyller sektionen med en rubrik och tre fält. Lånebeloppet är ett testvärde.
calculator.innerHTML = `
  <h2>Lånekalkylator</h2>
  <div>
    <label for="loan-amount">Lånebelopp (kr)</label>
    <input id="loan-amount" type="number" value="129000" readonly>
</div>

<div>
  <label for="loan-interest">Ränta (%)</label>
  <input id="loan-interest" type="number" value="15" readonly> 
</div>

<div>
  <label for="loan-years">Antal år:</label>
  <input id="loan-years" type="number" min="1" value="5">
</div>
<p id="loan-result"></p>
  `;

  // Visar kalkylatorn längst ner på sidan.
  document.body.append(calculator);

  // Hittar de tre fälten med hjälp av deras id.
const amountInput = document.getElementById("loan-amount");
const interestInput = document.getElementById("loan-interest");
const yearsInput = document.getElementById("loan-years");
const result = document.getElementById("loan-result");

  // Kör funktionen varje gång besökaren ändrar antalet år.
yearsInput.addEventListener("input", function (){
  // Läser fältens värden som tal inför uträkningen.
  const amount = amountInput.valueAsNumber;
  const interest = interestInput.valueAsNumber;
  const years = yearsInput.valueAsNumber;

  // Låneperioden måste vara ett heltal större än 0. Om det inte är det, visas ett felmeddelande.
if (!Number.isInteger(years) || years < 1) {
    result.textContent = "Vänligen ange ett giltigt antal år (heltal större än 0).";
    return;
  }

  // Skriver ut talen så att vi kan kontrollera dem i konsolen.
  console.log("Lånebelopp:", amount);
  console.log("Ränta:", interest);
  console.log("Antal år:", years);

 //Gör om årsräntan från procent till ränta per månad.
  const monthlyInterest = interest / 100 / 12;
  const months = years * 12;

  //Beräknar samma betalning varje månad under hela lånet.
  const interestFactor = (1 + monthlyInterest) ** months;
  const monthlyPayment = amount * monthlyInterest * interestFactor / (interestFactor - 1);
  result.textContent = "Månadskostnad: " + monthlyPayment.toFixed(2) + " kr";
})
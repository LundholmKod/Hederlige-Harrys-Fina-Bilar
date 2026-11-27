// Beräknar lånekostnaden med bilens pris som lånebelopp och 15 % ränta.
// Besökaren kan ändra antalet år. Pris och ränta är skrivskyddade.

function calculateLoan(carPrice) {

  // Hittar de tre fälten med hjälp av deras id.
const amountInput = document.getElementById("loan-amount");
const interestInput = document.getElementById("loan-interest");
const yearsInput = document.getElementById("loan-years");
const result = document.getElementById("loan-result");

// Fyller i lånebeloppet med priset på den valda bilen.
amountInput.value = carPrice;

  // Kör funktionen varje gång besökaren ändrar antalet år.
function calculateMonthlyPayment () {
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
}

yearsInput.addEventListener("input", calculateMonthlyPayment);
calculateMonthlyPayment(); }

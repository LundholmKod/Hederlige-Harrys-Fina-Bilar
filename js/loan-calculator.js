// Beräknar lånekostnaden med bilens pris som lånebelopp och 15 % ränta.
// Besökaren kan ändra antalet år. Pris och ränta är skrivskyddade.
const calculator = document.createElement("section");

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
  `;

  document.body.append(calculator);

const amountInput = document.getElementById("loan-amount");
const interestInput = document.getElementById("loan-interest");
const yearsInput = document.getElementById("loan-years");

yearsInput.addEventListener("input", function (){
  const amount = amountInput.valueAsNumber;
  const interest = interestInput.valueAsNumber;
  const years = yearsInput.valueAsNumber;

  console.log("Lånebelopp:", amount);
  console.log("Ränta:", interest);
  console.log("Antal år:", years);
})
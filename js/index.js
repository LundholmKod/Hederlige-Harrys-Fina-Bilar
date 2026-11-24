// Visar fem bilannonser på startsidan med data från cars-data.js.
// Varje annons länkar till cars.html med bilens ID, till exempel cars.html?id=1.



/* TILLFÄLLIG TESTKOD – endast för att testa CSS */

const Cars = [
    { name: "Audi A4", price: "189 000 kr", image: "images/AudiA4.png" },
    { name: "BMW 3-serie", price: "229 000 kr", image: "images/Bmw3serie.webp" },
    { name: "Mercedes E-klass", price: "259 000 kr", image: "images/MercedesE-klass.jpg" },
    { name: "Porsche 911", price: "899 000 kr", image: "images/Porsche911.jpg" },
    { name: "Volvo XC90", price: "349 000 kr", image: "images/VolvoXC90.jpg" }
];

const carList = document.getElementById("car-list");

Cars.forEach(car => {
    const column = document.createElement("div");
    column.className = "col-md-4";

    column.innerHTML = `
        <Section class="card">
            <img src="${car.image}" class="card-img-top" alt="${car.name}">
            <section class="card-body">
                <h3 class="card-title">${car.name}</h3>
                <p class="card-text">Pris: ${car.price}</p>
                <a href="#" class="btn btn-primary">Visa bil</a>
            </section>
        </section>
    `;

    carList.appendChild(column);
});

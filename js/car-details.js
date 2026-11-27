// Hämtar bilens ID från adressfältet.
const params = new URLSearchParams(window.location.search);
const carId = Number(params.get("id"));

// Hittar rätt bil i den gemensamma listan.
const selectedCar = cars.find(car => car.id === carId);

const carImage = document.querySelector("main img");

// Visar information om den valda bilen.
if (selectedCar) {

    document.getElementById("car-name").textContent = selectedCar.type;

    document.getElementById("car-year").textContent =
        "Årsmodell: " + selectedCar.year;

    document.getElementById("car-price").textContent =
        selectedCar.price.toLocaleString("sv-SE") + " kr";

    carImage.src = selectedCar.imageUrl;
    carImage.alt = selectedCar.type;

} else {

    document.getElementById("car-name").textContent =
        "Bilen hittades inte";

    carImage.hidden = true;
}
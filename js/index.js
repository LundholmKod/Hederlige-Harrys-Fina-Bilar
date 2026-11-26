const carList = document.querySelector("#car-list");

const page1 = document.querySelector("#page-1");
const page2 = document.querySelector("#page-2");

const carsPerPage = 5;
let currentPage = 1;

function showCars() {

    carList.innerHTML = "";

    const start = (currentPage - 1) * carsPerPage;
    const end = start + carsPerPage;

    const carsToShow = cars.slice(start, end);

    carsToShow.forEach(function (car) {

        const article = document.createElement("article");
        article.classList.add("col-md-4");

        article.innerHTML = `
            <a href="cars.html?id=${car.id}" class="card h-100 text-decoration-none">

                <img 
                    src="${car.imageUrl}" 
                    class="card-img-top" 
                    alt="${car.type}"
                >

                <section class="card-body">

                    <h2 class="card-title">
                        ${car.type}
                    </h2>

                    <p class="card-text">
                        Årsmodell: ${car.year}
                    </p>

                    <p class="card-text">
                        Pris: ${car.price} kr
                    </p>

                </section>
            </a>
        `;

        carList.appendChild(article);
    });

    updatePageButtons();
}

function updatePageButtons() {

    page1.classList.remove("active");
    page2.classList.remove("active");

    if (currentPage === 1) {
        page1.classList.add("active");
    } else {
        page2.classList.add("active");
    }
}

page1.addEventListener("click", function () {
    currentPage = 1;
    showCars();
});

page2.addEventListener("click", function () {
    currentPage = 2;
    showCars();
});

showCars();
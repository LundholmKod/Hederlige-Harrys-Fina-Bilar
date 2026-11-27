fetch("components/nav.html")
    .then(function (response) {
        return response.text();
    })
    .then(function (html) {
        document.querySelector("#nav-container").innerHTML = html;
    });

fetch("components/footer.html")
    .then(function (response) {
        return response.text();
    })
    .then(function (html) {
        document.querySelector("#footer-container").innerHTML = html;
    });
fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-container").innerHTML = data;
    });
    
fetch("components/nav.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("nav-container").innerHTML = data;
    });
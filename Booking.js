window.onload = function () {
    console.log("Bienvenido a la pagina de Moteles de Valledupar");
    showlmage(currentimageindex);
};

function toggleinfo(sectionld) {
    const section = document.getElementById(sectionld);
    const info = section.querySelector("p");

    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
    } else {
        body.classList.add("dark-mode");
    }
}
let currentimageindex = 0;
const images = document.querySelectorAll(".carousel-image");
function showlmage(index) {
    images.forEach((img,i) => {
        img.classList.toggle("active", i === index);
    });
}

function nextimage(){
    currentimageindex = (currentimageindex + 1) % images.length;
    showlmage(currentimageindex);
}

function previmage() {
    currentimageindex = (currentimageindex - 1 + images.length) % images.length;
    showlmage(currentimageindex);
}

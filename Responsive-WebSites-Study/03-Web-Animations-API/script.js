const box = document.querySelector(".ani-box")

const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

btnNext.addEventListener("click", nextAni);
btnPrev.addEventListener("click", prevAni);

let currentId = 0;

function nextAni() {
    if (currentId == 0) {
        box.animate([
            {
                transform: "translate(200px, 30px)",
                backgroundColor: "#f95",
                borderRadius: "0px",
            }], {
                delay:500,
                fill: "both",
                easing: "ease-in-out",
                duration: 1000,
            })
        currentId = 1;
    }
}

function prevAni() {
    if (currentId == 1) {
        box.animate([
            {
                transform: "translate(0, 200px)",
                backgroundColor: "#f95",
                borderRadius: "0px",
            }], {
                delay:500,
                fill: "both",
                easing: "ease-in-out",
                duration: 1000,
            })
        currentId = 0;
    }
}
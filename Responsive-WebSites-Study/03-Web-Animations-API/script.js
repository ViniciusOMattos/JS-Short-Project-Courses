const box = document.querySelector(".ani-box")

const btnReset = document.getElementById("btn-reset");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

btnLeft.addEventListener("click", leftAni);
btnReset.addEventListener("click", resetAni);
btnRight.addEventListener("click", rightAni);

let currentId = 0;

function resetAni() {
    if (currentId == 1) {
        box.animate([
            {
                transform: "translate(360px, 200px)",
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

function leftAni() {
    if (currentId == 0 || currentId == 1) {
        box.animate([
            {
                transform: "translate(150px, 200px)",
            }], {
                delay:500,
                fill: "both",
                easing: "ease-in-out",
                duration: 1000,
            })
        currentId = 1;
    }
}

function rightAni() {
    if (currentId == 0 || currentId == 1) {
        box.animate([
            {
                transform: "translate(600px, 200px)",
            }], {
                delay:500,
                fill: "both",
                easing: "ease-in-out",
                duration: 1000,
            })
        currentId = 1;
    }
}
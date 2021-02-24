
let duckLeft = 5;
let duckBottom = 90;
let down = false;
let up = false;
let left = false;
let right = false;
duck = document.querySelector('.duck');
document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowDown":
            down = true;
            break;
        case "ArrowUp":
            up = true;
            break;
        case "ArrowLeft":
            left = true;
            break;
        case "ArrowRight":
            right = true;
            break;
        default:
            return;
    }
});

document.addEventListener("keyup", function (event) {
    switch (event.key) {
        case "ArrowDown":
            down = false;
            break;
        case "ArrowUp":
            up = false;
            break;
        case "ArrowLeft":
            left = false;
            break;
        case "ArrowRight":
            right = false;
            break;
        default:
            return;
    }
})
let t = setInterval(function () {
    if (up) { duckBottom++; }
    if (down) { duckBottom--; }
    if (left) {
        duckLeft--;
        duck.style.transform = "scaleX(-1)";
    }
    if (right) {
        duckLeft++;
        duck.style.transform = "scaleX(1)";
    }
    duck.style.bottom = duckBottom + '%';
    duck.style.left = duckLeft + '%';
}, 1);
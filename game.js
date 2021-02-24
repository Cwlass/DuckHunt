
let duckLeft = 50;
let duckBottom = 50;
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
    if (up && duckBottom < 95) { duckBottom++; }
    if (down && duckBottom > 5) { duckBottom--; }
    if (left && duckLeft > 5) {
        duckLeft--;
        duck.style.transform = "scaleX(-1)";
    }
    if (right && duckLeft < 94) {
        duckLeft++;
        duck.style.transform = "scaleX(1)";
    }
    duck.style.bottom = duckBottom + '%';
    duck.style.left = duckLeft + '%';
}, 1);

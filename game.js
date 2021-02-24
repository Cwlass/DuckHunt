//Variable intialisation
const gameOver = document.querySelector('.gameOver');
const gameSpace = document.querySelector('.gameSpace');
let shooterScore = 0;
let birdDead = false;
let duckLeft = 50;
let duckBottom = 50;
let down = false;
let up = false;
let left = false;
let right = false;
let bullets = 3;
let canMove = true;
duck = document.querySelector('.duck');
//Directoinal Control
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

//Bird Shooting
document.querySelector('.duck').addEventListener("click", function () {
    canMove = false;
    shooterScore++;
    document.querySelector('.score').innerHTML = shooterScore;
    duck.style.backgroundImage = 'url(img/deadDuck.png)';
    setTimeout(function () {
        birdDead = true;
        duck.style.backgroundImage = 'url(img/duckdead.png)';
    }, 500);
    document.querySelector(".NiceShot").style.bottom = "0%";
})


// All movement handling
let t = setInterval(function () {
    if (!birdDead && canMove) {
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
    } else {
        if (duckBottom > 5) {
            duckBottom--
        }
        duck.style.bottom = duckBottom + '%';
        if (duckBottom <= 5) {
            duck.style.transform = "rotate(90deg)"
            birdDead = false;
            setTimeout(function () {
                resetBird();
            }, 2000);
        }
    }
    if (bullets == 2) {
        document.querySelector(".Bullet1").style.display = "none";
    }
    if (bullets == 1) {
        document.querySelector(".Bullet2").style.display = "none";
    }
    if (bullets == 0) {
        document.querySelector(".BShot").style.display = "none";
        document.querySelector('.gameOver').style.display = "flex";

    }
}, 20);

function resetBird() {
    duckBottom = 50;
    duckLeft = 50;
    duck.style.backgroundImage = "url(img/Duck_Hunt-logo-8044A0A3B6-seeklogo.com.png)"
    duck.style.transform = "rotate(0deg)"
    document.querySelector(".NiceShot").style.bottom = "-200%";
    canMove = true;
}

document.querySelector(".gameSpace").addEventListener('click', function (event) {
    if (event.target.classList.contains("gameSpace")) {
        bullets--
    }


})

gameOver.querySelector('.Loser').addEventListener('click', resetGame);

function resetGame() {
    bullets = 3;
    document.querySelector(".Bullet1").style.display = "block";
    document.querySelector(".Bullet2").style.display = "block";
    document.querySelector(".Bullet3").style.display = "block";
    document.querySelector(".BShot").style.display = "flex";
    if (shooterScore > document.querySelector(".Score").innerHTML) {
        document.querySelector(".Score").innerHTML = shooterScore;
    }

    shooterScore = 0;
    gameOver.style.display = "none";
    gameSpace.style.display = "none";
    document.querySelector(".HomeBanner").style.display = "block";
}


// Dany //

document.querySelector(".FullScreen").addEventListener("click", openFullscreen);
let elem = document.documentElement;
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
        document.querySelector(".FullScreen").style.display = "none";
        document.querySelector(".FullScreenClose").style.display = "block";
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

document.querySelector(".FullScreenClose").addEventListener("click", closeFullscreen);
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
        document.querySelector(".FullScreen").style.display = "block";
        document.querySelector(".FullScreenClose").style.display = "none";
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

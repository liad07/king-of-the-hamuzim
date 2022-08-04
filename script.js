document.addEventListener("keydown", event => {
    if (event.key === "ArrowLeft") {
        moveLeft();
    }
    if (event.key === "ArrowRight") {
        moveRight();
    }
    if (event.key === "b") {
        f();
    }
    if (event.key === "s") {
        stopgame();
    }
});
var character = document.getElementById("character");

function f() {
    var check = prompt("enter key\n")
    if (check == "sara") {
        document.getElementsByClassName("hamuzim")[0].src = "../cake.png"
        document.getElementsByClassName("bibi")[0].src = "../sara.png"
        document.getElementById("ico").href = "../sara.png"
        document.title = "queen of the cake"
        alert("you got our first easter egg")
    }
}

function moveLeft() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    if (left >= 0) {
        character.style.left = left + "px";
    }
}

function moveRight() {
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;
    if (left < 300) {
        character.style.left = left + "px";
    }
}

var block = document.getElementById("block");
var counter = 0;
block.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    console.log(random)
    left = random * 100;
    block.style.left = left + "px";
    counter++;

});
setInterval(update, 1);


function update() {
    //easy
    if (counter < 75) {
        document.getElementById("rank").textContent="easy"
        setInterval(function () {
            var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
            var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter);

            if (characterLeft == blockLeft && blockTop < 500 && blockTop > 300) {
                redict();
                block.style.animation = "none";
            }
        }, 1);

    }
//medium
    else if (counter > 75) {
        document.getElementById("rank").textContent="medium"
        setInterval(function () {
            var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
            var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter);

            if (characterLeft == blockLeft && blockTop < 500 && blockTop > 300) {
                redict();
                block.style.animation = "none";
            }
        }, 0.5);
    }
//hard
    else if (counter > 150) {
        setInterval(function () {
            var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
            var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter);

            if (characterLeft == blockLeft && blockTop < 500 && blockTop > 300) {
                redict();
                block.style.animation = "none";
            }
        }, 0.3);
        document.getElementById("rank").textContent="hard"
    }
//professional
    else if (counter > 400) {
        setInterval(function () {
            var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
            var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter);

            if (characterLeft == blockLeft && blockTop < 500 && blockTop > 300) {
                redict();
                block.style.animation = "none";
            }
        }, 0.1);
        document.getElementById("rank").textContent="professional"
    }
if (counter>document.getElementById("record").value){
    document.getElementById("record").textContent=("you broke our record please send me the record after you finish play")
    }
}
function redict() {
    var str = "https://liad07.github.io/score-view/?" + counter;
    location.replace(str);
}

function banana() {
    location.reload();

}

function stopgame() {
    prompt("this stop game click the blue button to resume")
}

/*
1.sara option done
2.easter egg done
3.resume/stop game done
*/
document.getElementById("record").textContent="444";

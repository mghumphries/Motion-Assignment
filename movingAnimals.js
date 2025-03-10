
const characterHorse = {
    arrImgs: ["walkingw0000.png", "walkingw0001.png",
        "walkingw0002.png", "walkingw0003.png", "walkingw0004.png",
        "walkingw0005.png", "walkingw0006.png", "walkingw0007.png", "walkingw0008.png", "walkingw0009.png", "walkingw0010.png", "walkingw0011.png"],
    poseNumber: 0,
    elem: document.querySelector("#horse"),
    screenWidth: document.querySelector("#farm").clientWidth,
    screenHeight: document.querySelector("#farm").scrollHeight,
    x: 1700,
    y: 550,
    timerId: null,
    move : function() {
        if (this.x > this.screenWidth - 100) {
            characterHorse.x = 5;
        } else {
            this.x += -5;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =
                "horse\\" + this.arrImgs[this.poseNumber];
            console.log(this.elem.src);
            this.poseNumber = (this.poseNumber + 1) % 12;
        }
    }

}

const characterCow = {
    arrImgs: ["eatingsw0000.png", "eatingsw0001.png",
        "eatingsw0002.png", "eatingsw0003.png", "eatingsw0004.png",
        "eatingsw0005.png", "eatingsw0006.png", "eatingsw0007.png", "eatingsw0008.png"],
    poseNum: 0,
    elem: document.querySelector("#cow"),
    screenWidth: document.querySelector("#farm").clientWidth,
    screenHeight: document.querySelector("#farm").scrollHeight,
    x: 60,
    y: 400,
    timerId: null,
    move : function() {
        if (this.x > this.screenWidth - 100) {
            characterCow.x = 5;
        } else {
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =
                "cow\\" + this.arrImgs[this.poseNum];
            console.log(this.elem.src);
            this.poseNum = (this.poseNum + 1) % 9;
        }
    }

}



function moveHorse() {
    characterHorse.timerId = setInterval(frameHorse, 100);
}
function frameHorse() {
    characterHorse.move();
}
function stopMovingHorse() {
    clearInterval(characterHorse.timerId);
}


function moveCow() {
    characterCow.timerId = setInterval(frameCow, 100);
}
function frameCow() {
    characterCow.move();
}
function stopMovingCow() {
    clearInterval(characterCow.timerId);
}

const characters = [characterHorse, characterCow];
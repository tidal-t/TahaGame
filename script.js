let character = document.querySelector(".character");
let character_container = document.querySelector(".character-container");
let game_frame = document.querySelector(".game-frame");
let characterRun;

function RunAnimation() {
  characterRun = setInterval(() => {
    character.style =
      "background: url(imgs/4.png); background-size: cover; background-position: center; transform: translateY(0);";

    setTimeout(() => {
      character.style =
        "background: url(imgs/3.png); background-size: cover; background-position: center; transform: translateY(-15px);";
      setTimeout(() => {
        character.style =
          "background: url(imgs/2.png); background-size: cover; background-position: center; transform: translateY(-12px);";
        setTimeout(() => {
          character.style =
            "background: url(imgs/1.png); background-size: cover; background-position: center; transform: translateY(-6px);";
        }, 125);
      }, 125);
    }, 125);
  }, 500);
}

document.querySelector("body").addEventListener("click", () => {
  // stopRunAnimation();

  changeBackground();

  jumpAnimation();
});
function changeBackground() {
  character.style = "background: url('imgs/3.png') center center / cover;";
}
function jumpAnimation() {
  document.querySelector(".character-container").classList.add("jumped");
  setTimeout(() => {
    document.querySelector(".character-container").classList.remove("jumped");
  }, 800);
}
let cactus = document.querySelector(".defultCactus");
function makeCACTUS() {
  let makeCactus = setInterval(() => {
    let random = Math.random();
    if (random >= 0.33 && random <= 0.66) {
      cactus.classList.add("block1");
    } else if (random >= 0.66 && random <= 0.99) {
      cactus.classList.add("block2");
    } else {
      cactus.classList.add("block12");
      let block12_1 = document.createElement("div");
      let block12_2 = document.createElement("div");
      cactus.appendChild(block12_1);
      cactus.appendChild(block12_2);
      block12_1.classList.add("block12-1");
      block12_2.classList.add("block12-2");
    }
    setTimeout(() => {
      if (random >= 0.33 && random <= 0.66) {
        cactus.classList.remove("block1");
      } else if (random >= 0.66 && random <= 0.99) {
        cactus.classList.remove("block2");
      } else {
        document.querySelector(".block12-1").remove();
        document.querySelector(".block12-2").remove();
        cactus.classList.remove("block12");
      }
    }, 2500);
  }, 2500);
}

function makeCactusDoor() {
  for (let i = 0; i < 5; i++) {
    let cactusDoor = document.createElement("div");
    game_frame.appendChild(cactusDoor);
    let random = Math.random();
    if ((random <= 0.2 && random >= 0) || (random <= 0.4 && random >= 0.2)) {
      cactusDoor.classList.add("cactus-door1");
    } else {
      cactusDoor.classList.add("cactus-door2");
    }
    let leftNumber = Math.floor(Math.random() * 800);
    cactusDoor.style = `inset: auto ${leftNumber}px 100px auto;`;
  }
}
function checkLose() {
  let CheckForLose = setInterval(() => {
    let characterTop = parseInt(
      getComputedStyle(character_container).getPropertyValue("top")
    );
    let cactusLeft = parseInt(
      getComputedStyle(cactus).getPropertyValue("left")
    );
    // console.log(characterTop)
    if (
      cactusLeft <= 162 &&
      cactusLeft >= 55 &&
      characterTop <= 275 &&
      characterTop >= 218
    ) {
      alert("you lost");
      clearInterval(CheckForLose);
    }
  }, 10000);
}

let img_container = document.querySelector(".img-container");
let startGameHtml = document.querySelector(".startGame");
img_container.addEventListener("click", () => {
  startGameHtml.style.display = "none";
});

function startGame() {
  RunAnimation();
  makeCACTUS();
  makeCactusDoor();
  checkLose();

}

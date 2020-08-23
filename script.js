const White = ["z", "x", "c", "v", "b", "n"];
const Black = ["s", "d", "f", "g", "h", "j"];

const keys = document.querySelectorAll(".key");
const White_Keys = document.querySelectorAll(".key.White");
const Black_Keys = document.querySelectorAll(".key.Black");

keys.forEach((key) => {
  key.addEventListener("click", () => ClickFunc(key));
});

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key;
  const white_keys_index = White.indexOf(key);
  const black_keys_index = Black.indexOf(key);
  if (white_keys_index > -1) ClickFunc(White_Keys[white_keys_index]);
  if (black_keys_index > -1) ClickFunc(Black_Keys[black_keys_index]);
});

function ClickFunc(key) {
  const noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add("active");
  noteAudio.addEventListener("ended", function () {
    key.classList.remove("active");
  });
}

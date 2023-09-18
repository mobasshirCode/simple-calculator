let buttons = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");
let equal = document.querySelector(".btn_equal");
let clear = document.querySelector(".btn_clear");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let val = e.target.dataset.num;
    screen.value += val;
  });

  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
});

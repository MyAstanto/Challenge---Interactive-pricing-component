/*=============== RANGE SLIDER JS ===============*/
const rangeThumb = document.getElementById("range-thumb"),
  rangeNumber = document.getElementById("range-number"),
  rangeLine = document.getElementById("range-line"),
  rangeInput = document.getElementById("range-input");

const rangeInputSlider = () => {
  // Insert the value of the input range
  rangeNumber.textContent = rangeInput.value;

  // Calculate the position of the input thumb
  // rangeInput.value = 50, rangeInput.max = 100, (50 / 100 = 0.5)
  // rangeInput.offsetWidth = 248, rangeThumb.offsetWidth = 32, (248 - 32 = 216)
  const thumbPosition = rangeInput.value / rangeInput.max,
    space = rangeInput.offsetWidth - rangeThumb.offsetWidth;

  // We insert the position of the input thumb
  // thumbPosition = 0.5, space = 216 (0.5 * 216 = 108)
  rangeThumb.style.left = thumbPosition * space + "px";

  // We insert the width to the slider with the value of the input value
  // rangeInput.value = 50, ancho = 50%
  rangeLine.style.width = rangeInput.value * 25 + "%";

  // We call the range input
  rangeInput.addEventListener("input", rangeInputSlider);
};

rangeInputSlider();

const page = ["10K", "50K", "100k", "500k", "1M"];
const values = [8.0, 12.0, 16.0, 24.0, 36.0];

const output = document.getElementById("rego"),
  p = document.getElementById("page");

rangeInput.oninput = function () {
  output.innerHTML = "$" + values[this.value] + ".00";
  p.innerHTML = page[this.value];
};

// set the default value
rangeInput.oninput();
// Price section end

// year/month mode switcher start
function myFunction() {
  var x = document.getElementById("mode");
  if (x.innerHTML === "month") {
    x.innerHTML = "year";
    rangeInput.oninput = function () {
      output.innerHTML = "$" + (values[rangeInput.value] * 12 * 75) / 100 + ".00";
      p.innerHTML = page[rangeInput.value];
    };
    rangeInput.oninput();
    // output.innerHTML *= 75 / 100;
  } else {
    x.innerHTML = "month";
    rangeInput.oninput = function () {
      output.innerHTML = "$" + values[rangeInput.value] + ".00";
      p.innerHTML = page[rangeInput.value];
    };

    // output.innerHTML = values[input.value];
  }
  rangeInput.oninput();
}

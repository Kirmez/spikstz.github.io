

let slider = document.getElementById("slider-range");

noUiSlider.create(slider, {
  start: [0, 234],
  connect: true,
  step: 1,
  range: {
    min: 0,
    max: 9999,
  },
  tooltips: true,
  format: {
    to: function (value) {
      return Math.round(value);
    },
    from: function (value) {
      return Number(value.replace(",-", ""));
    },
  },
});

slider.noUiSlider.on("update", function (values, handle) {
  let value = values[handle];
  let chosenPriceSpan = document.getElementById("chosen-price");

  let formattedValue = `${Math.round(value)} $`;

  chosenPriceSpan.textContent = formattedValue;

  let tooltip = slider.querySelectorAll(".noUi-tooltip")[handle];
  tooltip.innerHTML = formattedValue;
});

function initializeSlider(sliderId, chosenPriceId) {
  let slider = document.getElementById(sliderId);

  noUiSlider.create(slider, {
    start: [0, 65],
    connect: true,
    step: 1,
    range: {
      min: 0,
      max: 100,
    },
    tooltips: true,
    format: {
      to: function (value) {
        return Math.round(value);
      },
      from: function (value) {
        return Number(value.replace(",", ""));
      },
    },
  });

  slider.noUiSlider.on("update", function (values, handle) {
    let value = values[handle];
    let chosenPriceSpan = document.getElementById(chosenPriceId);

    let formattedValue = `${Math.round(value)} %`;

    chosenPriceSpan.textContent = formattedValue;

    let tooltip = slider.querySelectorAll(".noUi-tooltip")[handle];
    tooltip.innerHTML = formattedValue;
  });
}

// Initialize all sliders

initializeSlider("slider-range-2", "chosen-price-2");
initializeSlider("slider-range-3", "chosen-price-3");
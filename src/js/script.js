document.querySelectorAll(".indicators__arrow").forEach((arrow, index) => {
  const leaf = document.querySelector('.indicators__img')
  arrow.addEventListener("click", function () {
    arrow.classList.toggle("active");

    const labelBlock = document.querySelectorAll(".indicators__label-block")[
      index
    ];

    labelBlock.classList.toggle("active");
    leaf.classList.add('active')
  });
});


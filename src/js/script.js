document.querySelectorAll(".indicators__arrow").forEach((arrow, index) => {
  const leaf = document.querySelector(".indicators__img");
  arrow.addEventListener("click", function () {
    arrow.classList.toggle("active");

    const labelBlock = document.querySelectorAll(".indicators__label-block")[
      index
    ];

    labelBlock.classList.toggle("active");
    leaf.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".indicators__indicators-btn");
  const firstStaticSpan = container.querySelector(".indicators__indicator");

  document
    .querySelectorAll('.indicators__checkbox input[type="checkbox"]')
    .forEach((checkbox) => {
      const label = document.querySelector(
        `label[for="${checkbox.id}"]`
      ).textContent;

      // Function to create the specified SVG element
      function createSvg() {
        const svgNamespace = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNamespace, "svg");
        svg.setAttribute("class", "indicators__svg");
        svg.setAttribute("width", "16");
        svg.setAttribute("height", "16");
        svg.setAttribute("viewBox", "0 0 16 16");
        svg.setAttribute("fill", "none");

        // First path for the circle
        const path1 = document.createElementNS(svgNamespace, "path");
        path1.setAttribute(
          "d",
          "M8.075 14.7095C11.8443 14.7095 14.9 11.6538 14.9 7.88448C14.9 4.11514 11.8443 1.05948 8.075 1.05948C4.30566 1.05948 1.25 4.11514 1.25 7.88448C1.25 11.6538 4.30566 14.7095 8.075 14.7095Z"
        );
        path1.setAttribute("fill", "#58AA46");
        path1.setAttribute("fill-opacity", "0.9");

        // Second path for the cross
        const path2 = document.createElementNS(svgNamespace, "path");
        path2.setAttribute(
          "d",
          "M10.25 5.55948L8 7.80948M8 7.80948L5.75 10.0595M8 7.80948L5.75 5.55948M8 7.80948L10.25 10.0595"
        );
        path2.setAttribute("stroke", "white");
        path2.setAttribute("stroke-linecap", "round");

        svg.appendChild(path1);
        svg.appendChild(path2);

        return svg;
      }

      // Function to toggle the indicator span
      function toggleIndicatorSpan() {
        let existingSpan = container.querySelector(
          `.dynamic-indicator[data-for="${checkbox.id}"]`
        );
        if (checkbox.checked) {
          if (!existingSpan) {
            existingSpan = document.createElement("span");
            existingSpan.className = "indicators__indicator dynamic-indicator";
            existingSpan.setAttribute("data-for", checkbox.id); // Link the span to the checkbox
            existingSpan.textContent = label;

            const svg = createSvg();
            svg.addEventListener("click", function () {
              container.removeChild(existingSpan);
              checkbox.checked = false;
            });

            existingSpan.appendChild(svg);
            // Ensuring new spans are added before the first static span
            container.insertBefore(existingSpan, firstStaticSpan);
          }
        } else {
          if (existingSpan) {
            container.removeChild(existingSpan);
          }
        }
      }

      // Initial state check and setup event listener
      toggleIndicatorSpan();
      checkbox.addEventListener("change", toggleIndicatorSpan);
    });
});

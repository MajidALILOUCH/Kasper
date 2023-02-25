// Portfolio

let shuffleLis = document.querySelectorAll(".shuffle li");
let boxes = document.querySelectorAll(".portfolio-content > div");

shuffleLis.forEach(function (li) {
  li.onclick = function () {
    // remove active class from Lis
    shuffleLis.forEach(function (li) {
      li.classList.remove("active");
    });
    // add active class to the current one
    this.classList.add("active");
    // hide all boxes
    boxes.forEach(function (box) {
      box.style.display = "none";
    });
    // we used the "data-cat" of the current "li" to get the "boxes"
    // that have the same "class" as the data-cat value
    // and then we used "forEach" to show them
    document.querySelectorAll(this.dataset.cat).forEach((box) => {
      box.style.display = "block";
    });
  };
});

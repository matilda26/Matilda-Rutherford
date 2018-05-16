
var degrees = 45;
var infoBtns = document.querySelectorAll(".project-info-btn");
infoBtns.forEach(function(button) {
  button.addEventListener('click', function(e) {
    e.target.parentNode.children[0].classList.toggle("project-vis");
    e.target.classList.toggle("btn-rotate");
  })
})

var minBtns = document.querySelectorAll(".project-min-btn");
minBtns.forEach(function(button) {
  button.addEventListener('click', function(e) {
    if (e.target.parentElement.children[0].style.display === "none") {
      e.target.parentElement.children[0].style.display = "block";
      e.target.parentElement.children[1].style.display = "block";
      e.target.parentElement.children[2].style.display = "block";
    } else {
      e.target.parentElement.children[2].style.display = "none";
      e.target.parentElement.children[0].style.display = "none";
      e.target.parentElement.children[1].style.display = "none";

    }
    e.target.parentElement.classList.toggle("project-min");
    e.target.classList.toggle("btn-rotate");
  })
})

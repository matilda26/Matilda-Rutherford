// var infoBtn = document.querySelector(".project-info-btn");
// var infoDiv = document.querySelector(".overlay");
//
//
// infoBtn.addEventListener('click', function() {
//   infoDiv.style.width = "50%";
// })
// document.querySelector(".exit").addEventListener('click', function() {
//   infoDiv.style.width="0%";
// })
//
//
// var navBtn = document.querySelector(".nav-btn");
// var navDiv = document.querySelector(".nav-overlay");
//
// navBtn.addEventListener('click', function() {
//   navDiv.style.width = "50%";
// })
// document.querySelector(".nav-exit").addEventListener('click', function() {
//   navDiv.style.width="0%";
// })
var degrees = 45;
var infoBtns = document.querySelectorAll(".project-info-btn");
infoBtns.forEach(function(button) {
  button.addEventListener('click', function(e) {
    e.target.parentNode.children[0].classList.toggle("project-vis");
    e.target.classList.toggle("btn-rotate");
  })
})

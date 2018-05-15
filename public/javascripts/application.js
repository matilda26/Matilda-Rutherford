var infoBtn = document.querySelector(".project-info-btn");
var infoDiv = document.querySelector(".overlay");


infoBtn.addEventListener('click', function() {
  infoDiv.style.width = "50%";
})
document.querySelector(".exit").addEventListener('click', function() {
  infoDiv.style.width="0%";
})


var navBtn = document.querySelector(".nav-btn");
var navDiv = document.querySelector(".nav-overlay");

navBtn.addEventListener('click', function() {
  navDiv.style.width = "50%";
})
document.querySelector(".nav-exit").addEventListener('click', function() {
  navDiv.style.width="0%";
})

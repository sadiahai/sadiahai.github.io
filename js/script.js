const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }
  
window.addEventListener('DOMContentLoaded', function() {
    adjustIntroHeight();
});

window.addEventListener('resize', function() {
    adjustIntroHeight();
});

function adjustIntroHeight() {
    var introSection = document.getElementById('intro');
    var introParagraph = document.getElementById('intro-paragraph');
    var paragraphHeight = introParagraph.offsetHeight;
    introSection.style.height = paragraphHeight + 'px';
}
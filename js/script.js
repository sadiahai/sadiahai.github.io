const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
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
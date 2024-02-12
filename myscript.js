var html = '<a id= "name" href="/index.html"><h1>ej</h1></a><div class="circle"></div><a href="/about.html"> about </a><a href="/contact.html">contact</a><a href="/portfolio.html">portfolio</a></div>';
document.getElementById('sidebar').innerHTML = html;

function reveal() {
    var reveals = document.querySelectorAll(".elementsec");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

var html ='<div class = "wrapper2"><a id= "name" href="/index.html"><div id = "logowrapper"><h1>ej</h1></a><div class= "circlewrap"><div class="circle"></div></div></div><nav><ul><li class="sub-menu-parent" tab-index="0"><a href="/about.html">about</a></li><li class="sub-menu-parent" tab-index="0"><a href="/contact.html">contact</a></li><li class="sub-menu-parent" tab-index="0"><a href="/portfolio.html">portfolio</a><ul class="sub-menu"><li><a href="portfolio.html#tech">tech</a></li><li><a href="portfolio.html#art">art</a></li></ul></li></ul></nav>'
document.getElementById('sidebar').innerHTML = html;

// adds scroll animations
function reveal() {
    var reveals = document.querySelectorAll(".elementsec");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

//drop down function for mobile navigation bar
function myFunction() {
  
  var x = document.getElementById("myLinks");
  var y = document.getElementById(".wrapper")
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.backgroundColor = "white";
    y.style.zIndex = "2";
  } else {
    x.style.display = "block";

  }
}

  

//for desktop sidebar dropdown animation
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for(i=0; i<dropdown.length;i++){
  dropdown[i].addEventListener("mouseover", function(){
    this.classList.toggle("active");
    var dropdownContent=this.nextElementSibling;
    if (dropdownContent.style.display ==="none"){
      dropdownContent.style.display = "block";
    
    }else{
      dropdownContent.style.display = "none";
    }
  });                                       
}

//preloads images
function preload(arrayOfImages) {
  $(arrayOfImages).each(function(){
      $('<img/>')[0].src = this;
      
  });
}

preload([
  "tech.png",
  "art.png",
  "icecreamdash.png",
  "ddd.png",
  "Hangman.png",
  "lunarlogs.png",
  "kafka.jpeg",
  "nightwalker.jpg",
  "frog.JPEG",
  "abstract.jpg",
  "thering.png",
  "deer.jpg",
  "pfp.jpg"
]);

  //switches out first element of index.html when on mobile so animation doesn't apply
  $(document).ready(function() {
    if ($(window).width() < 800) {
        var element = $('#stationary');
        if (element.length > 0 && element.hasClass('elementsec')) {
            element.removeClass('elementsec').addClass('first');
        }
    }
});


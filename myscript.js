var html ='<div class = "wrapper2"><a id= "name" href="/index.html"><div id = "logowrapper"><h1>ej</h1></a><div class= "circlewrap"><div class="circle"></div></div></div><nav><ul><li class="sub-menu-parent" tab-index="0"><a href="/about.html">about</a></li><li class="sub-menu-parent" tab-index="0"><a href="/contact.html">contact</a></li><li class="sub-menu-parent" tab-index="0"><a href="/portfolio.html">portfolio</a><ul class="sub-menu"><li><a href="portfolio.html#tech">tech</a></li><li><a href="portfolio.html#art">art</a></li></ul></li></ul></nav>'
document.getElementById('sidebar').innerHTML = html;
var topnavv = '<a id= "name" href="/index.html"style = "z-index:2;" ><h1 style= "position: absolute;">ej</h1><div class= "circlewrap"><div class="circle" ></div></div></a><div id="myLinks" style = "z-index:1;"><a href="/portfolio.html">home</a><a href="/portfolio.html">portfolio</a><a href="/contact.html">contact</a><a href="/about.html">about</a></div><a href="javascript:void(0);" class="icon" onclick="myFunction()" style = "z-index:2;"><i class="fa fa-bars"></i></a>'
document.getElementById('topnav').innerHTML = topnavv;

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






  /* this makes the height shrink when button is clicked */
  if (x.classList.contains("animate-in")) {
    


    x.classList.remove("animate-in");
    x.classList.add("animate-out");
    
    
    x.style.height = "0";

  } 
  /* this makes the height grow when button is clicked */
  else {

  
    x.classList.remove("animate-out");
    x.style.backgroundColor = "white";
    x.style.opacity = "0.8";
    
    
    x.classList.add("animate-in");
    x.style.height = "160vh";

    

    
  }
}



const element = document.getElementById("topnav");
  var subMenuParent = document.querySelector('.icon');
  var overlay = document.querySelector('.overlay');
  var subMenu = overlay.querySelector('.sub-menu');
  

  subMenuParent.addEventListener('click', function(e) {
      if (subMenu.style.visibility === 'hidden') {
          subMenu.style.visibility = 'visible';
          subMenu.style.opacity = '1';
          subMenu.style.zIndex = '1';
          subMenu.style.transform = 'translateY(0%)';
          overlay.style.opacity = '0.8';
          
      } else {
          subMenu.style.visibility = 'hidden';
          subMenu.style.opacity = '0';
          subMenu.style.zIndex = '-1';
          subMenu.style.transform = 'translateY(-2em)';
          overlay.style.opacity = '0';
      }
  });

  

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


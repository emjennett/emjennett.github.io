

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
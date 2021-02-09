// Create a variable below
    var helloWorld = "Hello World!";

// Console.log() your variable here.
    console.log(helloWorld);

//iAm Scripts
    var text = ['UX/UI Designer', 'Storyteller', 'Enneagram 4', 'INFJ', 'Kayaker', 'Dog Mom', 'Dreamer', 'Magic Worker', 'Aquarius', 'Star Gazer' ]; 
    function callMe(){
        var myText = document.getElementById('iAm'); 
        var curIdx = text.indexOf(myText.innerHTML); 
        myText.innerHTML = text[(curIdx+1)%text.length];
    }

    setInterval(callMe,1250);

// RETURN TO TOP Script
  //Get the button:
  mybutton = document.getElementById("rtnTop");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
//MyWork Scripts
    $('.t4t').hover(function(){
        $('.hideT4t').show(500)
    });

    $('.USDA').hover(function(){
        $('.hideUSDA').show(500)
    });

    $('.project').hover(function(){
        $('.hideProject').show(500)
    });

//MySkills Scripts
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(2222,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(1111,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});


    


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


    


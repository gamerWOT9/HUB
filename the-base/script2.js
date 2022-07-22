    document.getElementById("defaultOpen").click();
// JE CLIQUE SUR HUB NAV-BAR



// SEARCH BAR
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
    function myFunctionSearch() {
          // Declare variables
          var input, filter, ul, li, a, i;
          input = document.getElementById("mySearch");
          filter = input.value.toUpperCase();
          ul = document.getElementById("myMenu");
          li = ul.getElementsByClassName("tabcontent");
        
          // Loop through all list items, and hide those who don't match the search query
          for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("h2")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "block";
            } else {
              li[i].style.display = "none";
            }
          }
    }
// SEARCH BAR



// LA NAVBAR SE CACHE LORSQUE L'ON SCROLL
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
    }
    let slideIndex = 1;
    showSlides(slideIndex);
// LA NAVBAR SE CACHE LORSQUE L'ON SCROLL



// IMAGE SLIDE
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }
    function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    }
// IMAGE SLIDE



// IMAGE ZOOM
    var modal = document.getElementById('myModal');
    var images = document.getElementsByClassName('myImages');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    for (var i = 0; i < images.length; i++) {
        var img = images[i];
        // and attach our click listener for this image.
        img.onclick = function(evt) {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
// IMAGE ZOOM



// OPTION GRID
    // Get the elements with class="column"
    var elements = document.getElementsByClassName("myMenu")
    var i;
    // List View
    function listView() {
      for (i = 0; i < elements.length; i++) {
        elements[i].style.gridTemplateColumns = "repeat(1, 1fr)";
      }
    }
    // Grid View
    function gridView() {
      for (i = 0; i < elements.length; i++) {
        elements[i].style.gridTemplateColumns = "repeat(2, 1fr)";
      }
    }

    /* Optional: Add active class to the current button (highlight it) */
    var container = document.getElementById("btnContainer");
    var btns = container.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("activebt");
        current[0].className = current[0].className.replace(" activebt", "");
        this.className += " activebt";
      });
    }
// OPTION GRID



// BOUTON POUR TRIER
    function sortTable() {
      var list, i, switching, b, shouldSwitch;
      list = document.getElementById("myMenu");
      switching = true;
      /* Make a loop that will continue until
      no switching has been done: */
      while (switching) {
        // start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("ARTICLE");
        // Loop through all list-items:
        for (i = 0; i < b.length - 1; i++) {
          // start by saying there should be no switching:
          shouldSwitch = false;
          /* check if the next item should
          switch place with the current item: */
          if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
            /* if next item is alphabetically
            lower than current item, mark as a switch
            and break the loop: */
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          /* If a switch has been marked, make the switch
          and mark the switch as done: */
          b[i].parentNode.insertBefore(b[i + 1], b[i]);
          switching = true;
        }
      }
    }
// BOUTON POUR TRIER

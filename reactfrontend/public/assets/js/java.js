<html>
<head>
<script>
<div>
    <button onclick="topFunction()" id="movetop" title="Go to top">
    <span class="fa fa-level-up" aria-hidden="true"></span>
    </button>
    <script>
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
    scrollFunction()
    };

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("movetop").style.display = "block";
    } else {
    document.getElementById("movetop").style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }
    </script>


    <script src="assets/js/jquery-3.3.1.min.js"></script>
  


    <script src="assets/js/owl.carousel.js"></script>
    <script>
    $(document).ready(function () {
    $('.owl-one').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    autoplayHoverPause: false,
    responsive: {
    0: {
    items: 1,
    nav: false
    },
    480: {
    items: 1,
    nav: false
    },
    667: {
    items: 1,
    nav: false
    },
    1000: {
    items: 1,
    nav: false
    }
    }
    })
    })
    </script>



    <script src="assets/js/counter.js"></script>



    <script src="assets/js/theme-change.js"></script>
    <script>
    function autoType(elementClass, typingSpeed) {
    var this = $(elementClass);
    this.css({
    "position": "relative",
    "display": "inline-block"
    });
    thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
    thhis = thhis.find(".text-js");
    var text = thhis.text().trim().split('');
    var amntOfChars = text.length;
    var newString = "";
    this.text("|");
    setTimeout(function () {
    thhis.css("opacity", 1);
    thhis.prev().removeAttr("style");
    thhis.text("");
    for (var i = 0; i < amntOfChars; i++) {
    (function (i, char) {
    setTimeout(function () {
    newString += char;
    thhis.text(newString);
    }, i * typingSpeed);
    })(i + 1, text[i]);
    }
    }, 1500);
    }

    $(document).ready(function () {
    // Now to start autoTyping just call the autoType function with the 
    // class of outer div
    // The second paramter is the speed between each letter is typed.   
    autoType(".type-js", 200);
    });
    </script>



    <script>
    $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 80) {
    $("#site-header").addClass("nav-fixed");
    } else {
    $("#site-header").removeClass("nav-fixed");
    }
    });

    //Main navigation Active Class Add Remove
    $(".navbar-toggler").on("click", function () {
    $("header").toggleClass("active");
    });
    $(document).on("ready", function () {
    if ($(window).width() > 991) {
    $("header").removeClass("active");
    }
    $(window).on("resize", function () {
    if ($(window).width() > 991) {
    $("header").removeClass("active");
    }
    });
    });
    </script>
    

    
    <script>
    $(function () {
    $('.navbar-toggler').click(function () {
    $('body').toggleClass('noscroll');
    })
    });
    </script>
    

    /*bootstrap*/
    <script src="assets/js/bootstrap.min.js"></script>
    /*-- //bootstrap*/
    /* //Js scripts */
</div>
</script>
</head>
</html>
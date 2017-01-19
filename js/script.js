
function clickBox() {
  boxClicked = true;
  $('div.img-box-info').slideDown(300);
};
function unclickBox() {
  boxClicked = false;
  $('div.img-box-info').slideUp(200);
};

$(function(){   //document ready 
  $(".navbar-toggle").on("click", function () {
            $(this).toggleClass("active");
        });
 
  
  // for mobile - same function on click
  $(".img-box").click(function(e){  //if statement for clicking
    e.preventDefault();
    if(boxClicked == false) {
      clickBox();
    } else {
      unclickBox();
    };
  });

// prevent .img-box click event from firing when you click the .insideLink
  $(".insideLink").click(function(event) {
    event.stopImmediatePropagation();
  });


}); //end document ready function


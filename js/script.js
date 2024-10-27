 
 

/*WOWJs*/
$(function() {
  new WOW().init();
});

 
 $(window).on('load',function(){
    $(".loader").fadeOut(1000);
    $(".content").fadeIn(1000);
})


 
 
const toTop = document.querySelector(".up");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active"); // Shows the button when scrolled more than 100px
    } else {
        toTop.classList.remove("active"); // Hides the button when scrolled less than or equal to 100px
    }
});

var typed = new Typed('.typed1',{
	strings:[
	'Lea Cydea Piga.',
	'A University Student.',
	
	],
	typeSpeed:100,
	backSpeed:100,
	loop:true
});
  
$("#change-1").on('click', function() {  
    $("body").css("--custom-text", "#B19CD8");
    $("body").css("--custom-bg","#B19CD8");
    swal("", "Successfully changed to PURPLE!", "success");
});
$("#change-2").on('click', function() {  
    $("body").css("--custom-text", "#48C9B0");
    $("body").css("--custom-bg","#48C9B0");
    swal("", "Successfully changed to GREEN!", "success");
});
$("#change-3").on('click', function() {  
    $("body").css("--custom-text", "#ffd859");
    $("body").css("--custom-bg","#fcefb4");
    swal("", "Successfully changed to YELLOW!", "success");
});
$("#change-4").on('click', function() {  
    $("body").css("--custom-text", "#f3a6c0");
    $("body").css("--custom-bg","#f3a6c0");
    swal("", "Successfully changed to PINK!", "success");
});

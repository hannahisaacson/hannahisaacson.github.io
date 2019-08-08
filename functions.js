
/* changing background color of navbar on scroll  */
$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});



/*changing font of navbar links on scroll  */
window.onscroll = function() {myFunction()};
        
function myFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("ProjectLink").className = "nav-link-default.scrolled";
    document.getElementById('ContactLink').className = 'nav-link-default.scrolled';
    document.getElementById('ResumeLink').className = 'nav-link-default.scrolled';
    
  } else {
    document.getElementById("ProjectLink").className = "nav-link-default";
    document.getElementById('ContactLink').className = 'nav-link-default';
    document.getElementById('ResumeLink').className = 'nav-link-default';
  }
}
$(document).ready(function(){
    $('.chkbtn').click(function(){
        $('.chkbtn').hide()
        $('.clsbtn').show()
        $('nav').toggleClass('show-nav')
    });
    $('.clsbtn').click(function(){
        $('.clsbtn').hide()
        $('.chkbtn').show()
        $('nav').toggleClass('show-nav')
    })
});

// window.onscroll = function() {
//     myFunction();
// };

// function myFunction() {
//   let winScroll = document.body.scrollLeft || document.documentElement.scrollLeft;
//   let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   let scrolled = (winScroll / height) * 100;
//   console.log(scrolled);
//   document.getElementById("progress").style.height = `${scrolled}%`;
// } 
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

    $('ul.ul2 li a').click(function(){
        let pattern = /#\w+/
        let link = this.href
        // console.log(link.match(pattern)[0])
        $(link.match(pattern)[0]).toggleClass('show-about')
    })
    $('.rtnbtn').click(function(){
        $(this.parentElement).toggleClass('show-about')
    })

    $('#who').click(function(){
        $('#who > p, #who > .team').slideToggle(200, function() {
            if ($('#who > .team').is(':visible'))
            $('#who > .team').css({'display': 'flex', 'flex-direction': 'row', 'justify-content': 'center', 'align-items': 'center'});
        });
        $('#what > p, #why > p').slideUp(200);
    })
    $('#what').click(function(){
        $('#what > p').slideToggle(200);
        $('#who > p, #why > p, #who > .team').slideUp(200);
    })
    $('#why').click(function(){
        $('#why > p').slideToggle(200);
        $('#what > p, #who > p, #who > .team').slideUp(200);
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
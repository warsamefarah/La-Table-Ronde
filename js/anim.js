$(document).ready(function() {
    // $('.art').hide();

    gsap.from('.title', { opacity: 0, duration: 2 })
    TweenMax.fromTo('.line1', { scaleX: 0, transformOrigin: '0 100%' }, { scaleX: 1, duration: 1, delay: 2, ease: 'power1.inOut' });
    TweenMax.fromTo('.circle1', { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 1 })

    $('.dot').click(function() {
        $(this).children('input[type=radio]').prop("checked", true)
        $(this).addClass('dot-color')

        if ($('input[name=un]').is(':checked')) {
            gsap.to('.art1', { opacity: 1, duration: 0.2, y: -50 })
        }

        if ($('input[name=deux]').is(':checked')) {
            gsap.to('.art2', { opacity: 1, duration: 0.2, y: 50 })
        }

        if ($('input[name=trois]').is(':checked')) {
            gsap.to('.art3', { opacity: 1, duration: 0.2, y: -50 })
        }

        if ($('input[name=quatre]').is(':checked')) {
            gsap.to('.art4', { opacity: 1, duration: 0.2, y: -50 })
        }

        if ($('input[name=cinq]').is(':checked')) {
            gsap.to('.art5', { opacity: 1, duration: 0.2, y: -50 })
        }

        if ($('input[name=six]').is(':checked')) {
            gsap.to('.art6', { opacity: 1, duration: 0.2, y: -50 })
        }

        if ($('input[name=sept]').is(':checked')) {
            gsap.to('.art7', { opacity: 1, duration: 0.2, y: -50 })
        }

        if ($('input[name=huit]').is(':checked')) {
            gsap.to('.art8', { opacity: 1, duration: 0.2, y: -50 })
        }

        if ($('input[name=neuf]').is(':checked')) {
            gsap.to('.art9', { opacity: 1, duration: 0.2, y: -50 })
        }

        if ($('input[name=dix]').is(':checked')) {
            gsap.to('.art10', { opacity: 1, duration: 0.2, y: -50 })
        }

        if ($('input[name=onze]').is(':checked')) {
            gsap.to('.art11', { opacity: 1, duration: 0.2, y: -50 })
        }

    });

    $('.sect1 a').click(function() {
        TweenMax.fromTo('.line2', { scaleX: 0, transformOrigin: '0 100%' }, { scaleX: 1, duration: 1, delay: 0.5, ease: 'power1.inOut' });
    })

    $('.sect2 a').click(function() {
        TweenMax.fromTo('.line3', { scaleX: 0, transformOrigin: '0 105%' }, { scaleX: 1, duration: 1, delay: 0.5, ease: 'power1.inOut' });
        TweenMax.fromTo('.line4', { scaleX: 0, transformOrigin: '0 105%' }, { scaleX: 1, duration: 1, delay: 1.4, ease: 'power1.inOut' });
        TweenMax.fromTo('.line5', { scaleX: 0, transformOrigin: '0 105%' }, { scaleX: 1, duration: 1, delay: 1.4, ease: 'power1.inOut' });
        TweenMax.fromTo('.line6', { scaleX: 0, transformOrigin: '0 105%' }, { scaleX: 1, duration: 1, delay: 1.4, ease: 'power1.inOut' });
    })

    $(document).click(function(e) {
        if (!$(e.target).hasClass('dot')) {
            $('input[type=radio]').prop("checked", false);
            $('.dot').removeClass('dot-color');
            gsap.to('.art2', 'art5', 'art7', 'art8', 'art9', { opacity: 0, duration: 0.2, y: -50 })
            gsap.to('.art3, .art1', 'art4', 'art6', 'art10', 'art11', { opacity: 0, duration: 0.2, y: 50 })
        }
    });
});
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
        if ($('input[name=douze]').is(':checked')) {
            gsap.to('.art12', { opacity: 1, duration: 0.2, y: -50 })
        }

        if ($('input[name=treize]').is(':checked')) {
            gsap.to('.art13', { opacity: 1, duration: 0.2, y: -50 })
        }

        if ($('input[name=quatorze]').is(':checked')) {
            gsap.to('.art14', { opacity: 1, duration: 0.2, y: -50 })
        }

        if ($('input[name=quinze]').is(':checked')) {
            gsap.to('.art15', { opacity: 1, duration: 0.2, y: -50 })
        }
        if ($('input[name=seize]').is(':checked')) {
            gsap.to('.art16', { opacity: 1, duration: 0.2, y: -50 })
        }

        if ($('input[name=dixsept]').is(':checked')) {
            gsap.to('.art17', { opacity: 1, duration: 0.2, y: -50 })
        }

        if ($('input[name=dixhuit]').is(':checked')) {
            gsap.to('.art18', { opacity: 1, duration: 0.2, y: -50 })
        }

        if ($('input[name=dixneuf]').is(':checked')) {
            gsap.to('.art19', { opacity: 1, duration: 0.2, y: -50 })
        }
        if ($('input[name=vingt]').is(':checked')) {
            gsap.to('.art20', { opacity: 1, duration: 0.2, y: -50 })
        }

        if ($('input[name=vingtetun]').is(':checked')) {
            gsap.to('.art21', { opacity: 1, duration: 0.2, y: -50 })
        }

        if ($('input[name=vingtdeux]').is(':checked')) {
            gsap.to('.art22', { opacity: 1, duration: 0.2, y: -50 })
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
        TweenMax.fromTo('.line7', { scaleX: 0, transformOrigin: '0 105%' }, { scaleX: 1, duration: 1, delay: 1.4, ease: 'power1.inOut' });
        TweenMax.fromTo('.line8', { scaleX: 0, transformOrigin: '0 105%' }, { scaleX: 1, duration: 1, delay: 1.4, ease: 'power1.inOut' });
        TweenMax.fromTo('.line9', { scaleX: 0, transformOrigin: '0 105%' }, { scaleX: 1, duration: 1, delay: 1.4, ease: 'power1.inOut' });
    })

    $(document).click(function(e) {
        if (!$(e.target).hasClass('dot')) {
            $('input[type=radio]').prop("checked", false);
            $('.dot').removeClass('dot-color');
            gsap.to('.art2', 'art5', '.art7', 'art8', 'art9', 'art12', 'art14', 'art16', 'art19', { opacity: 0, duration: 0.2, y: -50 })
            gsap.to('.art3, .art1', 'art4', 'art6', 'art10', 'art11', 'art13', 'art15', 'art17', 'art18', 'art20', 'art21', 'art22', { opacity: 0, duration: 0.2, y: 50 })
        }
    });
});
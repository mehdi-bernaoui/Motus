var titre = document.querySelector('h1');

titre.addEventListener('mouseover', function() {
    anime({
        targets: titre,
        scale: [
            { value: 1.1, duration: 200, easing: 'easeInOutQuad' },
            { value: 1, duration: 200, easing: 'easeInOutQuad' }
        ],
        direction: 'alternate',
        loop: 3
    });
});

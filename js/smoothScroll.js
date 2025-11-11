const navbar = document.querySelector('.header__nav');
console.log(navbar);
const navLinks = navbar.querySelectorAll('a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.target);
        console.log(link.getAttribute('href'));
        console.log(document.querySelector(link.getAttribute('href')));
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
            console.log('scroll');
            seamless.scrollIntoView(section, {
                block: 'start',
                behavior: 'smooth',
                inline: 'center'
            });
            }
    });
});


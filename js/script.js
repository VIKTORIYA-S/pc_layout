const contents = document.querySelectorAll('.program-line__content');


contents.forEach((el) => {
    const title = el.querySelector('.program-line__title');
    const descr = el.querySelector('.program-line__descr');

    title.addEventListener('click', () => {
    descr.classList.toggle('active');
});

});

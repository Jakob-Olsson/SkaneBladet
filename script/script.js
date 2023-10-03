const hamburger = document.getElementById('hamburger');
const hamburgerlist = document.getElementById('hamburgerlist');

hamburger.addEventListener('click', () => {
    hamburgerlist.classList.toggle('show');
});
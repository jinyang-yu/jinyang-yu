const toggleButtons = document.getElementsByClassName('toggle-button');
const body = document.body;

toggleButtons[0].addEventListener('click', () => {
    body.classList.toggle('spotify-purple'); 
});
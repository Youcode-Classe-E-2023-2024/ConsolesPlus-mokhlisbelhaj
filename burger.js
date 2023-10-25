const starButton = document.getElementById('star');
const sideBar = document.querySelector('.side-bar');

starButton.addEventListener('click', () => {
    if (sideBar.style.right === '0px' || sideBar.style.right === '') {
        sideBar.style.right = '-100%'; // Hide the sidebar
    } else {
        sideBar.style.right = '0'; // Show the sidebar
    }
});
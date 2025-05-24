// Dark mode Light mode theme

const togglebutton = document.querySelector('.color-mode');
const themeIcon = document.getElementById('theme-icon')

togglebutton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    

    if (document.body.classList.contains('dark-mode')) {
        themeIcon.src = "/assets/images/icon-sun.svg";
    } else {
        themeIcon.src = "/assets/images/icon-moon.svg";
    }
});


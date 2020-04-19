const darkModeToggle = document.getElementById('darkModeToggleSwitch');

function switchTheme(el) {
    if (el.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

darkModeToggle.addEventListener('change', switchTheme, false);
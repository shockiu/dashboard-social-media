const checkbox = document.getElementById('theme-switcher');
const body = document.body;
checkbox.addEventListener('click', () => {
    if(checkbox.checked) {
        body.classList.add('dark-theme');
        return
    }
    body.classList.remove('dark-theme');
});


const detectThemeBrowser = () => {
    if(
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
        checkbox.checked = true;
        body.classList.add('dark-theme');
    }
}

detectThemeBrowser();
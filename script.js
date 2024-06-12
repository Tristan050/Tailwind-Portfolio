// JavaScript om het mobiele menu te togglen
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    let mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColorForAll() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const elements = ['tristan-text', 'projecten-text', 'vaardigheden-text', 'certificaten-text'];

    elements.forEach(elementId => {
        const element = document.getElementById(elementId);
        element.style.background = `linear-gradient(90deg, ${color1}, ${color2})`;
        element.style.webkitTextFillColor = 'transparent';
        element.style.backgroundClip = 'text';
    });
}

setInterval(changeColorForAll, 1000); // Change colors every 1 second
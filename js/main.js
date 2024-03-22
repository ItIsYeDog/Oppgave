document.addEventListener('DOMContentLoaded', (event) => {
    const mainHeading = document.getElementById('main-heading');
    const input = document.getElementById('tekst');
    
    const storedHeading = localStorage.getItem('mainHeading');
    if (storedHeading) {
        mainHeading.textContent = storedHeading;
    }

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();

            mainHeading.textContent = input.value;
            localStorage.setItem('mainHeading', input.value);
        }
    });
});
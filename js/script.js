window.addEventListener('load', function () {
    alert("Welcome to Zomato! Find your next favorite meal.");
});

const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => {
    searchBtn.style.transform = 'scale(1.3) rotate(360deg)';
    
    setTimeout(() => {
        searchBtn.style.transform = '';
    }, 300);

    alert("Searching restaurants... (Functionality coming soon)");
});

const headerLinks = document.querySelectorAll('header a');

headerLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        alert(`You clicked: ${link.textContent}`);
    });
});

const cityButtons = document.querySelectorAll('.city-grid button');

cityButtons.forEach(button => {
    button.addEventListener('click', () => {
        const city = button.textContent;
        alert(`Navigating to ${city} Restaurants...`);
    });
});

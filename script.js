
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > document.getElementById('about').offsetTop - 50) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-gray-800', 'bg-opacity-90');
    } else {
        navbar.classList.remove('bg-gray-800', 'bg-opacity-90');
        navbar.classList.add('bg-transparent');
    }
});


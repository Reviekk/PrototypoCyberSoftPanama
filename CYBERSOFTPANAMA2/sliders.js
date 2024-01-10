const prevArrow = document.getElementById('before');
const nextArrow = document.getElementById('after');
const servicios = document.querySelectorAll('.servicios');

let currentIndex = 0;

function showService(index) {
    servicios.forEach(servicio => servicio.style.display = 'none');
    servicios[index].style.display = 'grid';
}

showService(currentIndex);

prevArrow.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + servicios.length) % servicios.length;
    showService(currentIndex);
});

nextArrow.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % servicios.length;
    showService(currentIndex);
});
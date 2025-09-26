// Отримуємо модальне вікно
const modal = document.getElementById('modal');

// Закриття при натисканні на хрестик
document.querySelector('.close').onclick = () => {
    modal.style.display = 'none';
};

// Закриття при натисканні поза вікном
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};


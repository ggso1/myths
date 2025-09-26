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

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".gallery-item img").forEach(img => {
        img.addEventListener("click", () => {
            const parent = img.parentElement;
            modal.style.display = "block";
            modalImg.src = img.src;
            modalTitle.textContent = parent.dataset.title;
            modalDescription.textContent = parent.dataset.description;
        });
    });

    closeBtn.onclick = () => {
        modal.style.display = "none";
    }

    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    }
});

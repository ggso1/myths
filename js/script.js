const bookSquares = document.querySelectorAll('.square');
const bookModal = document.getElementById('book-modal');
const bookPage = document.getElementById('page-content');
const bookClose = bookModal.querySelector('.close');
const bookPrev = bookModal.querySelector('.prev');
const bookNext = bookModal.querySelector('.next');

const books = {
    "Книга 1": ["img/Mafka.png", "img/M1.JPG", "img/M2.JPG", "img/M3.JPG"],
    "Книга 2": ["img/Chort.JPG", "img/CH1.JPG", "img/CH2.JPG", "img/CH3.JPG"],
    "Книга 3": ["img/Lisovic.png", "img/L1.JPG", "img/L2.JPG", "img/L3.JPG"],
    "Книга 4": ["img/Poterchata.png", "img/P1.JPG", "img/P2.JPG", "img/P3.JPG"]
};

let currentBook = [];
let currentPage = 0;

bookSquares.forEach(square => {
    square.addEventListener('click', () => {
        bookModal.style.display = 'flex';
        currentBook = books[square.dataset.title];
        currentPage = 0;
        bookPage.innerHTML = `<img src="${currentBook[currentPage]}" alt="Сторінка">`;
    });
});

bookClose.addEventListener('click', () => bookModal.style.display = 'none');

bookModal.addEventListener('click', e => {
    if (!bookModal.querySelector('.modal-content').contains(e.target)) {
        bookModal.style.display = 'none';
    }
});

bookPrev.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        bookPage.innerHTML = `<img src="${currentBook[currentPage]}" alt="Сторінка">`;
    }
});
bookNext.addEventListener('click', () => {
    if (currentPage < currentBook.length - 1) {
        currentPage++;
        bookPage.innerHTML = `<img src="${currentBook[currentPage]}" alt="Сторінка">`;
    }
});

// === Модальне вікно для галереї ===
const galleryModal = document.getElementById("gallery-modal");
const galleryImg = document.getElementById("modal-img");
const galleryTitle = document.getElementById("modal-title");
const galleryDesc = document.getElementById("modal-description");
const galleryClose = galleryModal.querySelector(".close");

document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", () => {
        const parent = img.parentElement;
        galleryModal.style.display = "block";
        galleryImg.src = img.src;
        galleryTitle.textContent = parent.dataset.title;
        galleryDesc.textContent = parent.dataset.description;
    });
});

galleryClose.addEventListener("click", () => galleryModal.style.display = "none");
galleryModal.addEventListener('click', e => {
    if (!galleryModal.querySelector('.modal-content').contains(e.target)) {
        galleryModal.style.display = 'none';
    }
});
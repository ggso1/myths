const bookSquares = document.querySelectorAll('.square');
const bookModal = document.getElementById('book-modal');
const bookPage = document.getElementById('page-content');
const bookClose = bookModal.querySelector('.close');
const bookPrev = bookModal.querySelector('.prev');
const bookNext = bookModal.querySelector('.next');

const books = {
    "Книга 1": ["img/Mafka.png", "images/page2.jpg", "images/page3.jpg"],
    "Книга 2": ["img/Chort.jpg", "images/book2_page2.jpg"],
    "Книга 3": ["img/Lisovic.png", "images/book3_page2.jpg", "images/book3_page3.jpg", "images/book3_page4.jpg"],
    "Книга 4": ["img/Poterchata.png", "images/book4_page2.jpg", "images/book4_page3.jpg"]
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
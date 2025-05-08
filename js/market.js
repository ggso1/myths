async function buildItems() {
    const response = await fetch('js/items.json');
    const itemsArray = await response.json();

    itemsArray.forEach((item) => {
        let itemsDiv = document.createElement('div');
        itemsDiv.classList.add('item');

        itemsDiv.style.backgroundImage = `url('img/${item.img}')`;
        itemsDiv.style.backgroundSize = 'cover';
        itemsDiv.style.backgroundPosition = 'center';

        itemsDiv.innerHTML = `<p class="item-title">${item.title}</p>`;

        // Обробник події — відкриття модального вікна
        itemsDiv.addEventListener('click', () => {
            document.getElementById('modal-title').innerText = item.title;
            document.getElementById('modal-description').innerText = item.description;
            document.getElementById('modal-image').src = `img/${item.modalImg}`;
            document.getElementById('modal').style.display = 'block';
        });
        

        document.getElementById('items').appendChild(itemsDiv);
    });
}
    

// Виклик функції
buildItems();

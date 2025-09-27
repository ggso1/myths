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

const regions = document.querySelectorAll('.region');
const infoBox = document.getElementById('infoBox');
const regionName = document.getElementById('regionName');
const regionDesc = document.getElementById('regionDesc');

// Дані для областей
const regionData = {
    "UA-01": {
        name: "Кримська область",
        desc: "Острів у Чорному морі. Містить багато історичних та природних пам'яток."
    },
    "UA-02": {
        name: "Черкаська область",
        desc: "Розташована в центральній частині України. Відома своїми річками та лісами."
    },
    "UA-03": {
        name: "Чернівецька область",
        desc: "Область навколо столиці України. Багато історичних місць."
    },
    "UA-04": {
        name: "Чернівецька область",
        desc: "Область на заході України, відома своїми культурними традиціями."
    },
    "UA-05": {
        name: "Дніпропетровська область",
        desc: "Область на заході України, відома своїми культурними традиціями."
    },
    "UA-06": {
        name: "Донецька область",
        desc: "Область на сході України, відома своїми промисловими традиціями."
    },
    "UA-07": {
        name: "Луганська область",
        desc: "Область на сході України, відома своїми промисловими традиціями."
    },
    "UA-08": {
        name: "Івано-Франківська область",
        desc: "Область на заході України, відома своїми природними ресурсами."
    },
    "UA-09": {
        name: "Харківська область",
        desc: "Область на сході України, відома своїми науковими установами."
    },
    "UA-10": {
        name: "Херсонська область",
        desc: "Область на півдні України, відома своїми курортами та природою."
    },
    "UA-11": {
        name: "Хмельницька область",
        desc: "Область на заході України, відома своїми природними ресурсами."
    },
    "UA-12": {
        name: "Київ",
        desc: "Область на заході України, відома своїми природними ресурсами."
    },
    "UA-13": {
        name: "Київська область",
        desc: "Область на заході України, відома своїми природними ресурсами."
    },
    "UA-14": {
        name: "Кіровоградська область",
        desc: "Область на заході України, відома своїми природними ресурсами."
    },
    "UA-15": {
        name: "Львівська область",
        desc: "Область на заході України, відома своїми природними ресурсами."
    },
    "UA-16": {
        name: "Миколаївська область",
        desc: "Область на заході України, відома своїми природними ресурсами."
    },
    "UA-17": {
        name: "Одеська область",
        desc: "Область на заході України, відома своїми природними ресурсами."
    },
    "UA-18": {
        name: "Полтавська область",
        desc: "Область на заході України, відома своїми природними ресурсами."
    },
    "UA-19": {
        name: "Сумська область",
        desc: "Область на заході України, відома своїми природними ресурсами."
    },
    "UA-20": {
        name: "Закарпатська область",
        desc: "Область на заході України, відома своїми природними ресурсами."
    },
    "UA-21": {
        name: "Волинська область",
        desc: "Область на заході України, відома своїми природними ресурсами."
    },
    "UA-22": {
        name: "Рівненська область",
        desc: "Область на заході України, відома своїми природними ресурсами."
    },
    "UA-23": {
        name: "Тернопільська область",
        desc: "Область на заході України, відома своїми природними ресурсами."
    },
    "UA-24": {
        name: "Волинська область",
        desc: "Область на заході України, відома своїми природними ресурсами."
    },
    "UA-25": {
        name: "Запорізька область",
        desc: "Область на півдні України, відома своїми курортами та природою."
    },
    "UA-26": {
        name: "Житомирська область",
        desc: "Область на заході України, відома своїми природними ресурсами."
    },
};





regions.forEach(region => {
    region.addEventListener('click', () => {
        const id = region.id;
        regionName.textContent = regionData[id].name;
        regionDesc.textContent = regionData[id].desc;
        infoBox.style.display = 'block';
    });
});


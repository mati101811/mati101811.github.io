var projectId;
var designId;
var design;

document.addEventListener("DOMContentLoaded", () => {

    setTheme();
    setMenuLinksWidth();

    // Pobranie id z linku (projekt.html?id=1)
    const params = new URLSearchParams(window.location.search);
    projectId = params.get("project_id");
    designId = params.get("design_id");

    if (!projectId || !designId) {
        console.error("Brak parametru w URL.");
        return;
    }

    fetch("data_designs.json")
        .then(response => response.json())
        .then(data => {
            design = data.projects[projectId].designs[designId];
            setHeroSection();
            setMenu();
            setOptionsChanges();
            showArticle();
        })
        .catch(err => console.error("Błąd wczytywania danych:", err));

    setScrollButtno();
});

function setScrollButtno() {
    const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};


}

function setTheme() {
    let theme = "light";
    document.documentElement.setAttribute('data-theme', theme);
}

function setMenuLinksWidth() {
    const links = document.querySelectorAll(".link");

    // Znajdź największą szerokość
    let maxWidth = 0;
    links.forEach(link => {
        link.style.width = "fit-content";

        // zmierz
        const w = link.offsetWidth;
        if (w > maxWidth) maxWidth = w;

        // usuń inline — wraca CSS (czyli 28px)
        link.style.width = "";
    });

    // Ustaw jako custom property
    document.documentElement.style.setProperty("--max-link-width", maxWidth + "px");

}

function setMenu() {
    const links = document.querySelectorAll(".menu .link");

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();

            // zdejmujemy active ze wszystkich
            links.forEach(l => l.classList.remove("active"));

            // nadajemy active klikniętemu
            link.classList.add("active");
        });
    });
}

function setHeroSection() {
    const title = document.getElementById("article-title");
    const subtitle = document.getElementById("subtitle-container");
    const hero = document.getElementById("hero-img");

    title.textContent = design.title;
    var subtitles = design.subtitle.split(',');
    // create span for each subtitle
    for (var i = 0; i < subtitles.length; i++) {
        var span = document.createElement('span');
        span.textContent = subtitles[i];
        subtitle.appendChild(span);
    }

    // subtitle.textContent = design.subtitle;
    hero.style.backgroundImage = `url('images/project_${projectId}_design_${designId}_hero.jpg')`;
}

function setOptionsChanges() {
    // Pobieramy wszystkie przyciski i wszystkie zdjęcia
    let buttons = document.querySelectorAll('.link');


    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Usuwamy active z pozostałych
            buttons.forEach(b => b.classList.remove('active'));
            let images = document.querySelectorAll('.article-img');
            // Nadajemy active klikniętemu
            button.classList.add('active');

            // Pobieramy wybrany styl (np. "modern", "natural"...)
            const chosenStyle = button.dataset.code;
            // Zmieniamy src dla wszystkich zdjęć
            images.forEach(img => {
                console.log(img);
                const id = img.dataset.id;     // np. "1"
                img.src = `design_images/project_${projectId}/design_${designId}/${chosenStyle}_${id}.jpg`;
                console.log(img.src);
            });

            // Zmieniamy theme strony
            const theme = button.dataset.theme;
            document.documentElement.setAttribute('data-theme', theme);
        });
    });
}

function showArticle() {
    const container = document.getElementById("article");

    // wyczyszczenie poprzedniej zawartości
    container.innerHTML = "";

    const fragments = design["article-fragments"];
    if (!fragments || fragments.length === 0) {
        console.warn("Brak article-fragments w designie");
        return;
    }

    fragments.forEach(frag => {
        const block = document.createElement("section");
        block.className = "article-block";

        let addImage = frag.image;


        const img = document.createElement("img");
        img.className = "article-img";
        const code = document.querySelector('.link.active').dataset.code;
        img.src = "design_images/project_" + projectId + "/design_" + designId + "/" + code + "_" + frag.image + ".jpg";
        img.alt = 'Zdjęcie ' + frag.image;
        img.dataset.id = frag.image;
        img.onclick = () => showModal(frag.image);

        const p = document.createElement("p");
        p.innerHTML = frag.text;

        const order = frag.order ?? 0;

        // wybór templatu
        switch (order) {
            case 0: block.classList.add("img-top-left"); break;
            case 1: block.classList.add("img-top-right"); break;
            case 2: block.classList.add("img-bottom-left"); break;
            case 3: block.classList.add("img-bottom-right"); break;
        }

        block.appendChild(img);
        block.appendChild(p);

        if (addImage == -1) {
            img.style.display = "none";
        }

        container.appendChild(block);
    });

}

let currentIndex = 0;
let currentVariant = "";

function showModal(photoIndex) {
    currentIndex = photoIndex;

    // Pobranie nazwy wariantu z klikniętego zdjęcia
    const img = document.querySelectorAll('.article-img')[photoIndex];
    const parts = img.src.split('/');
    const file = parts.pop();               // np. dzienzaslony_2.jpg
    const [variant] = file.split('_');      // -> "dzienzaslony"

    currentVariant = variant;

    // Otworz modal
    const modal = document.getElementById('photo-modal');
    modal.style.display = 'flex';

    // Załaduj pierwsze zdjęcie
    updateModalImage(currentVariant);

    // Wygeneruj przyciski poniżej zdjęcia
    generateVariantButtons();

    // Zamknięcie (kliknięcie w tło)
    modal.addEventListener('click', e => {
        if (e.target === modal) modal.style.display = 'none';
    });

    document.getElementById('close-modal').onclick = () => {
        modal.style.display = 'none';
    };
}

function updateModalImage(variant) {
    const modalImg = document.getElementById('modal-img');
    modalImg.src = `design_images/project_${projectId}/design_${designId}/${variant}_${currentIndex}.jpg`;
}

// Tworzy przyciski pod zdjęciem
function generateVariantButtons() {
    const container = document.getElementById('modal-variants');
    container.innerHTML = ""; 

    const links = document.querySelectorAll('.link');

    // znajdź aktywny wariant z menu
    let activeVariantCode = null;
    const activeLink = document.querySelector('.link.active');
    if (activeLink) {
        activeVariantCode = activeLink.dataset.code;
    }

    links.forEach(link => {
        const variantCode = link.dataset.code;
        const originalImg = link.querySelector('.link-icon img');
        const thumb = originalImg.cloneNode(true);

        const btn = document.createElement('button');
        btn.className = "modal-variant-btn";
        btn.dataset.code = variantCode;

        btn.appendChild(thumb);

        // ustaw aktywny przycisk na start
        if (variantCode === activeVariantCode) {
            btn.classList.add("active");
        }

        // kliknięcie
        btn.addEventListener('click', () => {
            setActiveModalVariant(variantCode);
        });

        container.appendChild(btn);
    });
}

function setActiveModalVariant(code) {
    currentVariant = code;
    updateModalImage(code);

    // zdejmij active ze wszystkich
    document.querySelectorAll('.modal-variant-btn')
        .forEach(btn => btn.classList.remove('active'));

    // ustaw active na aktualnym
    const activeBtn = document.querySelector(`.modal-variant-btn[data-code="${code}"]`);
    if (activeBtn) activeBtn.classList.add('active');
}



function goToGallery() {
    window.location.href = `designy/gallery.html?project_id=${projectId}&design_id=${designId}`;

}



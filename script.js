const cars = [
    "Alfa romeo 159",
    "Alfa romeo Giulia",
    "Alfa romeo Giulietta",
    "Alfa romeo Mito",
    "Alfa romeo Stelvio",
    "Alfa romeo Tonale",
    "Audi A1",
    "Audi A3",
    "Audi A4",
    "Audi A5",
    "Audi A6",
    "Audi A7",
    "Audi A8",
    "Audi Q2",
    "Audi Q3",
    "Audi Q5",
    "Audi Q7",
    "Audi Q8",
    "Audi RS3",
    "Audi RS4",
    "Audi RS6",
    "Audi S3",
    "Audi S4",
    "Audi S5",
    "Audi S6",
    "Audi SQ5",
    "Audi SQ7",
    "Audi TT",
    "BMW 3GT",
    "BMW i3",
    "BMW M3",
    "BMW M4",
    "BMW M5",
    "BMW Seria 1",
    "BMW Seria 2",
    "BMW Seria 3",
    "BMW Seria 4",
    "BMW Seria 5",
    "BMW Seria 6",
    "BMW Seria 7",
    "BMW Seria 8",
    "BMW X1",
    "BMW X2",
    "BMW X3",
    "BMW X4",
    "BMW X5",
    "BMW X6",
    "BMW X7",
    "BMW Z4",
    "BYD Seal U",
    "Chevrolet Aveo",
    "Chevrolet Camaro",
    "Chevrolet Captiva",
    "Chevrolet Corvette",
    "Chevrolet Cruze",
    "Chevrolet Orlando",
    "Chevrolet Spark",
    "Chevrolet Trax",
    "Chrysler Pacifica",
    "Chrysler Voyager",
    "Citroen Berlingo",
    "Citroen C1",
    "Citroen C3",
    "Citroen C3 Aircross",
    "Citroen C3 Picasso",
    "Citroen C4",
    "Citroen C4 Cactus",
    "Citroen C4 Grand Picasso",
    "Citroen C4 Picasso",
    "Citroen C4 SpaceTourer",
    "Citroen C5",
    "Citroen C5 Aircross",
    "Citroen DS3",
    "Citroen DS4",
    "Citroen DS5",
    "Cupra Ateca",
    "Cupra Formentor",
    "Cupra Leon",
    "Cupra Leon Sportstourer",
    "Cupra Terramar",
    "Dacia Bigster",
    "Dacia Dokker",
    "Dacia Duster",
    "Dacia Jogger",
    "Dacia Lodgy",
    "Dacia Logan",
    "Dacia Sandero",
    "Dacia Sandero Stepway",
    "Dacia Spring",
    "Dodge Avenger",
    "Dodge Challenger",
    "Dodge Charger",
    "Dodge Durango",
    "Dodge Journey",
    "Dodge RAM",
    "DS 4",
    "DS 7",
    "Fiat 500",
    "Fiat 500L",
    "Fiat 500X",
    "Fiat 600",
    "Fiat Bravo",
    "Fiat Cinquecento",
    "Fiat Doblo",
    "Fiat Freemont",
    "Fiat Grande Punto",
    "Fiat Panda",
    "Fiat Punto",
    "Fiat Punto Evo",
    "Fiat Sedici",
    "Fiat Seicento",
    "Fiat Tipo",
    "Ford B-MAX",
    "Ford C-MAX",
    "Ford EcoSport",
    "Ford Edge",
    "Ford Escape",
    "Ford Explorer",
    "Ford F150",
    "Ford Fiesta",
    "Ford Focus",
    "Ford Focus C-Max",
    "Ford Fusion",
    "Ford Galaxy",
    "Ford Grand C-MAX",
    "Ford KA",
    "Ford Kuga",
    "Ford Mondeo",
    "Ford Mustang",
    "Ford Puma",
    "Ford Ranger",
    "Ford S-Max",
    "Ford Tourneo Connect",
    "Ford Tourneo Courier",
    "Ford Tourneo Custom",
    "Ford Transit",
    "Ford Transit Connect",
    "Ford Transit Custom",
    "Honda Accord",
    "Honda Civic",
    "Honda CR-V",
    "Honda HR-V",
    "Honda Jazz",
    "Hyundai Bayon",
    "Hyundai Elantra",
    "Hyundai i10",
    "Hyundai i20",
    "Hyundai i30",
    "Hyundai i40",
    "Hyundai ix20",
    "Hyundai ix35",
    "Hyundai Kona",
    "Hyundai Santa Fe",
    "Hyundai Tucson",
    "Isuzu D-Max",
    "Jaecoo 7",
    "Jaguar E-Pace",
    "Jaguar F-Pace",
    "Jaguar XE",
    "Jaguar XF",
    "Jaguar XJ",
    "Jeep Avenger",
    "Jeep Cherokee",
    "Jeep Compass",
    "Jeep Grand Cherokee",
    "Jeep Renegade",
    "Jeep Wrangler",
    "Kia Carens",
    "Kia Ceed",
    "Kia Niro",
    "Kia Optima",
    "Kia Picanto",
    "Kia ProCeed",
    "Kia Rio",
    "Kia Sorento",
    "Kia Soul",
    "Kia Sportage",
    "Kia Stinger",
    "Kia Stonic",
    "Kia Venga",
    "Kia XCeed",
    "Land Rover Defender",
    "Land Rover Discovery",
    "Land Rover Discovery Sport",
    "Land Rover Range Rover",
    "Land Rover Range Rover Evoque",
    "Land Rover Range Rover Sport",
    "Land Rover Range Rover Velar",
    "Lexus CT",
    "Lexus ES",
    "Lexus IS",
    "Lexus LS",
    "Lexus NX",
    "Lexus RX",
    "Lexus UX",
    "Maserati Ghibli",
    "Mazda 2",
    "Mazda 3",
    "Mazda 5",
    "Mazda 6",
    "Mazda CX-3",
    "Mazda CX-30",
    "Mazda CX-5",
    "Mazda CX-60",
    "Mazda MX-5",
    "Mercedes AMG GT",
    "Mercedes Citan",
    "Mercedes CL",
    "Mercedes CLA",
    "Mercedes CLE",
    "Mercedes CLK",
    "Mercedes CLS",
    "Mercedes GL",
    "Mercedes GLA",
    "Mercedes GLB",
    "Mercedes GLC",
    "Mercedes GLE",
    "Mercedes GLK",
    "Mercedes GLS",
    "Mercedes Klasa A",
    "Mercedes Klasa B",
    "Mercedes Klasa C",
    "Mercedes Klasa E",
    "Mercedes Klasa G",
    "Mercedes Klasa S",
    "Mercedes Klasa V",
    "Mercedes ML",
    "Mercedes SL",
    "Mercedes SLK",
    "Mercedes Sprinter",
    "Mercedes Vito",
    "Mercedes W124 (1984-1993)",
    "MG HS",
    "Mini Clubman",
    "Mini Cooper",
    "Mini Countryman",
    "Mini ONE",
    "Mitsubishi ASX",
    "Mitsubishi Colt",
    "Mitsubishi Eclipse Cross",
    "Mitsubishi Lancer",
    "Mitsubishi Outlander",
    "Mitsubishi Pajero",
    "Mitsubishi Space Star",
    "Nissan Juke",
    "Nissan Leaf",
    "Nissan Micra",
    "Nissan Note",
    "Nissan Patrol",
    "Nissan Qashqai",
    "Nissan Qashqai+2",
    "Nissan X-Trail",
    "Omoda 5",
    "Opel Adam",
    "Opel Antara",
    "Opel Astra",
    "Opel Combo",
    "Opel Corsa",
    "Opel Crossland",
    "Opel Frontera",
    "Opel Grandland",
    "Opel Insignia",
    "Opel Meriva",
    "Opel Mokka",
    "Opel Vectra",
    "Opel Vivaro",
    "Opel Zafira",
    "Peugeot 2008",
    "Peugeot 206",
    "Peugeot 207",
    "Peugeot 208",
    "Peugeot 3008",
    "Peugeot 307",
    "Peugeot 308",
    "Peugeot 407",
    "Peugeot 408",
    "Peugeot 5008",
    "Peugeot 508",
    "Peugeot Partner",
    "Peugeot Rifter",
    "Porsche 911",
    "Porsche Cayenne",
    "Porsche Macan",
    "Porsche Panamera",
    "Porsche Taycan",
    "RAM 1500",
    "Renault 5",
    "Renault Arkana",
    "Renault Austral",
    "Renault Captur",
    "Renault Clio",
    "Renault Espace",
    "Renault Grand Scenic",
    "Renault Kadjar",
    "Renault Kangoo",
    "Renault Koleos",
    "Renault Laguna",
    "Renault Megane",
    "Renault Modus",
    "Renault Scenic",
    "Renault Symbioz",
    "Renault Talisman",
    "Renault Trafic",
    "Renault Twingo",
    "Saab 9-3",
    "Seat Alhamra",
    "Seat Altea",
    "Seat Arona",
    "Seat Ateca",
    "Seat Exeo",
    "Seat Ibiza",
    "Seat Leon",
    "Skoda Citigo",
    "Skoda Fabia",
    "Skoda Kamiq",
    "Skoda Karoq",
    "Skoda Kodiaq",
    "Skoda Octavia",
    "Skoda RAPID",
    "Skoda Roomster",
    "Skoda Scala",
    "Skoda Superb",
    "Skoda Yeti",
    "Smart Fortwo",
    "SsangYong Korando",
    "SsangYong Tivoli",
    "Subaru Forester",
    "Subaru Impreza",
    "Subaru Legacy",
    "Subaru Outback",
    "Subaru XV",
    "Suzuki Grand Vitara",
    "Suzuki Jimny",
    "Suzuki Swift",
    "Suzuki SX4",
    "Suzuki SX4 S-Cross",
    "Suzuki Vitara",
    "Tesla Model 3",
    "Toyota Auris",
    "Toyota Avensis",
    "Toyota Aygo",
    "Toyota Aygo X",
    "Toyota C-HR",
    "Toyota Camry",
    "Toyota Corolla",
    "Toyota Corolla Verso",
    "Toyota Highlander",
    "Toyota Hilux",
    "Toyota Land Cruiser",
    "Toyota Prius",
    "Toyota ProAce",
    "Toyota Proace City Verso",
    "Toyota Proace Verso",
    "Toyota RAV4",
    "Toyota Verso",
    "Toyota Yaris",
    "Toyota Yaris Cross",
    "Volkswagen Amarok",
    "Volkswagen Arteon",
    "Volkswagen Beetle",
    "Volkswagen Caddy",
    "Volkswagen CC",
    "Volkswagen Golf",
    "Volkswagen Golf Plus",
    "Volkswagen Golf Sportsvan",
    "Volkswagen Jetta",
    "Volkswagen Multivan",
    "Volkswagen New Beetle",
    "Volkswagen Passat",
    "Volkswagen Polo",
    "Volkswagen Scirocco",
    "Volkswagen Sharan",
    "Volkswagen T-Cross",
    "Volkswagen T-Roc",
    "Volkswagen Taigo",
    "Volkswagen Tiguan",
    "Volkswagen Tiguan Allspace",
    "Volkswagen Touareg",
    "Volkswagen Touran",
    "Volkswagen Transporter",
    "Volkswagen up!",
    "Volvo C30",
    "Volvo EX30",
    "Volvo S40",
    "Volvo S60",
    "Volvo S80",
    "Volvo S90",
    "Volvo V40",
    "Volvo V50",
    "Volvo V60",
    "Volvo V60 Cross Country",
    "Volvo V70",
    "Volvo V90",
    "Volvo V90 Cross Country",
    "Volvo XC 40",
    "Volvo XC 60",
    "Volvo XC 70",
    "Volvo XC 90"
];

var randomCars = [];
let galleryData = {};

function createBingo() {
    const board = document.getElementById("board");

    // Tworzy 25 divów i podpina obsługę kliknięcia
    for (let i = 0; i < 25; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = i + 1;

        // Obsługa kliknięcia — pokazuje index
        cell.addEventListener("click", () => {
            cellCliked(i, true);
        });

        board.appendChild(cell);
    }
    createList();
}

function cellCliked(i, goOn) {
    const board = document.getElementById("board");
    const cell = board.children[i];
    cell.classList.toggle("clicked");
    console.log("Kliknięto pole o indeksie:", i);
    if (goOn)
        itemClicked(i, false);
    saveClickedState(); // 🔥
}

function itemClicked(i, goOn) {
    const carList = document.getElementById("carList");
    const item = carList.children[i];
    item.classList.toggle("clicked");
    console.log("Kliknięto element o indeksie:", i);
    if (goOn)
        cellCliked(i, false);
    saveClickedState(); // 🔥
}


// Czyta ciasteczko o podanej nazwie
function getCookie(name) {
    const decoded = decodeURIComponent(document.cookie);
    const cookies = decoded.split(';');
    for (let cookie of cookies) {
        const [key, value] = cookie.trim().split('=');
        if (key === name) {
            return value;
        }
    }
    return null;
}

// Zapisuje ciasteczko o nazwie name z wartością value (na x dni)
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
}

function drawUniqueIndexes(count, max) {
    const indexes = new Set();
    while (indexes.size < count) {
        indexes.add(Math.floor(Math.random() * max));
    }
    return [...indexes];
}

function getTodayKey() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `bingo-${yyyy}-${mm}-${dd}`; // np. "bingo-2025-07-13"
}

function getTodayClickKey() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `clicked-${yyyy}-${mm}-${dd}`;
}

function saveClickedState() {
    const carList = document.getElementById("carList");
    let state = "";

    for (let i = 0; i < carList.children.length; i++) {
        const item = carList.children[i];
        state += item.classList.contains("clicked") ? "1" : "0";
    }

    const key = getTodayClickKey();
    setCookie(key, state, 7);
    console.log("Zapisano kliknięcia:", state);
}

function loadClickedState() {
    const key = getTodayClickKey();
    const state = getCookie(key);

    if (!state) return;

    for (let i = 0; i < state.length; i++) {
        if (state[i] === "1") {
            // Wywołanie kliknięcia po stronie listy — synchronizuje też planszę
            itemClicked(i, true);
        }
    }

    console.log("Wczytano kliknięcia:", state);
}


function createList() {
    const carList = document.getElementById("carList");
    const cookieKey = getTodayKey();
    let indexes;

    const saved = getCookie(cookieKey);
    if (saved) {
        indexes = JSON.parse(saved);
        console.log("Wczytano listę z cookies:", indexes);
    } else {
        // delete cookies
        document.cookie.split(";").forEach(c => {
            document.cookie = c.split("=")[0].trim() + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        });


        indexes = drawUniqueIndexes(25, cars.length);
        setCookie(cookieKey, JSON.stringify(indexes), 7); // 7 dni ważności

        console.log("Wylosowano nową listę:", indexes);
    }

    for (let i = 0; i < 25; i++) {
        const carIndex = indexes[i];
        const carName = cars[carIndex];

        const listItem = document.createElement("li");
        listItem.classList.add("item");

        // Główna część: nazwa + przycisk
        const header = document.createElement("div");
        header.classList.add("header");

        const nameSpan = document.createElement("span");
        nameSpan.textContent = i + 1 + ". " + carName;

        const button = document.createElement("button");
        button.textContent = "Znaleziono";
        button.addEventListener("click", (e) => {
            e.stopPropagation(); // nie klikaj listItem przy kliknięciu przycisku
            itemClicked(i, true);
        });

        header.appendChild(nameSpan);
        header.appendChild(button);
        listItem.appendChild(header);

        // Detale (ukryte na starcie)
        const details = document.createElement("div");
        details.classList.add("details");
        details.style.display = "none";
        details.innerHTML = `
            placeholder
        `;

        listItem.appendChild(details);

        // Klik w nagłówek pokazuje detale
        listItem.addEventListener("click", () => {
            const visible = details.style.display === "block";
            details.style.display = visible ? "none" : "block";

            if (!visible) {
                showGallery(carName, details);
            }
        });

        carList.appendChild(listItem);
    }

    loadClickedState();

}

function showGallery(carName, container) {
    container.innerHTML = ""; // wyczyść stare dane

    const items = galleryData[carName];
    if (!items) {
        container.innerHTML = "<p>Brak zdjęć dla tego samochodu.</p>";
        return;
    }

    const gallery = document.createElement("div");
    gallery.classList.add("gallery");

    items.forEach(({ link, opis }) => {
        const cell = document.createElement("div");
        cell.classList.add("gallery-item");

        const img = document.createElement("img");
        img.src = link;
        img.alt = opis;

        const caption = document.createElement("p");
        caption.textContent = opis;

        cell.appendChild(img);
        cell.appendChild(caption);
        gallery.appendChild(cell);
    });

    container.appendChild(gallery);
}

function openItem(item, i) {
    item.classList.toggle("clicked");
    console.log("Kliknięto element o indeksie:", i);
}


document.addEventListener("DOMContentLoaded", () => {

    fetch("gallery.json")
        .then(res => res.json())
        .then(data => {
            galleryData = data;
            console.log("Załadowano dane galerii", galleryData);
        })
        .catch(err => {
            console.error("Błąd ładowania galerii:", err);
        });
    createBingo();
});
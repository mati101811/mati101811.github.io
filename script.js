const SIZE = 25;
let bingoState = new Array(SIZE).fill(0);
let selectedCarIndexes = [];
let carImagesMap = {};

const cars = [
    "Alfa romeo 159",
    "Alfa romeo Guilia",
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
    "Audi RS6",
    "Audi S3",
    "Audi S5",
    "Audi S6",
    "Audi SQ5",
    "Audi SQ7",
    "Audi TT",
    "BWM 3GT",
    "BWM i3",
    "BWM M3",
    "BWM M4",
    "BWM M5",
    "BWM Seria 1",
    "BWM Seria 2",
    "BWM Seria 3",
    "BWM Seria 4",
    "BWM Seria 5",
    "BWM Seria 6",
    "BWM Seria 7",
    "BWM Seria 8",
    "BWM X1",
    "BWM X2",
    "BWM X3",
    "BWM X4",
    "BWM X5",
    "BWM X5 M",
    "BWM X6",
    "BWM X7",
    "BWM Z4",
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
    "Mini Cooper S",
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
    "Opel Crossland X",
    "Opel Frontera",
    "Opel Grandland",
    "Opel Grandland X",
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
    "Seat Altea XL",
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
    "Toyota Corolla Cross",
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
    "Volkswagen California",
    "Volkswagen Caravelle",
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
    "Volkswagen Tayron",
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

function getTodayKey(suffix) {
    const today = new Date();
    return `bingo_${today.getFullYear()}_${today.getMonth()}_${today.getDate()}_${suffix}`;
}

function saveCookie(key, value) {
    document.cookie = `${key}=${encodeURIComponent(value)}; path=/; max-age=86400`;
}

function readCookie(key) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [k, v] = cookie.split("=");
        if (k === key) return decodeURIComponent(v);
    }
    return null;
}

function saveState() {
    saveCookie(getTodayKey("state"), bingoState.join(""));
}

function loadState() {
    const saved = readCookie(getTodayKey("state"));
    if (saved && saved.length === SIZE) {
        return saved.split("").map(Number);
    }
    return null;
}

// 🔁 Zapisuje wybrane indeksy samochodów
function saveCarIndexes() {
    saveCookie(getTodayKey("cars"), selectedCarIndexes.join(","));
}

// 📤 Wczytuje indeksy i zwraca tablicę liczb
function loadCarIndexes() {
    const saved = readCookie(getTodayKey("cars"));
    if (saved) {
        const arr = saved.split(",").map(Number);
        if (arr.length === SIZE && arr.every(i => !isNaN(i) && cars[i])) {
            return arr;
        }
    }
    return null;
}

// 🔄 Losuje unikalne indeksy
function pickRandomCarIndexes() {
    const indexes = [...Array(cars.length).keys()];
    const shuffled = indexes.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, SIZE);
}

// 🔧 Tworzy planszę i listę
function createBoard() {
    // Wczytanie listy samochodów
    const savedIndexes = loadCarIndexes();
    selectedCarIndexes = savedIndexes != null ? savedIndexes : pickRandomCarIndexes();
    if (!savedIndexes) saveCarIndexes();

    // Wczytanie stanu bingo
    const savedState = loadState();
    if (savedState) bingoState = savedState;

    const board = document.getElementById("board");
    const list = document.getElementById("carList");
    board.innerHTML = "";
    list.innerHTML = "";

    for (let i = 0; i < SIZE; i++) {
        const carName = cars[selectedCarIndexes[i]];

        // Plansza
        const cell = document.createElement("div");
        cell.textContent = i + 1;
        cell.classList.add("cell");
        if (bingoState[i] === 1) cell.classList.add("active");
        cell.addEventListener("click", () => toggleCell(i));
        board.appendChild(cell);

        // 👉 Lista
        const li = document.createElement("li");
        li.classList.add("car-item");
        if (bingoState[i] === 1) li.classList.add("active");

        // 🏷️ Tekst/nazwa samochodu
        const nameSpan = document.createElement("span");
        nameSpan.textContent = `${i + 1}. ${carName}`;

        const wrapper = document.createElement("div");
        wrapper.classList.add("img-wrapper");

        // obrazek
        const img = document.createElement("img");
        img.src = getCarImageUrl(carName, 1);
        img.alt = carName;
        img.classList.add("car-img");
        img.dataset.index = "1";

        // strzałki
        const leftArrow = document.createElement("button");
        leftArrow.textContent = "⬅";
        leftArrow.classList.add("img-btn");
        leftArrow.addEventListener("click", (e) => {
            e.stopPropagation();
            changeImageUrl(img, carName, -1);
        });

        const rightArrow = document.createElement("button");
        rightArrow.textContent = "➡";
        rightArrow.classList.add("img-btn");
        rightArrow.addEventListener("click", (e) => {
            e.stopPropagation();
            changeImageUrl(img, carName, 1);
        });

        wrapper.append(leftArrow, img, rightArrow);
        li.append(nameSpan, wrapper);
        li.addEventListener("click", () => toggleCell(i));
        list.appendChild(li);

    }
}

function changeImageUrl(imgElement, carName, direction) {
    let current = parseInt(imgElement.dataset.index, 10);
    const urls = carImagesMap[carName];

    if (!urls) return;

    let next = current + direction;
    if (next < 1) next = urls.length;
    if (next > urls.length) next = 1;

    imgElement.src = urls[next - 1];
    imgElement.dataset.index = next;
}


// ✅ Zmiana zaznaczenia
function toggleCell(index) {
    bingoState[index] = bingoState[index] === 1 ? 0 : 1;
    saveState();

    const boardChildren = document.getElementById("board").children;
    const listChildren = document.getElementById("carList").children;

    boardChildren[index].classList.toggle("active");
    listChildren[index].classList.toggle("active");
}

function getCarImageUrl(carName, index) {
    const urls = carImagesMap[carName];
    if (urls && urls[index - 1]) {
        return urls[index - 1]; // indeksy zaczynają się od 1
    }
    return ""; // placeholder gdy brak zdjęcia
}


document.addEventListener("DOMContentLoaded", () => {


    fetch('car_images.json')
        .then(response => response.json())
        .then(data => {
            carImagesMap = data;
            createBoard(); // dopiero po załadowaniu zdjęć
        })
        .catch(err => {
            console.error("Błąd ładowania zdjęć:", err);
            createBoard(); // fallback
        });
});
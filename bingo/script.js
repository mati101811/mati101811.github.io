const cars = [
    ["Alfa romeo 159", 109],
    ["Alfa romeo Giulia", 242],
    ["Alfa romeo Giulietta", 270],
    ["Alfa romeo Mito", 110],
    ["Alfa romeo Stelvio", 343],
    ["Alfa romeo Tonale", 135],
    ["Audi A1", 326],
    ["Audi A3", 2496],
    ["Audi A4", 3999],
    ["Audi A5", 1679],
    ["Audi A6", 3445],
    ["Audi A7 Sportback", 415],
    ["Audi A8", 444],
    ["Audi Q2", 162],
    ["Audi Q3", 1281],
    ["Audi Q5", 2286],
    ["Audi Q7", 927],
    ["Audi Q8", 331],
    ["Audi S3", 280],
    ["Audi S5", 190],
    ["Audi SQ5", 142],
    ["Audi TT", 203],
    ["BMW 3GT", 207],
    ["BMW M3", 229],
    ["BMW M4", 160],
    ["BMW M5", 141],
    ["BMW Serii 1", 1946],
    ["BMW Serii 2", 844],
    ["BMW Serii 3", 4035],
    ["BMW Serii 4", 779],
    ["BMW Serii 5", 3671],
    ["BMW Serii 6", 196],
    ["BMW Serii 7", 693],
    ["BMW Serii 8", 139],
    ["BMW X1", 1377],
    ["BMW X2", 410],
    ["BMW X3", 2117],
    ["BMW X4", 558],
    ["BMW X5", 1628],
    ["BMW X6", 500],
    ["BMW X7", 225],
    ["BMW Z4", 128],
    ["BYD Seal U", 160],
    ["Chevrolet Aveo", 118],
    ["Chevrolet Camaro", 209],
    ["Chevrolet Captiva", 160],
    ["Chevrolet Corvette", 182],
    ["Chevrolet Cruze", 209],
    ["Chevrolet Orlando", 97],
    ["Chevrolet Spark", 84],
    ["Chevrolet Trax", 65],
    ["Chrysler Pacifica", 522],
    ["Chrysler Voyager", 101],
    ["Citroen Berlingo", 608],
    ["Citroen C1", 132],
    ["Citroen C3", 1231],
    ["Citroen C3 Aircross", 353],
    ["Citroen C3 Picasso", 154],
    ["Citroen C4", 705],
    ["Citroen C4 Cactus", 359],
    ["Citroen C4 Grand Picasso", 333],
    ["Citroen C4 Picasso", 625],
    ["Citroen C4 SpaceTourer", 104],
    ["Citroen C5", 567],
    ["Citroen C5 Aircross", 531],
    ["Citroen DS3", 168],
    ["Citroen DS4", 165],
    ["Citroen DS5", 134],
    ["Cupra Ateca", 138],
    ["Cupra Formentor", 1005],
    ["Cupra Leon", 201],
    ["Cupra Leon Sportstourer", 248],
    ["Cupra Terramar", 311],
    ["Dacia Bigster", 125],
    ["Dacia Dokker", 120],
    ["Dacia Duster", 913],
    ["Dacia Jogger", 180],
    ["Dacia Lodgy", 119],
    ["Dacia Logan", 127],
    ["Dacia Sandero", 375],
    ["Dacia Sandero Stepway", 291],
    ["Dodge Challenger", 316],
    ["Dodge Charger", 196],
    ["Dodge Durango", 333],
    ["Dodge Journey", 91],
    ["Dodge RAM", 158],
    ["DS 4", 115],
    ["DS 7", 287],
    ["Fiat 500", 858],
    ["Fiat 500L", 159],
    ["Fiat 500X", 245],
    ["Fiat 600", 95],
    ["Fiat Bravo", 223],
    ["Fiat Cinquecento", 18],
    ["Fiat Doblo", 218],
    ["Fiat Freemont", 240],
    ["Fiat Grande Punto", 121],
    ["Fiat Panda", 347],
    ["Fiat Punto", 188],
    ["Fiat Punto Evo", 114],
    ["Fiat Sedici", 90],
    ["Fiat Seicento", 40],
    ["Fiat Tipo", 504],
    ["Ford B-MAX", 200],
    ["Ford C-MAX", 716],
    ["Ford EcoSport", 357],
    ["Ford Edge", 378],
    ["Ford Escape", 257],
    ["Ford Explorer", 155],
    ["Ford F150", 135],
    ["Ford Fiesta", 1668],
    ["Ford Focus", 3177],
    ["Ford Focus C-Max", 76],
    ["Ford Fusion", 200],
    ["Ford Galaxy", 394],
    ["Ford Grand C-MAX", 306],
    ["Ford KA", 162],
    ["Ford Kuga", 2487],
    ["Ford Mondeo", 2023],
    ["Ford Mustang", 470],
    ["Ford Puma", 349],
    ["Ford Ranger", 314],
    ["Ford S-Max", 1263],
    ["Ford Tourneo Connect", 197],
    ["Ford Tourneo Courier", 139],
    ["Ford Tourneo Custom", 262],
    ["Ford Transit", 200],
    ["Ford Transit Connect", 138],
    ["Ford Transit Custom", 365],
    ["Honda Accord", 270],
    ["Honda Civic", 990],
    ["Honda CR-V", 713],
    ["Honda HR-V", 224],
    ["Honda Jazz", 249],
    ["Hyundai Bayon", 161],
    ["Hyundai Elantra", 105],
    ["Hyundai i10", 228],
    ["Hyundai i20", 691],
    ["Hyundai i30", 2001],
    ["Hyundai i40", 622],
    ["Hyundai ix20", 279],
    ["Hyundai ix35", 989],
    ["Hyundai Kona", 742],
    ["Hyundai Santa Fe", 293],
    ["Hyundai Tucson", 2739],
    ["Isuzu D-Max", 98],
    ["Jaecoo 7", 204],
    ["Jaguar E-Pace", 133],
    ["Jaguar F-Pace", 275],
    ["Jaguar XE", 142],
    ["Jaguar XF", 219],
    ["Jaguar XJ", 86],
    ["Jeep Avenger", 147],
    ["Jeep Cherokee", 292],
    ["Jeep Compass", 474],
    ["Jeep Grand Cherokee", 983],
    ["Jeep Renegade", 321],
    ["Jeep Wrangler", 536],
    ["Kia Carens", 226],
    ["Kia Ceed", 2097],
    ["Kia Niro", 237],
    ["Kia Optima", 231],
    ["Kia Picanto", 282],
    ["Kia ProCeed", 397],
    ["Kia Rio", 413],
    ["Kia Sorento", 308],
    ["Kia Soul", 141],
    ["Kia Sportage", 3256],
    ["Kia Stinger", 118],
    ["Kia Stonic", 474],
    ["Kia Venga", 323],
    ["Kia XCeed", 624],
    ["Land Rover Defender", 220],
    ["Land Rover Discovery", 232],
    ["Land Rover Discovery Sport", 344],
    ["Land Rover Range Rover", 242],
    ["Land Rover Range Rover Evoque", 420],
    ["Land Rover Range Rover Sport", 367],
    ["Land Rover Range Rover Velar", 279],
    ["Lexus CT", 103],
    ["Lexus ES", 183],
    ["Lexus IS", 144],
    ["Lexus LS", 68],
    ["Lexus NX", 469],
    ["Lexus RX", 434],
    ["Lexus UX", 284],
    ["Maserati Ghibli", 89],
    ["Mazda 2", 262],
    ["Mazda 3", 651],
    ["Mazda 5", 152],
    ["Mazda 6", 791],
    ["Mazda CX-3", 419],
    ["Mazda CX-30", 359],
    ["Mazda CX-5", 780],
    ["Mazda CX-60", 199],
    ["Mazda MX-5", 136],
    ["Mercedes AMG GT", 171],
    ["Mercedes Citan", 98],
    ["Mercedes CL", 121],
    ["Mercedes CLA", 1302],
    ["Mercedes CLE", 130],
    ["Mercedes CLK", 184],
    ["Mercedes CLS", 323],
    ["Mercedes GL", 142],
    ["Mercedes GLA", 674],
    ["Mercedes GLB", 438],
    ["Mercedes GLC", 1645],
    ["Mercedes GLE", 806],
    ["Mercedes GLK", 149],
    ["Mercedes GLS", 204],
    ["Mercedes Klasa A", 1359],
    ["Mercedes Klasa B", 676],
    ["Mercedes Klasa C", 2384],
    ["Mercedes Klasa E", 2276],
    ["Mercedes Klasa G", 262],
    ["Mercedes Klasa S", 919],
    ["Mercedes Klasa V", 425],
    ["Mercedes ML", 268],
    ["Mercedes SL", 347],
    ["Mercedes SLK", 153],
    ["Mercedes Sprinter", 124],
    ["Mercedes Vito", 360],
    ["Mercedes W124 (1984-1993)", 122],
    ["MG HS", 279],
    ["Mini Clubman", 186],
    ["Mini Cooper", 776],
    ["Mini Countryman", 508],
    ["Mini ONE", 245],
    ["Mitsubishi ASX", 507],
    ["Mitsubishi Colt", 108],
    ["Mitsubishi Eclipse Cross", 122],
    ["Mitsubishi Lancer", 161],
    ["Mitsubishi Outlander", 457],
    ["Mitsubishi Pajero", 83],
    ["Mitsubishi Space Star", 152],
    ["Nissan Juke", 885],
    ["Nissan Leaf", 90],
    ["Nissan Micra", 405],
    ["Nissan Note", 211],
    ["Nissan Patrol", 64],
    ["Nissan Qashqai", 2585],
    ["Nissan Qashqai+2", 208],
    ["Nissan X-Trail", 516],
    ["Omoda 5", 189],
    ["Opel Adam", 199],
    ["Opel Antara", 130],
    ["Opel Astra", 4541],
    ["Opel Combo", 236],
    ["Opel Corsa", 1831],
    ["Opel Crossland", 435],
    ["Opel Frontera", 111],
    ["Opel Grandland", 206],
    ["Opel Insignia", 2387],
    ["Opel Meriva", 824],
    ["Opel Mokka", 1941],
    ["Opel Vectra", 214],
    ["Opel Vivaro", 368],
    ["Opel Zafira", 1044],
    ["Peugeot 2008", 1281],
    ["Peugeot 206", 94],
    ["Peugeot 207", 327],
    ["Peugeot 208", 972],
    ["Peugeot 3008", 1778],
    ["Peugeot 307", 167],
    ["Peugeot 308", 1896],
    ["Peugeot 407", 146],
    ["Peugeot 408", 170],
    ["Peugeot 5008", 840],
    ["Peugeot 508", 1066],
    ["Peugeot Partner", 324],
    ["Peugeot Rifter", 141],
    ["Porsche 911", 493],
    ["Porsche Cayenne", 678],
    ["Porsche Macan", 520],
    ["Porsche Panamera", 446],
    ["Porsche Taycan", 74],
    ["RAM 1500", 272],
    ["Renault 5", 45],
    ["Renault Arkana", 354],
    ["Renault Austral", 245],
    ["Renault Captur", 1094],
    ["Renault Clio", 1640],
    ["Renault Espace", 432],
    ["Renault Grand Scenic", 323],
    ["Renault Kadjar", 547],
    ["Renault Kangoo", 227],
    ["Renault Koleos", 255],
    ["Renault Laguna", 421],
    ["Renault Megane", 1958],
    ["Renault Modus", 100],
    ["Renault Scenic", 890],
    ["Renault Symbioz", 116],
    ["Renault Talisman", 288],
    ["Renault Trafic", 675],
    ["Renault Twingo", 204],
    ["Saab 9-3", 93],
    ["Seat Alhamra", 193],
    ["Seat Altea", 290],
    ["Seat Arona", 348],
    ["Seat Ateca", 377],
    ["Seat Exeo", 67],
    ["Seat Ibiza", 867],
    ["Seat Leon", 1560],
    ["Skoda Citigo", 153],
    ["Skoda Fabia", 1349],
    ["Skoda Kamiq", 578],
    ["Skoda Karoq", 557],
    ["Skoda Kodiaq", 935],
    ["Skoda Octavia", 3669],
    ["Skoda RAPID", 324],
    ["Skoda Roomster", 133],
    ["Skoda Scala", 427],
    ["Skoda Superb", 2276],
    ["Skoda Yeti", 180],
    ["Smart Fortwo", 100],
    ["SsangYong Korando", 141],
    ["SsangYong Tivoli", 97],
    ["Subaru Forester", 317],
    ["Subaru Impreza", 119],
    ["Subaru Legacy", 85],
    ["Subaru Outback", 147],
    ["Subaru XV", 111],
    ["Suzuki Grand Vitara", 280],
    ["Suzuki Jimny", 156],
    ["Suzuki Swift", 570],
    ["Suzuki SX4", 278],
    ["Suzuki SX4 S-Cross", 318],
    ["Suzuki Vitara", 540],
    ["Tesla Model 3", 119],
    ["Toyota Auris", 952],
    ["Toyota Avensis", 832],
    ["Toyota Aygo", 367],
    ["Toyota Aygo X", 93],
    ["Toyota C-HR", 1151],
    ["Toyota Camry", 420],
    ["Toyota Corolla", 2468],
    ["Toyota Corolla Verso", 86],
    ["Toyota Highlander", 71],
    ["Toyota Hilux", 166],
    ["Toyota Land Cruiser", 237],
    ["Toyota Prius", 249],
    ["Toyota ProAce", 131],
    ["Toyota Proace City Verso", 312],
    ["Toyota Proace Verso", 284],
    ["Toyota RAV4", 1076],
    ["Toyota Verso", 254],
    ["Toyota Yaris", 1713],
    ["Toyota Yaris Cross", 398],
    ["Volkswagen Amarok", 155],
    ["Volkswagen Arteon", 547],
    ["Volkswagen Beetle", 134],
    ["Volkswagen Caddy", 767],
    ["Volkswagen CC", 148],
    ["Volkswagen Golf", 3429],
    ["Volkswagen Golf Plus", 333],
    ["Volkswagen Golf Sportsvan", 191],
    ["Volkswagen Jetta", 188],
    ["Volkswagen Multivan", 566],
    ["Volkswagen New Beetle", 71],
    ["Volkswagen Passat", 3495],
    ["Volkswagen Polo", 1130],
    ["Volkswagen Scirocco", 179],
    ["Volkswagen Sharan", 318],
    ["Volkswagen T-Cross", 399],
    ["Volkswagen T-Roc", 1021],
    ["Volkswagen Taigo", 197],
    ["Volkswagen Tiguan", 2059],
    ["Volkswagen Tiguan Allspace", 206],
    ["Volkswagen Touareg", 318],
    ["Volkswagen Touran", 1011],
    ["Volkswagen Transporter", 460],
    ["Volkswagen up!", 206],
    ["Volvo C30", 178],
    ["Volvo EX30", 61],
    ["Volvo S40", 116],
    ["Volvo S60", 555],
    ["Volvo S80", 143],
    ["Volvo S90", 202],
    ["Volvo V40", 742],
    ["Volvo V40 Cross Country", 106],
    ["Volvo V50", 281],
    ["Volvo V60", 1044],
    ["Volvo V60 Cross Country", 110],
    ["Volvo V70", 250],
    ["Volvo V90", 264],
    ["Volvo V90 Cross Country", 117],
    ["Volvo XC 40", 757],
    ["Volvo XC 60", 2573],
    ["Volvo XC 70", 123],
    ["Volvo XC 90", 1040]
];

var randomCars = [];
let galleryData = {};
let currentIndexes = [];
let currentBoardSignature = "";
let hasWonForCurrentBoard = false;

function createBingo() {
    const board = document.getElementById("board");
    board.innerHTML = "";

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

function cellCliked(i, goOn, shouldCheckWin = true) {
    const board = document.getElementById("board");
    const cell = board.children[i];
    cell.classList.toggle("clicked");
    console.log("Kliknięto pole o indeksie:", i);
    if (goOn)
        itemClicked(i, false, false);
    saveClickedState(); // 🔥
    if (shouldCheckWin) {
        checkWinAfterMark();
    }
}

function itemClicked(i, goOn, shouldCheckWin = true) {
    const carList = document.getElementById("carList");
    const item = carList.children[i];
    item.classList.toggle("clicked");
    console.log("Kliknięto element o indeksie:", i);
    if (goOn)
        cellCliked(i, false, false);
    saveClickedState(); // 🔥
    if (shouldCheckWin) {
        checkWinAfterMark();
    }
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

function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
}

function drawUniqueIndexes(count, max) {
    const indexes = new Set();
    while (indexes.size < count) {
        indexes.add(Math.floor(Math.random() * max));
    }
    return [...indexes];
}

function drawWeightedIndexes(cars, count) {
    const result = new Set();

    // suma wag
    const total = cars.reduce((sum, car) => sum + car[1], 0);

    while (result.size < count) {
        let rand = Math.floor(Math.random() * total);

        for (let i = 0; i < cars.length; i++) {
            rand -= cars[i][1];
            if (rand < 0) {
                result.add(i);
                break;
            }
        }
    }

    return [...result];
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

function getTodayWinKey() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `won-${yyyy}-${mm}-${dd}`;
}

function initializeWinState(forceReset = false) {
    currentBoardSignature = currentIndexes.join(",");
    const winKey = getTodayWinKey();

    if (forceReset) {
        hasWonForCurrentBoard = false;
        deleteCookie(winKey);
        return;
    }

    hasWonForCurrentBoard = getCookie(winKey) === currentBoardSignature;
}

function hasFiveInLine() {
    const board = document.getElementById("board");
    if (!board || board.children.length !== 25) return false;

    const clicked = Array.from(board.children).map(cell => cell.classList.contains("clicked"));

    for (let row = 0; row < 5; row++) {
        let rowComplete = true;
        for (let col = 0; col < 5; col++) {
            if (!clicked[row * 5 + col]) {
                rowComplete = false;
                break;
            }
        }
        if (rowComplete) return true;
    }

    for (let col = 0; col < 5; col++) {
        let colComplete = true;
        for (let row = 0; row < 5; row++) {
            if (!clicked[row * 5 + col]) {
                colComplete = false;
                break;
            }
        }
        if (colComplete) return true;
    }

    let leftDiagonal = true;
    for (let i = 0; i < 5; i++) {
        if (!clicked[i * 5 + i]) {
            leftDiagonal = false;
            break;
        }
    }
    if (leftDiagonal) return true;

    let rightDiagonal = true;
    for (let i = 0; i < 5; i++) {
        if (!clicked[i * 5 + (4 - i)]) {
            rightDiagonal = false;
            break;
        }
    }

    return rightDiagonal;
}

function ensureWinModal() {
    let modal = document.getElementById("winModal");
    if (modal) return modal;

    modal = document.createElement("div");
    modal.id = "winModal";
    modal.className = "win-modal";
    modal.innerHTML = `
        <div class="win-modal-content">
            <h2>Bingo!</h2>
            <p>Masz 5 w linii. Gratulacje!</p>
            <button id="winModalCloseButton" class="action-button">OK</button>
        </div>
    `;

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("visible");
        }
    });

    document.body.appendChild(modal);

    const closeButton = document.getElementById("winModalCloseButton");
    if (closeButton) {
        closeButton.addEventListener("click", () => {
            modal.classList.remove("visible");
        });
    }

    return modal;
}

function showWinModal() {
    const modal = ensureWinModal();
    modal.classList.add("visible");
}

function checkWinAfterMark() {
    if (hasWonForCurrentBoard) return;
    if (!hasFiveInLine()) return;

    hasWonForCurrentBoard = true;
    setCookie(getTodayWinKey(), currentBoardSignature, 7);
    showWinModal();
}

function parseSharedIndexesFromUrl() {
    const rawQuery = window.location.search.slice(1);
    if (!rawQuery) return null;

    const decoded = decodeURIComponent(rawQuery);
    const payload = decoded.startsWith("i=") ? decoded.slice(2) : decoded;
    const parts = payload.split(",").map(part => part.trim()).filter(Boolean);

    if (parts.length !== 25) return null;

    const indexes = parts.map(value => Number(value));
    const validNumbers = indexes.every(index => Number.isInteger(index) && index >= 0 && index < cars.length);
    const uniqueIndexes = new Set(indexes).size === 25;

    if (!validNumbers || !uniqueIndexes) return null;
    return indexes;
}

function areSameIndexes(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) return false;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
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
            itemClicked(i, true, false);
        }
    }

    console.log("Wczytano kliknięcia:", state);
}


function createList() {
    const carList = document.getElementById("carList");
    carList.innerHTML = "";
    const cookieKey = getTodayKey();
    const clickKey = getTodayClickKey();
    let indexes;
    const sharedIndexes = parseSharedIndexesFromUrl();

    const saved = getCookie(cookieKey);
    if (sharedIndexes) {
        let savedIndexes = null;
        if (saved) {
            try {
                savedIndexes = JSON.parse(saved);
            } catch (error) {
                console.warn("Niepoprawne dane listy w cookies, nadpisuję z linku.", error);
            }
        }

        indexes = sharedIndexes;
        setCookie(cookieKey, JSON.stringify(sharedIndexes), 7);

        if (!savedIndexes || !areSameIndexes(savedIndexes, sharedIndexes)) {
            setCookie(clickKey, "0".repeat(25), 7);
            console.log("Link udostępniony różni się od cookies. Zresetowano zaznaczenia.");
        }

        console.log("Wczytano listę z linku udostępniania:", indexes);
    } else if (saved) {
        try {
            indexes = JSON.parse(saved);
            console.log("Wczytano listę z cookies:", indexes);
        } catch (error) {
            console.warn("Niepoprawne dane listy w cookies, losuję nową listę.", error);
            indexes = drawWeightedIndexes(cars, 25);
            setCookie(cookieKey, JSON.stringify(indexes), 7);
            setCookie(clickKey, "0".repeat(25), 7);
        }
    } else {
        // delete cookies
        document.cookie.split(";").forEach(c => {
            document.cookie = c.split("=")[0].trim() + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        });


        indexes = drawWeightedIndexes(cars, 25);
        setCookie(cookieKey, JSON.stringify(indexes), 7); // 7 dni ważności
        setCookie(clickKey, "0".repeat(25), 7);

        console.log("Wylosowano nową listę:", indexes);
    }

    currentIndexes = indexes.slice();
    initializeWinState(Boolean(sharedIndexes));

    for (let i = 0; i < 25; i++) {
        const carIndex = indexes[i];
        const carName = cars[carIndex][0];

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

    const carEntry = galleryData[carName];
    if (!carEntry || typeof carEntry !== "object") {
        container.innerHTML = "<p>Brak zdjęć dla tego samochodu.</p>";
        return;
    }

    // Iterujemy po wszystkich kluczach, np. "zdjęcia", "GTAm", "radiowóz" itd.
    Object.entries(carEntry).forEach(([categoryName, images]) => {
        if (!Array.isArray(images)) return; // pomiń jeśli to nie tablica zdjęć

        const section = document.createElement("div");
        section.classList.add("gallery-section");

        // Nagłówek kategorii
        const heading = document.createElement("h4");
        heading.textContent = categoryName;
        section.appendChild(heading);

        const gallery = document.createElement("div");
        gallery.classList.add("gallery");

        images.forEach(({ link, opis }) => {
            const cell = document.createElement("div");
            cell.classList.add("gallery-item");

            const img = document.createElement("img");
            img.src = link;
            img.alt = opis || "Brak opisu";

            const caption = document.createElement("p");
            caption.textContent = opis || "Brak opisu";

            cell.appendChild(img);
            cell.appendChild(caption);
            gallery.appendChild(cell);
        });

        section.appendChild(gallery);
        container.appendChild(section);
    });
}


function openItem(item, i) {
    item.classList.toggle("clicked");
    console.log("Kliknięto element o indeksie:", i);
}

function showToast(message) {
    let toast = document.getElementById("shareToast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "shareToast";
        toast.style.position = "fixed";
        toast.style.left = "50%";
        toast.style.bottom = "24px";
        toast.style.transform = "translateX(-50%)";
        toast.style.backgroundColor = "rgba(20, 20, 20, 0.92)";
        toast.style.color = "#fff";
        toast.style.padding = "10px 14px";
        toast.style.borderRadius = "8px";
        toast.style.fontSize = "14px";
        toast.style.zIndex = "9999";
        toast.style.pointerEvents = "none";
        toast.style.opacity = "0";
        toast.style.transition = "opacity 0.2s ease";
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = "1";

    clearTimeout(showToast.hideTimer);
    clearTimeout(showToast.removeTimer);
    showToast.hideTimer = setTimeout(() => {
        toast.style.opacity = "0";
        showToast.removeTimer = setTimeout(() => {
            const currentToast = document.getElementById("shareToast");
            if (currentToast) {
                currentToast.remove();
            }
        }, 220);
    }, 1500);
}

function udostepnijBingo() {
    const indexes = currentIndexes.length === 25 ? currentIndexes : parseSharedIndexesFromUrl();
    if (!indexes || indexes.length !== 25) {
        console.warn("Brak poprawnej listy 25 indeksów do udostępnienia.");
        showToast("Brak poprawnej listy do udostępnienia.");
        return;
    }

    const shareUrl = `https://mati101811.github.io/bingo/index.html?${indexes.join(",")}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(shareUrl)
            .then(() => {
                console.log("Skopiowano link do schowka:", shareUrl);
                showToast("Skopiowano link do schowka.");
            })
            .catch(err => {
                console.error("Nie udało się skopiować linku:", err);
                showToast("Nie udało się skopiować linku.");
            });
        return;
    }

    console.log("Clipboard API niedostępne. Link:", shareUrl);
    showToast("Schowek niedostępny w tej przeglądarce.");
}

function wylosujBingo() {
    const cookieKey = getTodayKey();
    const clickKey = getTodayClickKey();
    const winKey = getTodayWinKey();
    const indexes = drawWeightedIndexes(cars, 25);

    // Nadpisz dzisiejsze cookies nową listą i wyzerowanym stanem zaznaczeń
    setCookie(cookieKey, JSON.stringify(indexes), 7);
    setCookie(clickKey, "0".repeat(25), 7);
    deleteCookie(winKey);
    currentIndexes = indexes.slice();
    hasWonForCurrentBoard = false;

    // Zaktualizuj URL bez przeładowania, aby link był gotowy do udostępnienia
    window.history.replaceState(null, "", `${window.location.pathname}?${indexes.join(",")}`);

    // Przerysuj planszę i listę na bazie nowej puli indeksów
    createBingo();
    showToast("Wylosowano nową planszę.");
}


document.addEventListener("DOMContentLoaded", () => {

    fetch("gallery_nested.json")
        .then(res => res.json())
        .then(data => {
            galleryData = data;
            console.log("Załadowano dane galerii", galleryData);
        })
        .catch(err => {
            console.error("Błąd ładowania galerii:", err);
        });

    const shareButton = document.getElementById("shareButton");
    const drawButton = document.getElementById("drawButton");
    if (shareButton) { shareButton.addEventListener("click", udostepnijBingo); }
    if (drawButton) { drawButton.addEventListener("click", wylosujBingo); }

    createBingo();
});
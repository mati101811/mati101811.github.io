let words = [];

let current = null;

let typed = "";

const hintNames = [
    "Brak podpowiedzi",
    "Rodzajnik",
    "Znaki",
    "Rodzajnik + znaki"
];

let hintMode = 0;

const polish = document.getElementById("polishWord");
const typedDiv = document.getElementById("typedText");
const hint = document.getElementById("hintMode");

hint.onclick = () => {

    hintMode++;

    hintMode %= 4;

    hint.innerText = hintNames[hintMode];

    if (current)
        showWord();

};

document.getElementById("csvFile").onchange = e => {

    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {

        parseCSV(reader.result);

        nextWord();

    };

    reader.readAsText(file);

};

function parseCSV(text) {

    words = [];

    const lines = text.split(/\r?\n/);

    for (let l of lines) {

        if (!l.trim()) continue;

        const p = l.split(",");

        if (p.length < 3) continue;

        words.push({

            pl: p[0].trim(),

            art: p[1].trim(),

            fr: p[2].trim()

        });

    }

}

function nextWord() {

    typed = "";

    current = words[Math.floor(Math.random() * words.length)];

    showWord();

    drawTyped();

}

function getExpected() {

    if (hintMode == 1 || hintMode == 3)

        return current.fr;

    return (current.art ? current.art + " " : "") + current.fr;

}

function showWord() {

    let txt = current.pl;

    if (hintMode >= 2) {

        const chars = [];

        for (let c of current.fr) {

            if ("abcdefghijklmnopqrstuvwxyz".includes(c.toLowerCase())) continue;

            chars.push(c);

        }

        if (chars.length)

            txt += " (" + chars.join("") + ")";

    }

    polish.innerText = txt;

}

function drawTyped() {

    const expected = getExpected();

    let html = "";

    for (let i = 0; i < typed.length; i++) {

        const ch = typed[i];

        let shown = ch == " " ? "_" : ch;

        let cls = "wrong";

        if (i < expected.length && ch == expected[i])

            cls = (ch == " " ? "space" : "correct");

        html += `<span class="${cls}">${shown}</span>`;

    }

    typedDiv.innerHTML = html;

    if (typed === expected)

        nextWord();

}

function press(ch) {

    typed += ch;

    drawTyped();

}

function backspace() {

    typed = typed.slice(0, -1);

    drawTyped();

}

const rows = [

    "1234567890",

    "qwertyuiop",

    "asdfghjkl",

    "zxcvbnm",

    "àâçèêéîôùû'"

];

const keyboard = document.getElementById("keyboard");

for (let r of rows) {

    const div = document.createElement("div");

    div.className = "row";

    for (let c of r) {

        const k = document.createElement("div");

        k.className = "key";

        k.innerText = c;

        k.onclick = () => press(c);

        div.appendChild(k);

    }

    keyboard.appendChild(div);

}

const last = document.createElement("div");

last.className = "row";

last.innerHTML = `
<div class="key big" id="space">SPACJA</div>
<div class="key" id="back">⌫</div>
`;

keyboard.appendChild(last);

document.getElementById("space").onclick = () => press(" ");
document.getElementById("back").onclick = backspace;
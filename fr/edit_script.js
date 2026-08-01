// ===============================
// Dane
// ===============================

let words = [];

const fileInput = document.getElementById("fileInput");
const exportButton = document.getElementById("exportButton");
const tableBody = document.getElementById("tableBody");
const stats = document.getElementById("stats");


// ===============================
// Wczytywanie CSV
// ===============================

fileInput.addEventListener("change", loadCSV);

function loadCSV(event) {

    const file = event.target.files[0];

    if (!file)
        return;

    const reader = new FileReader();

    reader.onload = function () {

        parseCSV(reader.result);

        renderTable();
        checkDuplicates();

    };

    reader.readAsText(file, "UTF-8");

}


// ===============================
// Parser CSV
// ===============================

function parseCSV(text) {

    words = [];

    const lines = text.split(/\r?\n/);

    for (const line of lines) {

        if (line.trim() === "")
            continue;

        const cols = line.split(",");

        if (cols.length < 3)
            continue;

        words.push({

            polish: cols[0].trim(),

            article: cols[1].trim(),

            french: cols[2].trim()

        });

    }

}


// ===============================
// Renderowanie tabeli
// ===============================

function renderTable() {

    tableBody.innerHTML = "";

    words.forEach((word, index) => {

        const row = document.createElement("tr");

        row.dataset.index = index;

        row.innerHTML = `

            <td>${escapeHTML(word.polish)}</td>

            <td>${escapeHTML(word.article)}</td>

            <td>${escapeHTML(word.french)}</td>

            <td>

                <button
                    class="deleteButton"
                    data-index="${index}">
                    ❌
                </button>

            </td>

        `;

        tableBody.appendChild(row);

    });

    updateStats();

}


// ===============================
// Licznik rekordów
// ===============================

function updateStats() {

    stats.textContent = "Liczba słów: " + words.length;

}


// ===============================
// Eksport CSV
// ===============================

exportButton.addEventListener("click", exportCSV);

function exportCSV() {

    let csv = "";

    for (const word of words) {

        csv +=
            word.polish + "," +
            word.article + "," +
            word.french + "\n";

    }

    const blob = new Blob(

        [csv],

        {
            type: "text/csv;charset=utf-8;"
        }

    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "slowa.csv";

    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);

}


// ===============================
// Escape HTML
// ===============================

function escapeHTML(text) {

    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");

}

// ===============================
// Formularz dodawania
// ===============================

const newPolish = document.getElementById("newPolish");
const newArticle = document.getElementById("newArticle");
const newFrench = document.getElementById("newFrench");
const addButton = document.getElementById("addButton");


// ===============================
// Dodawanie nowego słowa
// ===============================

addButton.addEventListener("click", addWord);

newFrench.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        e.preventDefault();

        addWord();

    }

});

function addWord() {

    const polish = newPolish.value.trim();
    const article = newArticle.value.trim();
    const french = newFrench.value.trim();

    if (polish === "" || french === "")
        return;

    words.push({

        polish: polish,

        article: article,

        french: french

    });

    clearInputs();

    renderTable();
    checkDuplicates();

    newPolish.focus();

}


// ===============================
// Czyszczenie formularza
// ===============================

function clearInputs() {

    newPolish.value = "";
    newArticle.value = "";
    newFrench.value = "";

}


// ===============================
// Usuwanie rekordów
// ===============================

tableBody.addEventListener("click", function (event) {

    const button = event.target.closest(".deleteButton");

    if (button == null)
        return;

    const index = Number(button.dataset.index);

    if (isNaN(index))
        return;

    removeWord(index);

});

function removeWord(index) {

    words.splice(index, 1);

    renderTable();
    checkDuplicates();

}


// ===============================
// Obsługa klawisza Enter
// ===============================

newPolish.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        e.preventDefault();

        newArticle.focus();

    }

});

newArticle.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        e.preventDefault();

        newFrench.focus();

    }

});


// ===============================
// Pierwsze odświeżenie
// ===============================

renderTable();

// ===============================
// Duplikaty
// ===============================

const duplicateBox = document.getElementById("duplicateBox");
const duplicateContent = document.getElementById("duplicateContent");
const closeDuplicate = document.getElementById("closeDuplicate");

closeDuplicate.addEventListener("click", function () {

    duplicateBox.classList.add("hidden");

});


// ===============================
// Normalizacja tekstu
// ===============================

function normalize(text) {

    return text
        .trim()
        .toLowerCase();

}


// ===============================
// Wyszukiwanie duplikatów
// ===============================

function checkDuplicates() {

    // usuń stare podświetlenia

    document
        .querySelectorAll(".duplicate")
        .forEach(e => e.classList.remove("duplicate"));

    duplicateContent.innerHTML = "";

    let found = false;

    for (let i = 0; i < words.length; i++) {

        for (let j = i + 1; j < words.length; j++) {

            const pl1 = normalize(words[i].polish);
            const pl2 = normalize(words[j].polish);

            const fr1 = normalize(words[i].french);
            const fr2 = normalize(words[j].french);

            if (pl1 === pl2 || fr1 === fr2) {

                found = true;

                const row1 = tableBody.children[i];
                const row2 = tableBody.children[j];

                row1.classList.add("duplicate");
                row2.classList.add("duplicate");

                duplicateContent.innerHTML += `

                <table>

                <tr>

                    <th>Polski</th>
                    <th>Rodzajnik</th>
                    <th>Francuski</th>

                </tr>

                <tr>

                    <td>${escapeHTML(words[i].polish)}</td>
                    <td>${escapeHTML(words[i].article)}</td>
                    <td>${escapeHTML(words[i].french)}</td>

                </tr>

                <tr>

                    <td>${escapeHTML(words[j].polish)}</td>
                    <td>${escapeHTML(words[j].article)}</td>
                    <td>${escapeHTML(words[j].french)}</td>

                </tr>

                </table>

                <hr>

                `;

            }

        }

    }

    if (found) {

        duplicateBox.classList.remove("hidden");

    } else {

        duplicateBox.classList.add("hidden");

    }

}
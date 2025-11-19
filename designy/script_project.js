function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/; max-age=31536000`;
}


function showDesign(index) {
    // update cookie
    const cookieName = "tileStates";
    let states = getCookie(cookieName);
    const arr = states.split("");
    arr[index] = "1";
    states = arr.join("");
    setCookie(cookieName, states);

    // go to design<index>/index.html
    window.location.href = `designy/design.html?project_id=${projectId}&design_id=${index}`;
}

var projectId;

document.addEventListener("DOMContentLoaded", () => {

    // Pobranie id z linku (projekt.html?id=1)
    const params = new URLSearchParams(window.location.search);
    projectId = params.get("id");

    if (!projectId) {
        console.error("Brak parametru id w URL.");
        return;
    }



    const container = document.getElementById("styles-container");
    var index = 0;


    fetch("data_projects.json")
        .then(response => response.json())
        .then(data => {
            // znajdź projekt o podanym ID
            const project = data.projects[projectId];

            if (!project) {
                console.error("Nie znaleziono projektu o ID:", projectId);
                return;
            }

            const cookieName = "tileStates";
            let states = getCookie(cookieName);

            // Jeśli brak ciasteczka → ustawiamy domyślne "0000"
            if (!states) {
                let designsCount = project.designs.length;
                for (let i = 0; i < designsCount; i++) {
                    states += "0";
                }
                setCookie(cookieName, states);
            }

            const arr = states.split("");   // np. "0101" → ["0","1","0","1"]

            const title = document.getElementById("title");
            const subtitle = document.getElementById("subtitle");
            const hero = document.getElementById("hero-project");

            title.textContent = project.title;
            subtitle.textContent = project.description;
            // hero:after display none
            hero.style.backgroundImage = `url('images/project_${projectId}_hero.jpg')`;

            // generowanie styli
            project.styles.forEach(style => {
                const tile = document.createElement("div");
                tile.className = "tile";
                console.log(style.id);
                tile.onclick = () => showDesign(style.id);

                const img = document.createElement("img");
                var src = 'images/project_' + projectId + '_design_' + style.id + '_hero.jpg';
                if (arr[index] == "1") img.src = src;
                else img.src = "./images/question.png";
                img.alt = style.title;

                const title = document.createElement("span");
                title.className = "tile-title";
                title.textContent = style.title;

                const subtitle = document.createElement("span");
                subtitle.className = "tile-subtitle";
                subtitle.textContent = style.description;

                tile.appendChild(img);
                tile.appendChild(title);
                tile.appendChild(subtitle);

                container.appendChild(tile);
            });
        })
        .catch(err => console.error("Błąd wczytywania danych:", err));



});



function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/; max-age=31536000`;
}


function showDesign(index) {
    
    window.location.href = `design.html?project_id=${projectId}&design_id=${index}`;
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

            const title = document.getElementById("title");
            const subtitle = document.getElementById("subtitle");
            const hero = document.getElementById("hero-project");

            title.textContent = project.title;
            // browser card title
            document.title = project.title;
            subtitle.textContent = project.description;
            // hero:after display none
            hero.style.backgroundImage = `url('images/project_${projectId}_hero.jpg')`;

            // generowanie styli
            project.styles.forEach(style => {
                const tile = document.createElement("div");
                tile.className = "tile";
                console.log(style.id);
                tile.onclick = () => showDesign(style.id);

                var src = 'images/project_' + projectId + '_design_' + style.id + '_hero.jpg';

                tile.style.backgroundImage = `url('${src}')`;

                const title = document.createElement("span");
                title.className = "tile-title";
                title.textContent = style.title;

                const subtitle = document.createElement("span");
                subtitle.className = "tile-subtitle";
                subtitle.textContent = style.description;

                const text = document.createElement("div");

                text.appendChild(title);
                text.appendChild(subtitle);

                tile.appendChild(text);

                container.appendChild(tile);
            });
        })
        .catch(err => console.error("Błąd wczytywania danych:", err));



});

function showDesign(index) {
    // go to design<index>/index.html
    window.location.href = `project.html?id=${index}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("projects-container");

    fetch("data_projects.json")
        .then(response => response.json())
        .then(data => {
            data.projects.forEach(project => {
                const tile = document.createElement("div");
                tile.className = "tile";
                tile.onclick = () => showDesign(project.id);

                const img = document.createElement("img");
                img.src = 'images/project_' + project.id + '_hero.jpg';
                img.alt = project.title;

                tile.style.backgroundImage = `url('images/project_${project.id}_hero.jpg')`;

                const text = document.createElement("div");

                const title = document.createElement("span");
                title.className = "tile-title";
                title.textContent = project.title;

                const subtitle = document.createElement("span");
                subtitle.className = "tile-subtitle";
                subtitle.textContent = project.description;

                text.appendChild(title);
                text.appendChild(subtitle);

                tile.appendChild(img);
                tile.appendChild(text);

                container.appendChild(tile);

            });
        })
        .catch(err => console.error("Błąd wczytywania danych:", err));
});
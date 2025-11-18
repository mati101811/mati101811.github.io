var projectId;
var designId;

document.addEventListener("DOMContentLoaded", () => {

    // Pobranie id z linku (projekt.html?id=1)
    const params = new URLSearchParams(window.location.search);
    projectId = params.get("project_id");
    designId = params.get("design_id");

    if (!projectId || !designId) {
        console.error("Brak parametru w URL.");
        return;
    }

});
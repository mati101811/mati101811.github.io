async function loadProducts() {
  try {
    const res = await fetch("../data/prices.json"); // ścieżka względna do katalogu data/
    const data = await res.json();

    const list = document.getElementById("product-list");
    list.innerHTML = "";

    data.products.forEach(p => {
      const li = document.createElement("li");
      li.className = "product-item";

      li.innerHTML = `
        <div class="product-images">
          <img src="${p.image}" alt="${p.name}" class="product-main">
          <img src="${p.storeLogo}" alt="Logo sklepu" class="product-logo">
        </div>
        <div class="product-info">
          <h2>${p.name}</h2>
          <div class="prices">
            <div class="price-default">${p.defaultPrice} zł</div>
            <div class="price-current ${p.currentPrice < p.defaultPrice ? 'price-lower' : ''}">
              ${p.currentPrice} zł
            </div>
          </div>
          ${p.currentPrice < p.defaultPrice ? `<div class="alert">Cena spadła!</div>` : ""}
        </div>
        <div class="product-actions">
          <a href="${p.link}" target="_blank">Otwórz w sklepie</a>
        </div>
      `;

      list.appendChild(li);
    });

    // ostatnia aktualizacja
    const updated = document.getElementById("last-updated");
    updated.textContent = new Date(data.lastUpdated).toLocaleString("pl-PL");
  } catch (err) {
    console.error("Błąd wczytywania produktów:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadProducts);

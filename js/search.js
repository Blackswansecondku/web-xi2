function searchProfiles() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const cardContainer = document.getElementById("cardContainer");
    const cobaElement = document.getElementById("coba");
  
    // Clear previous results
    cardContainer.innerHTML = "";
  
    let hasResult = false;
  
    // Cari di data JSON
    const filteredData = searchInput === "" 
      ? data 
      : data.filter((item) => 
          item.name.toLowerCase().includes(searchInput) || 
          (item.suratno && item.suratno.toLowerCase().includes(searchInput))
        );
  
    if (filteredData.length > 0) {
      hasResult = true;
      filteredData.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card";
        card.setAttribute("data-bs-toggle", "modal");
        card.setAttribute("data-bs-target", "#dynamicModal");
        card.addEventListener("click", () => {
          modalTitle.textContent = `About ${item.name}`;
          modalImage.src = item.img;
          modalName.textContent = item.name;
          modalMotto.textContent = `Motto Hidup: ${item.motto}`;
          modalNIS.textContent = `NIS: ${item.nis}`;
          modalAbsen.textContent = `Absen: ${item.absen}`;
          modalOrganisasi.textContent = `Organisasi Yang Diikuti: ${item.organisasi}`;
          modalPrestasi.textContent = `Prestasi Yang Dicapai: ${item.prestasi}`;
        });
  
        card.innerHTML = `
          <div class="imbBx">
            <img src="${item.img}" alt="${item.name}" />
          </div>
          <div class="content">
            <div class="contentBx">
              <h3>${item.name}</h3>
            </div>
          </div>
        `;
  
        cardContainer.appendChild(card);
      });
    }
  
    // Periksa elemen coba
    if (searchInput === "" || cobaElement.textContent.toLowerCase().includes(searchInput)) {
      hasResult = true;
      cobaElement.style.display = "flex";
    } else {
      cobaElement.style.display = "none";
    }
  
    if (!hasResult) {
      cardContainer.innerHTML = '<p class="text-center">Profil tidak ditemukan.</p>';
    }
  }
  
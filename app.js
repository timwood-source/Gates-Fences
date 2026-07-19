(() => {
  const campusDialog = document.getElementById("campusDialog");
  const campusContent = document.getElementById("campusDialogContent");
  const policyDialog = document.getElementById("policyDialog");
  const data = window.PHS_VISITOR_DATA;

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);

  function openCampus(key) {
    const campus = data[key];
    if (!campus) return;

    campusContent.innerHTML = `
      <img class="dialog-campus-image" src="${escapeHtml(campus.image)}" alt="${escapeHtml(campus.imageAlt)}">
      <div class="dialog-campus-content">
        <p class="kicker">${escapeHtml(campus.subtitle)}</p>
        <h2>${escapeHtml(campus.heading)}</h2>
        <p class="dialog-intro">${escapeHtml(campus.intro)}</p>
        <div class="entrance-list">
          ${campus.entrances.map((entrance) => `
            <article><span aria-hidden="true">✓</span><div><strong>${escapeHtml(entrance.name)}</strong><p>${escapeHtml(entrance.note)}</p></div></article>
          `).join("")}
        </div>
        <div class="arrival-address"><span>Use this address</span><strong>${escapeHtml(campus.address)}</strong></div>
        <div class="dialog-actions">
          <a class="button primary" href="${escapeHtml(campus.directions)}" target="_blank" rel="noopener noreferrer">Open directions</a>
          <a class="button outline" href="${escapeHtml(campus.phoneHref)}">Call ${escapeHtml(campus.phoneLabel)}</a>
        </div>
        <p class="security-note">Entrance procedures may change for special events or temporary conditions. Follow posted signs and direct instructions from Security.</p>
      </div>`;
    campusDialog.showModal();
  }

  document.querySelectorAll("[data-campus]").forEach((button) => {
    button.addEventListener("click", () => openCampus(button.dataset.campus));
  });

  document.querySelectorAll("[data-open-policy]").forEach((button) => {
    button.addEventListener("click", () => policyDialog.showModal());
  });

  document.querySelector("[data-close-dialog]").addEventListener("click", () => campusDialog.close());
  document.querySelector("[data-close-policy]").addEventListener("click", () => policyDialog.close());

  [campusDialog, policyDialog].forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
})();

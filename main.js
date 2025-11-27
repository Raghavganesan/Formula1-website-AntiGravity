// Manual Data for 2025 Season
const MANUAL_DRIVERS = [
  // McLaren
  { driver_number: 4, first_name: "Lando", last_name: "Norris", name_acronym: "NOR", team_name: "McLaren", team_colour: "F58020", headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/1col/image.png" },
  { driver_number: 81, first_name: "Oscar", last_name: "Piastri", name_acronym: "PIA", team_name: "McLaren", team_colour: "F58020", headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/1col/image.png" },

  // Mercedes
  { driver_number: 63, first_name: "George", last_name: "Russell", name_acronym: "RUS", team_name: "Mercedes", team_colour: "6CD3BF", headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/1col/image.png" },
  { driver_number: 12, first_name: "Andrea Kimi", last_name: "Antonelli", name_acronym: "ANT", team_name: "Mercedes", team_colour: "6CD3BF", headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/driver_fallback_image.png" },

  // Red Bull
  { driver_number: 1, first_name: "Max", last_name: "Verstappen", name_acronym: "VER", team_name: "Red Bull Racing", team_colour: "3671C6", headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png" },
  { driver_number: 22, first_name: "Yuki", last_name: "Tsunoda", name_acronym: "TSU", team_name: "Red Bull Racing", team_colour: "3671C6", headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/1col/image.png" },

  // Ferrari
  { driver_number: 16, first_name: "Charles", last_name: "Leclerc", name_acronym: "LEC", team_name: "Ferrari", team_colour: "F91536", headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/1col/image.png" },
  { driver_number: 44, first_name: "Lewis", last_name: "Hamilton", name_acronym: "HAM", team_name: "Ferrari", team_colour: "F91536", headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/1col/image.png" },

  // Williams
  { driver_number: 23, first_name: "Alexander", last_name: "Albon", name_acronym: "ALB", team_name: "Williams", team_colour: "37BEDD", headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/1col/image.png" },
  { driver_number: 55, first_name: "Carlos", last_name: "Sainz", name_acronym: "SAI", team_name: "Williams", team_colour: "37BEDD", headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/1col/image.png" },

  // Racing Bulls
  { driver_number: 30, first_name: "Liam", last_name: "Lawson", name_acronym: "LAW", team_name: "Racing Bulls", team_colour: "5E8FAA", headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png.transform/1col/image.png" },
  { driver_number: 6, first_name: "Isack", last_name: "Hadjar", name_acronym: "HAD", team_name: "Racing Bulls", team_colour: "5E8FAA", headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/driver_fallback_image.png" },

  // Haas
  { driver_number: 31, first_name: "Esteban", last_name: "Ocon", name_acronym: "OCO", team_name: "Haas F1 Team", team_colour: "B6BABD", headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/1col/image.png" },
  { driver_number: 87, first_name: "Oliver", last_name: "Bearman", name_acronym: "BEA", team_name: "Haas F1 Team", team_colour: "B6BABD", headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/driver_fallback_image.png" },

  // Aston Martin
  { driver_number: 14, first_name: "Fernando", last_name: "Alonso", name_acronym: "ALO", team_name: "Aston Martin", team_colour: "358C75", headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/1col/image.png" },
  { driver_number: 18, first_name: "Lance", last_name: "Stroll", name_acronym: "STR", team_name: "Aston Martin", team_colour: "358C75", headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/1col/image.png" },

  // Kick Sauber
  { driver_number: 27, first_name: "Nico", last_name: "Hulkenberg", name_acronym: "HUL", team_name: "Kick Sauber", team_colour: "52E252", headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/1col/image.png" },
  { driver_number: 5, first_name: "Gabriel", last_name: "Bortoleto", name_acronym: "BOR", team_name: "Kick Sauber", team_colour: "52E252", headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/driver_fallback_image.png" },

  // Alpine
  { driver_number: 10, first_name: "Pierre", last_name: "Gasly", name_acronym: "GAS", team_name: "Alpine", team_colour: "2293D1", headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/1col/image.png" },
  { driver_number: 61, first_name: "Jack", last_name: "Doohan", name_acronym: "DOO", team_name: "Alpine", team_colour: "2293D1", headshot_url: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/driver_fallback_image.png" }
];

// Mapping for team logos (using local assets where available)
const TEAM_IMAGES = {
  "Red Bull Racing": "./assets/redbull.png",
  "Ferrari": "./assets/ferrari.png",
  "Mercedes": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg",
  "Alpine": "https://upload.wikimedia.org/wikipedia/fr/b/b7/Alpine_F1_Team_2021_Logo.svg",
  "McLaren": "https://upload.wikimedia.org/wikipedia/en/6/66/McLaren_Racing_logo.svg",
  "Kick Sauber": "./assets/kick_sauber.png",
  "Aston Martin": "./assets/aston_martin.png",
  "Haas F1 Team": "./assets/haas.png",
  "Racing Bulls": "./assets/racing_bulls.png",
  "Williams": "./assets/williams.png"
};

const DEFAULT_IMAGE = "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/driver_fallback_image.png";

async function fetchConstructors() {
  await new Promise(resolve => setTimeout(resolve, 300));

  // Extract unique teams from drivers
  const teamsMap = new Map();
  MANUAL_DRIVERS.forEach(d => {
    if (!teamsMap.has(d.team_name)) {
      teamsMap.set(d.team_name, {
        name: d.team_name,
        color: d.team_colour,
        image: TEAM_IMAGES[d.team_name] || DEFAULT_IMAGE
      });
    }
  });

  return Array.from(teamsMap.values());
}

async function fetchDrivers() {
  await new Promise(resolve => setTimeout(resolve, 300));
  return MANUAL_DRIVERS;
}

document.addEventListener('DOMContentLoaded', () => {
  const exploreBtn = document.getElementById('explore-btn');
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const exploreSection = document.getElementById('explore');
  const modalOverlay = document.getElementById('modal-overlay');
  const closeModalBtn = document.getElementById('close-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  // Scroll to Explore Section
  function scrollToExplore() {
    exploreSection.scrollIntoView({ behavior: 'smooth' });
  }

  if (scrollIndicator) {
    scrollIndicator.style.cursor = 'pointer';
    scrollIndicator.addEventListener('click', scrollToExplore);
  }

  // Modal Logic
  function openModal(title, contentHTML) {
    modalTitle.textContent = title;
    modalBody.innerHTML = contentHTML;

    modalOverlay.classList.remove('hidden');
    void modalOverlay.offsetWidth;
    modalOverlay.classList.add('visible');
  }

  function closeModal() {
    modalOverlay.classList.remove('visible');
    setTimeout(() => {
      modalOverlay.classList.add('hidden');
      modalBody.innerHTML = '';
    }, 300);
  }

  closeModalBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Intro Modal Content
  const introContent = `
    <div class="details-content">
      <h2 style="color: var(--f1-red); margin-bottom: 1rem;">THE FASTEST SHOW ON EARTH</h2>
      <p style="font-size: 1.2rem; margin-bottom: 2rem;">Formula 1 is the highest class of international racing for open-wheel single-seater formula racing cars.</p>

      <div class="championship-links" style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap;">
        <a href="#" id="drivers-link" class="card">
          <h3>DRIVERS CHAMPIONSHIP</h3>
          <div class="arrow-right">→</div>
        </a>
        <a href="#" id="constructors-link" class="card">
          <h3>CONSTRUCTORS CHAMPIONSHIP</h3>
          <div class="arrow-right">→</div>
        </a>
      </div>
    </div>
  `;

  // Open Intro Modal
  exploreBtn.addEventListener('click', () => {
    openModal('WELCOME TO F1', introContent);
    attachIntroListeners();
  });

  function attachIntroListeners() {
    const driversLink = document.getElementById('drivers-link');
    const constructorsLink = document.getElementById('constructors-link');

    if (driversLink) {
      driversLink.addEventListener('click', (e) => {
        e.preventDefault();
        openChampionshipModal(
          'DRIVERS CHAMPIONSHIP',
          'The FIA Formula One World Championship for Drivers is one of the premier forms of racing around the world since its inaugural season in 1950. The winner is the driver who accumulates the most points over the course of the season.',
          'VIEW DRIVERS',
          async () => {
            const drivers = await fetchDrivers();
            return `
              <div class="drivers-list">
                ${drivers.map((driver, index) => `
                  <div class="driver-row" style="border-left: 4px solid #${driver.team_colour}">
                    <div class="driver-pos">${driver.driver_number || '-'}</div>
                    <img src="${driver.headshot_url || DEFAULT_IMAGE}" alt="${driver.name_acronym}" class="driver-headshot" style="width: 50px; height: 50px; object-fit: cover; border-radius: 50%; margin-right: 1rem; background: #333;">
                    <div class="driver-info">
                      <div class="driver-name">${driver.first_name} ${driver.last_name.toUpperCase()}</div>
                      <div class="driver-team" style="color: #${driver.team_colour}">${driver.team_name}</div>
                    </div>
                    <div class="driver-points">${driver.name_acronym}</div>
                  </div>
                `).join('')}
              </div>
            `;
          }
        );
      });
    }

    if (constructorsLink) {
      constructorsLink.addEventListener('click', (e) => {
        e.preventDefault();
        openChampionshipModal(
          'CONSTRUCTORS CHAMPIONSHIP',
          'The FIA Formula One World Championship for Constructors is awarded to the most successful constructor of the season, as determined by a points system based on Grand Prix results. The Constructors Championship was first awarded in 1958.',
          'VIEW CONSTRUCTORS',
          async () => {
            const teams = await fetchConstructors();
            return `
              <div class="teams-grid">
                ${teams.map(team => `
                  <div class="team-card" style="border-top: 4px solid #${team.color}">
                    <img src="${team.image}" alt="${team.name}" class="team-logo" loading="lazy">
                    <div class="team-name">${team.name}</div>
                  </div>
                `).join('')}
              </div>
            `;
          }
        );
      });
    }
  }

  // Specialized Modal for Championships
  function openChampionshipModal(title, description, buttonText, contentRenderer) {
    modalTitle.textContent = title;
    modalBody.innerHTML = `
      <div class="modal-intro">
        <p class="modal-description">${description}</p>
        <button id="view-standings-btn" class="btn-primary" style="margin-top: 2rem;">${buttonText}</button>
      </div>
    `;

    // Add listener to the new button
    document.getElementById('view-standings-btn').addEventListener('click', () => {
      modalBody.innerHTML = '<div class="loading">Loading...</div>';
      contentRenderer().then(html => {
        modalBody.innerHTML = html;
      });
    });
  }
});

const BASE_URL = 'http://ergast.com/api/f1/current';

// Mapping for team logos (using public Wikimedia/transparent URLs)
const TEAM_IMAGES = {
    "red_bull": "https://upload.wikimedia.org/wikipedia/en/c/c4/Red_Bull_Racing_logo.svg",
    "ferrari": "https://upload.wikimedia.org/wikipedia/en/c/c0/Scuderia_Ferrari_Logo.svg",
    "mercedes": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Mercedes_AMG_Petronas_F1_Logo.svg",
    "alpine": "https://upload.wikimedia.org/wikipedia/fr/b/b7/Alpine_F1_Team_2021_Logo.svg",
    "mclaren": "https://upload.wikimedia.org/wikipedia/en/6/66/McLaren_Racing_logo.svg",
    "sauber": "https://upload.wikimedia.org/wikipedia/commons/b/be/Kick_Sauber_logo.svg", // Stake F1 Team Kick Sauber
    "aston_martin": "https://upload.wikimedia.org/wikipedia/fr/7/72/Aston_Martin_Aramco_Cognizant_F1.svg",
    "haas": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Haas_F1_Team_logo.svg",
    "rb": "https://upload.wikimedia.org/wikipedia/en/b/b5/Visa_Cash_App_RB_Formula_One_Team_logo.svg", // Visa Cash App RB
    "williams": "https://upload.wikimedia.org/wikipedia/en/c/cb/Williams_F1_logo_2020.svg"
};

// Fallback image
const DEFAULT_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg";

export async function fetchConstructors() {
    try {
        const response = await fetch(`${BASE_URL}/constructors.json`);
        const data = await response.json();
        const constructors = data.MRData.ConstructorTable.Constructors;

        return constructors.map(team => ({
            id: team.constructorId,
            name: team.name,
            nationality: team.nationality,
            url: team.url,
            image: TEAM_IMAGES[team.constructorId] || DEFAULT_IMAGE
        }));
    } catch (error) {
        console.error("Failed to fetch constructors:", error);
        return [];
    }
}

export async function fetchDrivers() {
    try {
        // Fetching drivers and including constructor info to group them
        const response = await fetch(`${BASE_URL}/driverStandings.json`);
        const data = await response.json();
        const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

        return standings.map(standing => ({
            id: standing.Driver.driverId,
            code: standing.Driver.code,
            number: standing.Driver.permanentNumber,
            firstName: standing.Driver.givenName,
            lastName: standing.Driver.familyName,
            nationality: standing.Driver.nationality,
            team: standing.Constructors[0].name,
            teamId: standing.Constructors[0].constructorId,
            points: standing.points,
            wins: standing.wins
        }));
    } catch (error) {
        console.error("Failed to fetch drivers:", error);
        return [];
    }
}

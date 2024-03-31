import RaceCraftCharacterSheet from "./racecraft-sheet.js";
import RaceCraftUI from "./racecraft-ui.js";

async function loadRaces() {
    try {
        const response = await fetch("modules/racecraft/races.json");
        if (!response.ok) {
            throw new Error("Could not load races.json");
        }
        return await response.json();
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

Hooks.once('ready', async () => {
    const racesData = await loadRaces();
    console.log("RaceCraft data loaded", racesData);

    // Make use of racesData as needed, e.g., passing to UI classes or storing in module settings

    // Example of passing racesData to a UI class
    class UI {
        constructor(data) {
            this.data = data;
        }

        displayRaces() {
            console.log(this.data);
            // Implement UI logic to display racesData
        }
    }

    const ui = new UI(racesData);
    ui.displayRaces();

    // Example of storing racesData in module settings
    const moduleSettings = {
        races: racesData,
        // Add more module settings as needed
    };

    console.log(moduleSettings);

    // Your existing code to open RaceCraft UI goes here
});

Hooks.once('init', () => {
    game.settings.register("racecraft", "enable", {
        name: "Enable RaceCraft",
        hint: "Enable the RaceCraft module",
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
        onChange: value => {
            console.log("RaceCraft setting changed to: " + value);
            location.reload();
        }
    });

    Actors.registerSheet("dnd5e", RaceCraftCharacterSheet, {
        types: ["character"],
        makeDefault: true,
        label: "RaceCraft Character Sheet",
    });
});

export default loadRaces;

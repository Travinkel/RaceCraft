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

function addRaceCraftTab(app, html, data) {
    const raceCraftTabButton = $(`<a class="item" data-tab="racecraft">RaceCraft</a>`);
    html.find('.tabs[data-group="primary"]').append(raceCraftTabButton);

    // Create the content container for the RaceCraft tab
    const raceCraftContent = $(`
        <div class="tab" data-tab="racecraft">
            <!-- Content goes here -->
            <div>Customize your racial traits here.</div>
            </div>
        `);
        html.find('.sheet-body').append(raceCraftContent);
        // Optional: Initialize any JavaScript for interative elements within your new tab
        
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
});

Hooks.on("renderActorSheet5eCharacter", (app, html, data) => {
    addRaceCraftTab(app, html, data);
  });

export default loadRaces;

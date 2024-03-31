async function loadRaces() {
    const response = await fetch("modules/racecraft/races.json");
    if (!response.ok) {
        console.error("Could not load races.json");
        return;
    }
    const data = await response.json();
    console.log(data);
}

Hooks.once('ready', async () => {
    await loadRaces();
});

Hooks.on('ready', () => {
    console.log("RaceCraft is ready");
      // Example: Add a button to the game UI or a specific context menu
        // This is just a placeholder; the actual implementation may vary
        const openRaceCraftUI = () => {
            new RaceCraftUI().render(true);
        };
});

export default loadRaces;
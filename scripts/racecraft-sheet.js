class RaceCraftCharacterSheet extends ActorSheet5eCharacter {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            tabs: [{ navSelector: ".tabs", contentSelector: ".sheet-body", initial: "racecraft" }],
            template: "./templates/racecraft-sheet.html",
            width: 800,
            height: 600,
        });
    }

    getData() {
        const baseData = super.getData();
        const dynamicRacecraftData = this.actor.getFlag("racecraft", "data") || {};
        
        baseData.racecraft = {
            tabTitle: "RaceCraft Features",
            tabContent: "Customize your racial traits here.",
            ...dynamicRacecraftData
        };

        return baseData;
    }

    activateListeners(html) {
        super.activateListeners(html);
        html.find('.trait-item input[type="checkbox"]').change(event => {
            this._onTraitToggle(event.currentTarget);
        });
    }

    _onTraitToggle(checkbox) {
        // Implement logic to handle trait selection/deselection
        // Update actor data or module settings as needed
    }

    _onRaceCraftAction(event) {
        event.preventDefault();
        // Handle your custom tab actions here
    }

    displayRaces(racesData, html) {
        const racecraftTab = html.find('.tab[data-tab="racecraft"]');
        // Populate racecraftTab with your races data
      }
}


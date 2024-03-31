// Optimized JavaScript code

class RaceCraftUI extends FormApplication {
    static get defaultOptions() {
        return mergeObjects(super.defaultOptions, {
            id: "racecraft-ui",
            title: "RaceCraft",
            template: "templates/apps/racecraft-ui.html",
            width: 800,
            height: 600,
            resizable: true,
        });
    }

    async getData() {
        const data = await super.getData();
        data.races = await loadRaces();
        return data;
    }

    async toggleTraitSelection(trait) {
        // Logic to add/remove the trait from the selection
        // This could involve updating an array of selected traits and then updating the UI

        this.updateSelectedTraitsUI();
        this.updateBalanceScore();
    }

    updateSelectedTraitsUI() {
        // Logic to update the UI to reflect the selected traits
    }

    async activateListeners(html) {
        super.activateListeners(html);

        const traitsList = html.find("#racraft-traits-list");
        this.racesData.features.forEach(trait => {
            // Create DOM elements for each trait
            const traitElement = document.createElement("li");
            // Event listener for trait selection
            traitElement.addEventListener('click', () => this.toggleTraitSelection(trait));
            traitsList.append(traitElement);
        });

        // Event listener for trait item click
        html.find('.trait-item').click(event => {
            this.toggleTraitSelection(event);
        });
    }
}

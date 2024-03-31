class RaceCraftUI extends FormApplication{
    static get defaultOptions(){
        return mergeObjects(super.defaultOptions, {
            id: "racecraft-ui",
            title: "RaceCraft",
            template: "templates/apps/racecraft-ui.html",
            width: 800,
            height: 600,
            resizable: true,
        });

    // Add methods and properties to the RaceCraftUI class
}

async getData(){
    const data = await super.getData();
    data.races = await loadRaces();
    return data;
}

async toggleTraitSelection(event){
    const li = event.currentTarget;
    li.classList.toggle("active");
}

async activeListeners(html){
    super.activateListeners(html);
    html.find('.trait-item').click(event => {
        this.toggleTraitSelection(event);
})};}
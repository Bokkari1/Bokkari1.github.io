export default class Character {

    constructor({ id, name, image, gender, species, status }) {
        this.id = id;     
      this.name = name;
      this.image = image; 
      this.gender = gender;
      this.species = species;
      this.status = status;
      this.$characterContainer = document.querySelector('#character-image-container');
      this.$characterDescriptionContainer = document.querySelector('#character-description-container');
      this.$characterNameContainer = document.querySelector('#character-name-container');
      this.$characterNamePlaceholder = document.querySelector('#name-placeholder');
      this.render();
    }

    buildImage() {
        return `
            <img class="character-image" src=${this.image} alt="${this.name}">
        `;
    }

    buildName() {
        return `
            <div class="character-name"> 
                <h2>${this.name}</h2>
            </div>        
        `;
    }

    

    buildDescription() {
        return `
            <div class="character-labels">
                <h3 class="character-label">ID: ${this.id}</h3>
                <h3 class="character-label">Genero: ${this.gender}</h3>
                <h3 class="character-label">Specie: ${this.species} </h3>
                <h3 class="character-label">Status: ${this.status}</h3>
            </div>        
        `;
    }

    render() {
      this.$characterContainer.innerHTML = this.buildImage();
      this.$characterNameContainer.innerHTML = this.buildName();
      this.$characterDescriptionContainer.innerHTML = this.buildDescription();
      this.$characterNamePlaceholder.innerHTML = "Rick and Morty";
    }
}
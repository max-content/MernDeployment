console.log("YOU ARE IN ROUTES");

const PetController = require('../controllers/pet.controller');
module.exports = function(app) {
    app.get('/api', PetController.index);
    app.post('/api/petsheleter/add', PetController.createPet);
    app.get('/api/petshelter/all', PetController.allPets);
    app.get('/api/petshelter/:id', PetController.getPet);
    app.put('/api/petshelter/:id', PetController.updatePet);
    app.delete('/api/petshelter/:id', PetController.deletePet);
}
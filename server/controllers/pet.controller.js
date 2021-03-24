console.log("I am the Pet Controller");
const { request, response } = require("express");
const { model, modelNames } = require("mongoose");
const { Pet } = require("../models/pet.model");

// ==================Index Hello World =====================
module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

// ==================Create Route =====================
module.exports.createPet = (request, response) => {
    //const {name } = request.body;
    Pet.create(request.body)
    .then(pet => response.json(pet))
    .catch(err => response.json(err));
}

// ==================Show All Pets =====================
module.exports.allPets = (request, response) => Pet.find({})
    .sort('-type')
    .then(pet => response.json(pet))
    .catch(err => response.json(err));

// ==================Show by ID =====================
module.exports.getPet = (request, response) => {
    Pet.findOne({_id:request.params.id})
        .then(pet => response.json(pet))
        .catch(err => response.json(err))
}

// ==================Edit By ID =====================
module.exports.updatePet = (request, response) => {
    Pet.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatedPet => response.json(updatedPet))
    .catch(err => response(err))
}

// ================== Delete by ID =====================
module.exports.deletePet = (request, response) => {
    Pet.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}
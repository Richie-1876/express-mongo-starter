//Dependencies

const mongoose = require('mongoose')

// model

const recipeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  ingredients: [{type: String}],
  instructions: [{type: String}],
  img: String,
  servings: Number
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe

///////////////////////// Dependencies ////////////////////////////
const express = require('express')
const Recipe = require('../models/recipe_model.js')
const recipes = express.Router()
/*
====================================================================
                            ROUTES
====================================================================
                      PRESENTATION ROUTES
====================================================================
*/
//////////////////////// INDEX ROUTE ////////////////////////////////

recipes.get('/', (req,res) => {
  Recipe.find({}, (err, allRecipes) => {
    res.render('index.ejs', {
      recipes: allRecipes
    })
  })

})


////////////////////////// NEW ROUTE ////////////////////////////////

recipes.get('/new', (req,res) => {
  res.render('new.ejs')
})

////////////////////////// SEED ROUTE ///////////////////////////////


/////////////////////////// SHOW ROUTE //////////////////////////////
recipes.get('/:id', (req,res) => {
  Recipe.findById(req.params.id, (err, foundRecipe) => {
    res.render('show.ejs', {
      recipe: foundRecipe
    })
  })
})
/////////////////////////// EDIT ROUTE /////////////////////////////


/*
====================================================================
                        FUNCTION ROUTES
====================================================================
*/

/////////////////////// CREATE ROUTE //////////////////////////////////
recipes.post('/', (req,res) => {
  let ingredients = req.body.ingredients.split(',')
  req.body.ingredients = ingredients
  let instructions = req.body.instructions.split('+')
  req.body.instructions = instructions
Recipe.create(req.body, (err, createdRecipe) => {
  console.log(createdRecipe)

})


})


/////////////////////////// UPDATE ROUTE /////////////////////////////



//////////////////////////// DELETE ROUTE ////////////////////////////

module.exports = recipes

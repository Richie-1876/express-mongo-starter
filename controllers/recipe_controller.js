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
const isAuthenticated = (req,res,next) => {
  if(req.session.currentUser) {
    next()
  } else {
    res.redirect('/sessions/new')
  }
}
//////////////////////// INDEX ROUTE ////////////////////////////////

recipes.get('/', (req,res) => {
  Recipe.find({}, (err, allRecipes) => {
    res.render('recipes/index.ejs', {
      recipes: allRecipes,
      currentUser: req.session.currentUser
    })
  })

})


////////////////////////// NEW ROUTE ////////////////////////////////

recipes.get('/new', isAuthenticated, (req,res) => {
  res.render('recipes/new.ejs', {
    currentUser: req.session.currentUser
  })
})

////////////////////////// SEED ROUTE ///////////////////////////////


/////////////////////////// SHOW ROUTE //////////////////////////////
recipes.get('/:id', (req,res) => {
  Recipe.findById(req.params.id, (err, foundRecipe) => {
    res.render('recipes/show.ejs', {
      recipe: foundRecipe,
      currentUser: req.session.currentUser
    })
  })
})
/////////////////////////// EDIT ROUTE /////////////////////////////
recipes.get('/:id/edit', isAuthenticated, (req,res) => {
  console.log(req.body);
  Recipe.findById(req.params.id, (err, foundRecipe) => {
    res.render('recipes/edit.ejs', {
      recipe: foundRecipe,
      currentUser: req.session.currentUser
    })
  })
})

/*
====================================================================
                        FUNCTION ROUTES
====================================================================
*/

/////////////////////// CREATE ROUTE //////////////////////////////////
recipes.post('/', isAuthenticated, (req,res) => {
  let ingredients = req.body.ingredients.split(',')
  req.body.ingredients = ingredients
  let instructions = req.body.instructions.split('+')
  req.body.instructions = instructions
Recipe.create(req.body, (err, createdRecipe) => {
  res.redirect('/recipes')

})


})


/////////////////////////// UPDATE ROUTE /////////////////////////////
recipes.put('/:id', isAuthenticated, (req,res) => {
  let ingredients = req.body.ingredients.split(',')
  req.body.ingredients = ingredients
  let instructions = req.body.instructions.split('+')
  req.body.instructions = instructions
  Recipe.findByIdAndUpdate(req.params.id, req.body, (err, updatedRecipe) => {
    res.redirect('/recipes')
  })
})


//////////////////////////// DELETE ROUTE ////////////////////////////
recipes.delete('/:id', isAuthenticated, (req, res) => {
  Recipe.findByIdAndRemove(req.params.id, (err, deletedRecipe) => {
    res.redirect('/recipes')
  })
})

module.exports = recipes

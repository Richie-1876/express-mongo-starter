const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const User = require('../models/users_model.js')

//////////////////////// sign in show route //////////////////////////////////

sessions.get('/new', (req,res) => {
  res.render('sessions/new.ejs', {
    currentUser: req.session.currentUser
  })
})

//////////////////////// sign in function route //////////////////////////////

sessions.post('/', (req,res) => {
  User.findOne({username:req.body.username}, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else if (!foundUser) {
      res.send('<a href="/">Sorry, no user found<a/>')
    } else {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser
        res.redirect('/recipes')
      } else {
        res.send('<a href="/"> password does not match<a/>')
      }
    }
  })
})


/////////////////////// delete session route ////////////////////////////////

sessions.delete('/', (req,res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})



module.exports = sessions

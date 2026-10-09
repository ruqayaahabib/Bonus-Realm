const router = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user') //fixing file name in the path

// SIGN UP FORM
router.get('/sign-up', (req, res) => {
  res.render('auth/sign-up.ejs') //remove the slash from the /auth path
})

// CREATE USER
router.post('/sign-up', async (req, res) => {
  try {
    const userInDatabase = await User.findOne({ username: req.body.username })

    if (userInDatabase) {
      return res.send('Username already taken')
    }

    if (req.body.password !== req.body.confirmPassword) {
      return res.send('Password must match confirm password')
    }

    const hashedPassword = bcrypt.hashSync(req.body.password, 10) //Hash the password instead of the username

    await User.create({
      username: req.body.username,
      password: hashedPassword,
    })

    res.redirect('/auth/sign-in')
  } catch (error) {
    console.log(error)
    res.send('The Royal Registry could not create this knight.')
  }
})

// SIGN IN FORM
router.get('/sign-in', (req, res) => {
  res.render('auth/sign-in.ejs')
})

// CREATE SESSION
router.post('/sign-in', async (req, res) => {
  try {
    const userInDatabase = await User.findOne({ username: req.body.username })

    if (!userInDatabase) {
      return res.send('Please sign up or use a valid username')
    }

    const validPassword = bcrypt.compareSync( //fix argument order
      req.body.password,
      userInDatabase.password
    )

    if (!validPassword) {
      return res.send('Password or username incorrect')
    }

    req.session.user = {
      username: userInDatabase.username,
      _id: userInDatabase._id,
    }

    res.redirect('/royal-vault') //redirect to the home page instead of an ejs file
  } catch (error) {
    console.log(error)
    res.send('The Gatekeeper could not verify your identity.')
  }
})

// DESTROY SESSION
router.get('/sign-out', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})

module.exports = router

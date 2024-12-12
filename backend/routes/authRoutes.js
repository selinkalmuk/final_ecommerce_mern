const express = require('express');
const passport = require('passport');
require('../controllers/authController');
const router = express.Router();

// Google ile giriş başlatma
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// Giriş sonrası yönlendirme
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/profile'); // Başarılı giriş sonrası yönlendirme
  }
);

module.exports = router; 
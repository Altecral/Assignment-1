/* Alejandro Manrique, 301230671, 06/15/2023 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/projects', function(req, res) {
  res.render('projects');
});

router.get('/services', function(req, res) {
  res.render('services');
});

router.get('/contact', function(req, res) {
  res.render('contact');
});

//Path fot the pdf document
router.get('/Resume', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/Resume.pdf'));
});

//Contact form, redirecting to index '/'
router.post('/', function(req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const contactNumber = req.body.contactNumber;
  const emailAddress = req.body.emailAddress;
  const message = req.body.message;

  // Process the form data (e.g., save to database, send an email, etc.)

  // Redirect back to the home page
  res.redirect('/');
});

module.exports = router;

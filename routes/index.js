var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/about', (req, res)=>{
  res.render('about');
});

router.get('/businessideas/add', (req, res)=>{
  res.render('businessideas/add');
});

module.exports = router;

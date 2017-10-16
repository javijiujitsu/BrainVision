var express = require('express');
var router = express.Router();
const Businessidea  = require('../models/Businessidea');


//GET
router.get('/businessideas/add', (req, res)=>{
  res.render('businessideas/add');
});

//POST

router.post('/businessideas', (req, res)=>{

  let errors =[];

  if(!req.body.title){
    errors.push({text:'Please add a title'});
  }
  if(!req.body.details){
    errors.push({text:'Please add a details'});
  }
  if(errors.length > 0){
    res.render('businessideas/add', {
    errors: errors,
    title: req.body.title,
    details: req.body.details
  });
  } else {
  const newUser = {
    title: req.body.title,
    details: req.body.details
  }
  new Businessidea(newUser)
  .save()
  .then(businessidea => {
      res.redirect('/businessideas');
    })
  }
  });























module.exports = router;

var express = require('express');
var router = express.Router();


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
  if(!req.body.description){
    errors.push({text:'Please add a description'});
  }
  if(errors.length > 0){
    res.render('businessideas/add', {
    errors: errors,
    title: req.body.title,
    description: req.body.description
  });
  } else {
  res.send('passed');
  }
  });























module.exports = router;

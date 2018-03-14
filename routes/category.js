var express = require('express');
var router = express.Router();

const Category =  require('../models/category');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  Category.find(function(err,category){
  	res.json(category);
  })


});

router.post('/',(req,res,next)=>{
	let newCategory= new Category({
		category_id:req.body.category_id,
		category_name:req.body.category_name,
		category_description:req.body.category_description
	});

	newCategory.save((err,category)=>{
		if(err){
			res.json({msg:'failed to add new category'+err});
		}
		else{
			res.json({msg:'category added sucessfully'});	
		}
	});
});

router.delete('/:category_id',(req,res,next)=>{
	Category.remove({category_id:req.params.category_id},(err,resp)=>{
		if(err){
			res.json(err);
		}else{
			res.json(resp);
		}
	});
});


module.exports = router;

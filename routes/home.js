const Router = require('express').Router;
const fs = require('fs');
const Sequelize = require('sequelize');
const Film = require('../models/Film.js');

const router = new Router();
router.get('/',async function(req,res){
	const film = await Film.findAll({
		order : [
			/*['film_ViewCount' , 'DESC']	*/
		]
	});
	// Xóa dòng này đi , chừng nào cần thì show ra 
	//console.log(film);
	res.render('home.ejs',{film});
});


router.get('/film/:id',async function(req,res){
	const id = Number(req.params.id);
	const filmID =await Film.findOne({
		where :{
			film_ID : id ,
		}
	});
	// Dòng này cũng thế
	//console.log(filmID);
	res.render('home.ejs',{filmID});
});

router.get('/forgotPassword',function(req,res){
	res.render('forgotPassword.ejs');
});

module.exports =router;

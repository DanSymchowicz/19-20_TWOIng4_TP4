var express = require('express');
var router = express.Router();

// let movie[{
//     id: String,
//     movie: String,
//     yearOfRelease: Number,
//     duration: Number // en minutes,
//     actors: [String, String],
//     poster: String // lien vers une image d'affiche,
//     boxOffice: Number // en USD$,
//     rottenTomatoesScore: Number
//    }];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); 


module.exports = router;
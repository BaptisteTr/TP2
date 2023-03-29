var express = require('express');
var router = express.Router();
var {chercherMessage, enregistrerMessage} = require('../prep/db/conn.js')

/* GET users listing. */
router.post('/', function(req, res, next) {
  
  console.log(req.body)

  enregistrerMessage(req.body.nom, req.body.email, req.body.message)
    .then(valeur => {
      res.setHeader("Content-type","application/json");
      res.send(valeur);
    })
    .catch(error => {
      console.log(error);
    })

});

module.exports = router;

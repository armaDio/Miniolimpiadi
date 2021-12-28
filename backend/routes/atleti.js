const express = require("express");
const { mongo } = require("mongoose");
const router = express.Router()
const Atleta = require("../models/atleta.model")
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
router.get("/", async (req, res) => {
	const atleta = await Atleta.find();
    res.type('json');
	res.status(200).json(atleta);
})

router.get("/:id", (req, res) => {

    const atleta = Atleta.find({ 'id': req.params.id },
        function (err, post) {
            if (err) 
                res.status(500).send(err);
            res.type('json');
            res.status(200).json(post);
    });
})

router.post('/', jsonParser, function(req, res, next) {
    console.log(req.body);
    Atleta.create(req.body, function (err, post) {
        if (err) 
            return next(err);
        res.json(post);
    });
});

router.put('/:id', jsonParser, function(req, res, next) {
    Atleta.findOneAndUpdate({ 'id': req.params.id }, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


router.delete('/:id', function(req, res, next) {
    Atleta.findOneAndRemove({ 'id': req.params.id }, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
   });
module.exports = router;
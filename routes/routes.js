const express = require('express');
const modelzRoutes = express.Router();
const Modelz = require('../models/model');

modelzRoutes.get('/', (req, res) => {
    Modelz.find({}, (err, modelzs) => {
        if (err) return res.status(500).send(err);
        return res.send(modelzs);
    })
});
modelzRoutes.post('/', (req, res) => {
    const newModelz = new Modelz(req.body);
    newModelz.save((err) => {
        if (err) return res.status(500).send(err);
        return res.send(newModelz);
    })
});
modelzRoutes.get('/:id', (req, res) => {
    Modelz.findById(req.params.id, (err, modelz) => {
        if (err) return res.status(500).send(err);
        return res.send(modelz);
    })
});
modelzRoutes.put('/:id', (req, res) => {
    Modelz.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModelz) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedModelz);
    })
});
modelzRoutes.delete('/:id', (req, res) => {
    Modelz.findByIdAndRemove(req.params.id, (err, deletedModelz) => {
        if (err) return res.status(500).send(err);
        return res.send(deletedModelz);
    })
});     

module.exports = modelzRoutes;
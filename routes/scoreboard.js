const express = require('express');
const scoreRoutes = express.Router();
const Score = require('../models/scoreboard');

scoreRoutes.route("/")
    .get((req, res) => {
        Score.find({}, (err, score) => {
            if (err) return res.status(500).send(err);
            return res.send(score);
        })
    })
    .post((req, res) => {
        const newScore = new Score(req.body);
        newScore.save((err) => {
            if (err) return res.status(500).send(err);
            return res.send(newScore);
        })
    });
scoreRoutes.route("/:id")
    .get((req, res) => {
        Score.findById(req.params.id, (err, score) => {
            if (err) return res.status(500).send(err);
            return res.send(score);
        })
    })
    .put((req, res) => {
        Score.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedScore) => {
            if (err) return res.status(500).send(err);
            return res.send(updatedScore);
        })
    })
    .delete((req, res) => {
        Score.findByIdAndRemove(req.params.id, (err, deletedScore) => {
            if (err) return res.status(500).send(err);
            return res.send(deletedScore);
        })
    });

module.exports = scoreRoutes;
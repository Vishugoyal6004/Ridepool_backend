const express = require('express');
const router = express.Router();
const Passenger = require('../models/passenger');



router.get('/', (req, res, next) => {

    Passenger.find()
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(500).json({
                err
            })
        });
});

router.post('/',  async (req, res, next) => {

    try {
        const { body } = req;

        const payload = new Product({
            _id: new mongoose.Types.ObjectId(),
            origin: body.origin,
            destination: body.destination,
            date: body.date,
            time: body.time,
            seats: body.seats,
            name: body.name,

        });
        payload
            .save()
            .then(result => {
                res.status(200).send('Submitted Successfully');
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });

    } catch (err) {
        res.send(err.message)
    }

});



module.exports = router;